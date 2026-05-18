"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
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

const mindsetSlides = [
  { src: "/gundam.jpeg", label: "Gunpla" },
  { src: "/art.jpeg", label: "Art" },
  { src: "/track.jpeg", label: "Athletics" },
];

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, delay: i * 0.1, ease: easeOut },
  }),
};

export function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % mindsetSlides.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section pb-28" style={{ scrollMarginTop: "120px" }}>
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

      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr_0.95fr] lg:items-stretch">
        <div className="space-y-4 lg:flex lg:h-full lg:flex-col lg:gap-4 lg:space-y-0">
          <motion.article
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card-base p-6 flex flex-col lg:flex-1"
          >
            <h3 className="font-display text-5xl font-bold leading-none tracking-tight">Mindset</h3>
            <div className="mt-3 h-0.5 w-14 rounded-full" style={{ background: "var(--accent)" }} />

            <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Building more than software. My passions provide the{" "}
              <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                discipline and focus
              </span>{" "}
              I need to grow.
            </p>

            <div className="relative mt-7 flex min-h-[280px] items-center justify-center">
              {mindsetSlides.map((slide, index) => {
                const isActive = index === activeSlide;
                const prevIndex = (activeSlide - 1 + mindsetSlides.length) % mindsetSlides.length;
                const nextIndex = (activeSlide + 1) % mindsetSlides.length;
                const isSide = index === prevIndex || index === nextIndex;

                return (
                  <motion.div
                    key={slide.src}
                    animate={{
                      opacity: isActive ? 1 : isSide ? 0.22 : 0,
                      scale: isActive ? 1 : 0.93,
                      x: isActive ? 0 : index === prevIndex ? -92 : index === nextIndex ? 92 : 0,
                      zIndex: isActive ? 20 : 10,
                    }}
                    transition={{ duration: 0.7, ease: easeOut }}
                    className="absolute w-[72%] max-w-[260px]"
                  >
                    <div
                      className="overflow-hidden rounded-3xl border p-1.5"
                      style={{
                        borderColor: isActive ? "var(--accent)" : "var(--card-border)",
                        boxShadow: isActive ? "0 18px 40px rgba(0, 0, 0, 0.35)" : "none",
                        background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
                      }}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.label}
                        width={700}
                        height={900}
                        className="h-[255px] w-full rounded-[1.1rem] object-cover"
                      />
                      <div
                        className="pointer-events-none absolute bottom-5 left-5 rounded-lg border px-3 py-1.5"
                        style={{
                          borderColor: "rgba(255,255,255,0.35)",
                          background: "rgba(12, 14, 20, 0.7)",
                          backdropFilter: "blur(2px)",
                        }}
                      >
                        <p className="font-display text-sm font-extrabold uppercase tracking-wide text-white">
                          {slide.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Mastering body and mind is my path to{" "}
              <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                excellence
              </span>
              .
            </p>
          </motion.article>

          <motion.article
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card-base p-5"
          >
            <div className="flex items-end justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
                  Education
                </p>
                <h4 className="mt-2 font-display text-xl font-bold leading-tight">B.Tech in Computer Science</h4>
                <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                  Abes Engineering College
                </p>
                <p className="mt-1 font-mono text-xs" style={{ color: "var(--muted-2)", letterSpacing: "0.08em" }}>
                  2021 - 2025
                </p>
              </div>
              <div className="font-display text-4xl" style={{ color: "var(--accent)", opacity: 0.35 }}>
                []
              </div>
            </div>
            <div
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1"
              style={{ borderColor: "var(--card-border)", background: "var(--card-2)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              <span className="font-mono text-xs" style={{ color: "var(--muted)", letterSpacing: "0.08em" }}>
                Focus: Full-stack & Systems
              </span>
            </div>
          </motion.article>
        </div>

        <div className="space-y-4 lg:flex lg:h-full lg:flex-col lg:gap-4 lg:space-y-0">
          <motion.article
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card-base p-7"
          >
            <span className="section-label">About Me</span>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{siteConfig.name}</h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
              {siteConfig.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              I design and build reliable digital experiences - balancing product thinking, clean architecture, and speed. From backend APIs to pixel-perfect UIs.
            </p>
          </motion.article>

          <motion.article
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

          <motion.article
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card-base p-5 lg:mt-auto"
          >
            <div className="flex items-end justify-between">
              <div>
                <p className="font-display text-5xl font-black tracking-tight" style={{ color: "var(--foreground)" }}>
                  INDIA
                </p>
                <p className="mt-1 font-mono text-xs" style={{ color: "var(--muted)", letterSpacing: "0.1em" }}>
                  28.6139 N, 77.2090 E
                </p>
                <p className="font-mono text-xs" style={{ color: "var(--muted-2)" }}>GMT +5:30</p>
              </div>
              <div className="font-display text-5xl" style={{ color: "var(--accent)", opacity: 0.3 }}>
                O
              </div>
            </div>
            <div
              className="mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1"
              style={{ borderColor: "var(--card-border)", background: "var(--card-2)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
              <span className="font-mono text-xs" style={{ color: "var(--muted)", letterSpacing: "0.08em" }}>
                Open to remote
              </span>
            </div>
          </motion.article>
        </div>

        <motion.article
          custom={5}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-base p-6 lg:flex lg:h-full lg:flex-col"
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
                <div
                  className="absolute left-0 top-0 h-full w-px"
                  style={{ background: "linear-gradient(to bottom, var(--accent) 0%, transparent 100%)" }}
                />
                <div
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2"
                  style={{ borderColor: "var(--accent)", background: "var(--background)" }}
                />

                <p className="font-mono text-xs font-bold tracking-wider" style={{ color: "var(--accent)" }}>
                  {item.year}
                </p>
                <h4 className="mt-1 font-display text-base font-bold leading-tight">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border p-4 lg:mt-auto" style={{ borderColor: "var(--card-border)", background: "var(--card-2)" }}>
            <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
              Currently working on
            </p>
            <p className="mt-1 font-display text-sm font-bold" style={{ color: "var(--foreground)" }}>
              Motodevil.shop - Premium e-commerce
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
