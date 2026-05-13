"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/config";
import { Globe } from "@/components/Globe";

const ROLES = [
  "Full Stack Developer",
  "Product Builder",
  "UI/UX Engineer",
  "Open Source Contributor",
];

function TypewriterRole() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false); }, 1800);
      return () => clearTimeout(t);
    }
    const current = ROLES[idx];
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % ROLES.length);
      }
    }
  }, [displayed, deleting, idx, paused]);

  return (
    <span className="font-mono" style={{ color: "var(--accent)", fontSize: "clamp(0.9rem, 2vw, 1.1rem)", letterSpacing: "0.08em" }}>
      {displayed}<span className="animate-pulse">_</span>
    </span>
  );
}

const STAT_ITEMS = [
  { value: "3+", label: "Years coding" },
  { value: "10+", label: "Projects shipped" },
  { value: "∞", label: "Curiosity" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="section relative flex min-h-[100svh] items-center overflow-visible pb-32 pt-24 sm:pt-32 lg:min-h-[112vh]"
    >
      {/* Hero grid bg */}
      <div className="pointer-events-none absolute inset-0 -z-20 hero-grid" />

      {/* Radial glows */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,255,0,0.12) 0%, transparent 70%)" }} />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)" }} />
        <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(157,78,221,0.07) 0%, transparent 70%)" }} />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
      >
        {/* LEFT: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ borderColor: "var(--card-border)", background: "var(--card)", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "var(--accent)" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
              </span>
              Available for hire · Himank Saini
            </div>
          </motion.div>

          {/* Role typewriter */}
          <motion.div variants={itemVariants}>
            <TypewriterRole />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 800 }}
          >
            Building{" "}
            <span className="italic font-serif" style={{ color: "var(--muted)", fontWeight: 300, fontSize: "0.9em" }}>
              useful
            </span>
            <br />
            digital{" "}
            <span className="text-gradient-shimmer">products.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            style={{ color: "var(--muted)", maxWidth: "32rem", lineHeight: 1.7, fontSize: "1.05rem" }}
          >
            {siteConfig.description} I obsess over clean architecture, fast delivery, and experiences that feel alive.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full px-7 py-3 text-sm font-bold transition-all"
              style={{ background: "var(--accent)", color: "#0a0a0f" }}
            >
              <span className="relative z-10">Explore projects</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0 skew-x-12" />
            </a>
            <a
              href={siteConfig.resumeDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border px-7 py-3 text-sm font-bold transition-all hover:border-accent"
              style={{ borderColor: "var(--card-border)", color: "var(--foreground)", background: "var(--card)" }}
            >
              View Resume ↗
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-8 pt-2">
            {STAT_ITEMS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold" style={{ color: "var(--accent)" }}>{s.value}</p>
                <p className="font-mono text-xs mt-0.5" style={{ color: "var(--muted)", letterSpacing: "0.1em" }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.4 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center pb-16 lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-float"
              style={{ background: "radial-gradient(circle, var(--accent-glow-strong) 0%, transparent 70%)", transform: "scale(1.4)" }} />
            <Globe />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--muted)" }}
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="h-8 w-px"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
