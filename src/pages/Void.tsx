import { useEffect, useState } from "react";
export default function Void() {
  const [late, setLate] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLate(true), 8000); return () => clearTimeout(t); }, []);
  return (<div className="min-h-[70vh] flex flex-col justify-center text-dim">
    <p>you weren't supposed to find this.<span className="blink">_</span></p>
    {late && <p className="mt-6 text-xs">...but since you stayed: nothing here is a secret. it's just quiet.</p>}</div>);
}
