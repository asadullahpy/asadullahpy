import { FormEvent, useState } from "react";
const ENDPOINT = "https://formspree.io/f/mvkgyqbg";
type Field = { name: string; label: string; type?: string; required?: boolean; area?: boolean };
export default function Form({ fields, submit }: { fields: Field[]; submit: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget, data = new FormData(form);
    if (data.get("_gotcha")) return;
    const errs: Record<string, string> = {};
    for (const f of fields) {
      const v = String(data.get(f.name) ?? "").trim();
      if (f.required && !v) errs[f.name] = "this one is needed.";
      else if (f.type === "email" && v && !/^\S+@\S+\.\S+$/.test(v)) errs[f.name] = "that doesn't look like an email.";
    }
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setState("sending");
    try {
      const r = await fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error(String(r.status));
      form.reset(); setState("ok");
    } catch { setState("fail"); }
  }
  if (state === "ok") return <p role="status">received. thanks for leaving a trace. <button className="underline ml-2" onClick={() => setState("idle")}>send another</button></p>;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 max-w-lg">
      {fields.map(f => (
        <div key={f.name}>
          <label htmlFor={f.name} className="block text-sm text-dim mb-1">{f.label}{f.required ? "" : " (optional)"}</label>
          {f.area
            ? <textarea id={f.name} name={f.name} rows={5} aria-invalid={!!errors[f.name]} aria-describedby={errors[f.name] ? f.name + "-e" : undefined} className="w-full bg-transparent border border-dim/50 p-2" />
            : <input id={f.name} name={f.name} type={f.type ?? "text"} aria-invalid={!!errors[f.name]} aria-describedby={errors[f.name] ? f.name + "-e" : undefined} className="w-full bg-transparent border border-dim/50 p-2" />}
          {errors[f.name] && <p id={f.name + "-e"} role="alert" className="text-sm text-accent mt-1">{errors[f.name]}</p>}
        </div>))}
      <input name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button disabled={state === "sending"} className="border border-paper px-4 py-2 disabled:opacity-50">{state === "sending" ? "sending..." : submit}</button>
      {state === "fail" && <p role="alert" className="text-accent">that didn't go through. check your connection and try again.</p>}
    </form>
  );
}
