import { useState } from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  const [n, setN] = useState(0);
  return (<div><h1 className="text-6xl">404</h1><p className="text-2xl mt-2">this page escaped.</p>
    <button onClick={() => setN(n + 1)} className="font-sys text-sm mt-8 block text-left">$ locate requested_page<br/>result: not found{n >= 3 && <><br/>...it's not coming back. try /void</>}</button>
    <Link to="/" className="inline-block mt-8 underline">return home</Link></div>);
}
