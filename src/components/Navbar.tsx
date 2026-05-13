"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { href: "#home",     label: "Home" },
  { href: "#about",    label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills",   label: "Skills" },
  { href: "#other",    label: "GitHub" },
  { href: "#contact",  label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navItems.map((item) => item.href.replace("#", ""));
      let current = ids[0];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          current = ids[i];
          break;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <nav className="section">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex h-13 max-w-fit items-center gap-1 rounded-full px-3 shadow-2xl transition-all duration-300"
          style={{
            background: scrolled ? "rgba(10,10,15,0.9)" : "rgba(10,10,15,0.7)",
            backdropFilter: "blur(16px)",
            border: "1px solid var(--card-border)",
            boxShadow: scrolled ? "0 0 30px var(--accent-glow)" : "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          {/* Avatar / Logo */}
          <div className="mr-1 h-8 w-8 overflow-hidden rounded-full border-2"
            style={{ borderColor: "var(--accent)" }}>
            <Image src="/profile-top-placeholder.svg" alt="Profile" width={32} height={32} />
          </div>

          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-200"
                style={{ color: isActive ? "var(--foreground)" : "var(--muted)" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--accent)", opacity: 0.15, border: "1px solid var(--accent)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 font-mono text-xs uppercase tracking-wider">{item.label}</span>
              </a>
            );
          })}
        </motion.div>
      </nav>
    </header>
  );
}
