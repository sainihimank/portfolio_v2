"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

const timeline = [
  {
    year: "2026",
    title: "Full Stack Projects at Scale",
    detail: "Building and deploying products with React, Next.js, TypeScript, and Node.js.",
  },
  {
    year: "2025",
    title: "System Design + API Engineering",
    detail: "Worked on backend architecture, auth flows, and performance-focused APIs.",
  },
  {
    year: "2024",
    title: "Strong Frontend Foundations",
    detail: "Focused on polished, responsive interfaces and component-driven development.",
  },
];

const mindsetImages = ["/gundam.jpeg", "/art.jpeg", "/track.jpeg"];

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function About() {
  return (
    <section id="about" className="section pb-28" style={{ scrollMarginTop: "120px" }}>
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="section-label">Who I Am</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Beyond the <span className="text-gradient-shimmer">code.</span>
        </h2>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr_0.95fr]">

        {/* LEFT: Mindset */}
        <motion.article
          custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="card-base p-6 flex flex-col"
        >
          <span className="section-label">Mindset</span>
          <h3 className="mt-4 font-display text-3xl font-bold leading-tight">More than<br />code.</h3>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Discipline and consistency shape how I build products. Beyond the screen — athletics, art, and curiosity drive everything.
          </p>

          <div className="mt-5 space-y-2 flex-1">
            {mindsetImages.map((src, index) => (
              <motion.div
                key={src}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl border"
                style={{ borderColor: "var(--card-border)" }}
              >
                <Image
                  src={src}
                  alt={`Mindset ${index + 1}`}
                  width={900}
                  height={500}
                  className="h-20 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* Fun tag */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Athletics", "Design", "Systems"].map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </motion.article>

        {/* MIDDLE: Two cards */}
        <div className="space-y-4">
          {/* About text card */}
          <motion.article
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="card-base p-7"
          >
            <span className="section-label">About Me</span>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{siteConfig.name}</h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
              {siteConfig.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              I design and build reliable digital experiences — balancing product thinking, clean architecture, and speed. From backend APIs to pixel-perfect UIs.
            </p>
          </motion.article>

          {/* Photo grid */}
          <motion.article
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border"
            style={{ borderColor: "var(--card-border)" }}
          >
            <div className="bg-[var(--card)]">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                <Image
                  src="/himank.jpeg"
                  alt="Himank Saini"
                  width={700}
                  height={700}
                  className="aspect-square w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.article>

          {/* Location */}
          <motion.article
            custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="card-base p-5"
          >
            <div className="flex items-end justify-between">
              <div>
                <p className="font-display text-5xl font-black tracking-tight" style={{ color: "var(--foreground)" }}>
                  INDIA
                </p>
                <p className="mt-1 font-mono text-xs" style={{ color: "var(--muted)", letterSpacing: "0.1em" }}>
                  28.6139° N, 77.2090° E
                </p>
                <p className="font-mono text-xs" style={{ color: "var(--muted-2)" }}>GMT +5:30</p>
              </div>
              <div className="font-display text-5xl" style={{ color: "var(--accent)", opacity: 0.3 }}>
                ◎
              </div>
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1"
              style={{ borderColor: "var(--card-border)", background: "var(--card-2)" }}>
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
              <span className="font-mono text-xs" style={{ color: "var(--muted)", letterSpacing: "0.08em" }}>
                Open to remote
              </span>
            </div>
          </motion.article>
        </div>

        {/* RIGHT: Timeline */}
        <motion.article
          custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="card-base p-6"
        >
          <span className="section-label">Journey</span>
          <h3 className="mt-4 font-display text-2xl font-bold">Experience<br />Timeline</h3>

          <div className="mt-8 space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year + item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-6"
              >
                {/* Line */}
                <div className="absolute left-0 top-0 h-full w-px"
                  style={{ background: `linear-gradient(to bottom, var(--accent) 0%, transparent 100%)` }} />
                {/* Dot */}
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2"
                  style={{ borderColor: "var(--accent)", background: "var(--background)" }} />

                <p className="font-mono text-xs font-bold tracking-wider" style={{ color: "var(--accent)" }}>
                  {item.year}
                </p>
                <h4 className="mt-1 font-display text-base font-bold leading-tight">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent */}
          <div className="mt-8 rounded-xl border p-4" style={{ borderColor: "var(--card-border)", background: "var(--card-2)" }}>
            <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
              Currently working on
            </p>
            <p className="mt-1 font-display text-sm font-bold" style={{ color: "var(--foreground)" }}>
              Motodevil.shop · Premium e-commerce
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
              <span className="font-mono text-xs" style={{ color: "#22c55e" }}>Live in production</span>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
