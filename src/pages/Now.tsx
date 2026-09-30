import { now } from "../data/content";
export default function Now() {
  return (<><h1 className="text-3xl mb-2">now</h1><p className="text-dim text-sm mb-8">last updated {now.updated}. edit src/data/content.ts.</p>
    <dl className="space-y-6">{now.items.map(([k, v]) => <div key={k}><dt className="text-dim text-sm">{k}</dt><dd className="text-xl">{v}</dd></div>)}</dl></>);
}
