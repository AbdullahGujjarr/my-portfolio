import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [scrollPct, setScrollPct] = useState(0);
  const spring = useSpring(scrollPct, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-transparent">
      <motion.div
        style={{ width: `${scrollPct}%` }}
        className="h-full bg-gradient-to-r from-orange via-cyan to-orange shadow-[0_0_8px_rgba(21,209,233,0.8)]"
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </div>
  );
}
