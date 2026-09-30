import { useEffect, useState } from "react";
export function useClock() {
  const [now, setNow] = useState(new Date());
  const [start] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  const s = Math.floor((now.getTime() - start) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return { time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    day: now.toLocaleDateString([], { weekday: "long" }).toLowerCase(),
    session: `${pad(Math.floor(s / 60))}:${pad(s % 60)}`, hour: now.getHours() };
}
