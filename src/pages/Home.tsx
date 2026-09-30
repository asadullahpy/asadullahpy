import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { thoughts } from "../data/content";
import { useClock } from "../hooks/useClock";
export default function Home() {
  const c = useClock();
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI(n => (n + 1) % thoughts.length), 7000); return () => clearInterval(t); }, []);
  return (<div className="min-h-[80vh] flex flex-col justify-center">
    <p className="font-sys text-xs text-dim mb-6">somewhere on the internet · {c.time} {c.day} · session {c.session}</p>
    <h1 className="text-4xl sm:text-6xl tracking-tight">ASADULLAH.PY</h1>
    <p className="mt-6 text-2xl sm:text-3xl">not your average<br/>instagram account.</p>
    <p className="mt-4 max-w-md text-dim">a personal corner for things I build, notice, break, learn, and occasionally overthink.</p>
    <p className="mt-10 text-sm text-accent">{thoughts[i]}<span className="blink">_</span></p>
    <p className="mt-10 text-sm text-dim">if you made it this far, you're probably curious. <Link className="underline" to="/join">say hello</Link></p>
    <p className="mt-6 text-sm text-dim">this site belongs to the same online identity used by <a className="underline" href="https://instagram.com/asadullah.py">@asadullah.py</a> · <a className="underline" href="https://github.com/asadullahpy">github</a></p>
  </div>);
}
