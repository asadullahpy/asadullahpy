import { useEffect } from "react";
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home"; import Manifesto from "./pages/Manifesto"; import Now from "./pages/Now";
import Join from "./pages/Join"; import Guestbook from "./pages/Guestbook"; import Void from "./pages/Void"; import NotFound from "./pages/NotFound";
import { useClock } from "./hooks/useClock";
const nav = [["/now", "now"], ["/manifesto", "manifesto"], ["/guestbook", "guestbook"], ["/join", "join"]];
export default function App() {
  const loc = useLocation(), go = useNavigate(), { hour } = useClock();
  useEffect(() => {
    document.documentElement.dataset.tod = hour < 5 ? "night" : hour < 12 ? "morning" : hour < 18 ? "afternoon" : hour < 22 ? "evening" : "night";
  }, [hour]);
  useEffect(() => {
    const move = (e: MouseEvent) => { document.documentElement.style.setProperty("--mx", e.clientX + "px"); document.documentElement.style.setProperty("--my", e.clientY + "px"); };
    let g = 0;
    const key = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (/INPUT|TEXTAREA/.test(t.tagName) || e.metaKey || e.ctrlKey) return;
      if (g && Date.now() - g < 1200) { const m: Record<string, string> = { h: "/", n: "/now", m: "/manifesto", j: "/join" }; if (m[e.key]) go(m[e.key]); g = 0; }
      else if (e.key === "g") g = Date.now();
    };
    window.addEventListener("mousemove", move); window.addEventListener("keydown", key);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("keydown", key); };
  }, [go]);
  return (<><div className="glow" aria-hidden="true" />
    <div className="relative max-w-2xl mx-auto px-5 py-8">
      <header className="flex justify-between items-baseline mb-16 font-sys text-sm">
        <Link to="/">asadullah.py</Link>
        <nav aria-label="main" className="flex gap-4">{nav.map(([to, l]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? "text-accent" : "text-dim"}>{l}</NavLink>)}</nav></header>
      <AnimatePresence mode="wait"><motion.main key={loc.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
        <Routes location={loc}><Route path="/" element={<Home />} /><Route path="/now" element={<Now />} /><Route path="/manifesto" element={<Manifesto />} />
          <Route path="/join" element={<Join />} /><Route path="/guestbook" element={<Guestbook />} /><Route path="/void" element={<Void />} /><Route path="*" element={<NotFound />} /></Routes>
      </motion.main></AnimatePresence></div></>);
}
