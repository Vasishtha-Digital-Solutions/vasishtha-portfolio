import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function ErpNav({ palette }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-3 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(245,238,221,0.86)"
          : "rgba(245,238,221,0)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        borderBottom: scrolled
          ? `1px solid ${palette.rule}`
          : "1px solid transparent",
      }}
    >
      <Link
        to="/#portfolio"
        className="group flex items-center gap-2 text-xs font-medium tracking-wide uppercase transition-colors"
        style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
      >
        <ArrowLeft
          size={14}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
        <span className="group-hover:text-[color:var(--ink)] transition-colors" style={{ "--ink": palette.ink }}>
          All Projects
        </span>
      </Link>

      <img
        src="/vasishtha-logo.png"
        alt="Vasishtha Digital Solutions"
        style={{ height: 28, width: "auto" }}
        draggable={false}
      />
    </nav>
  );
}
