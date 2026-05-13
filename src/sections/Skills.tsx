"use client";

import { motion } from "framer-motion";
import {
  SiDocker, SiGit, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript,
  SiPostgresql, SiNextdotjs, SiVercel, SiSupabase,
} from "react-icons/si";

const ALL_SKILLS = [
  { name: "React",       icon: SiReact,      color: "#61DAFB" },
  { name: "TypeScript",  icon: SiTypescript,  color: "#3178C6" },
  { name: "Next.js",     icon: SiNextdotjs,   color: "#ffffff" },
  { name: "Node.js",     icon: SiNodedotjs,   color: "#339933" },
  { name: "Tailwind",    icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL",  icon: SiPostgresql,  color: "#4169E1" },
  { name: "Supabase",    icon: SiSupabase,    color: "#3ECF8E" },
  { name: "Docker",      icon: SiDocker,      color: "#2496ED" },
  { name: "Git",         icon: SiGit,         color: "#F05032" },
  { name: "Vercel",      icon: SiVercel,      color: "#ffffff" },
];

// Double for infinite loop
const belt1 = [...ALL_SKILLS, ...ALL_SKILLS];
const belt2 = [...ALL_SKILLS].reverse().concat([...ALL_SKILLS].reverse());

const skillGroups = [
  {
    title: "Frontend",
    icon: "⬡",
    summary: "UI architecture and polished experiences.",
    items: ["Next.js (App & Pages Router)", "React + TypeScript", "Tailwind CSS", "Framer Motion"],
    level: 92,
  },
  {
    title: "Backend",
    icon: "◈",
    summary: "Reliable APIs and production-ready services.",
    items: ["Node.js + REST APIs", "PostgreSQL / Supabase", "Auth, caching, rate-limiting", "Serverless functions"],
    level: 85,
  },
  {
    title: "Shipping",
    icon: "◉",
    summary: "From idea to deployment, with quality.",
    items: ["GitHub CI/CD workflows", "Vercel deployments", "Monitoring + iteration", "Performance optimization"],
    level: 88,
  },
];

function SkillBar({ level }: { level: number }) {
  return (
    <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ background: "var(--card-border)" }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg, var(--accent), var(--gradient-end))" }}
      />
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-0 pb-28"
      style={{ scrollMarginTop: "100px" }}
    >
      {/* Glow orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, var(--accent-glow-strong) 0%, transparent 70%)" }} />

      <div className="section relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label mx-auto">Tech Stack</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-pretty sm:text-5xl md:text-6xl">
            Skills <span className="text-gradient-shimmer">Overview</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base" style={{ color: "var(--muted)" }}>
            Full-stack proficiency — from pixel-perfect UIs to scalable backend systems.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="card-base p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl" style={{ color: "var(--accent)" }}>{group.icon}</span>
                <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>{group.level}%</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold">{group.title}</h3>
              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>{group.summary}</p>
              <SkillBar level={group.level} />
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                    <span style={{ color: "var(--accent)" }}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marquee belts */}
        <div className="mt-10 space-y-3">
          {/* Belt 1 → */}
          <div className="card-base rounded-2xl py-3 overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="flex w-max items-center gap-8 animate-marquee">
                {belt1.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={`b1-${idx}`} className="flex items-center gap-2 px-2">
                      <Icon style={{ color: item.color }} size={16} />
                      <span className="font-mono text-xs uppercase tracking-wider whitespace-nowrap" style={{ color: "var(--muted)" }}>
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Belt 2 ← (reverse) */}
          <div className="card-base rounded-2xl py-3 overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="flex w-max items-center gap-8 animate-marquee-slow" style={{ animationDirection: "reverse" }}>
                {belt2.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={`b2-${idx}`} className="flex items-center gap-2 px-2">
                      <Icon style={{ color: item.color }} size={14} />
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider whitespace-nowrap" style={{ color: "var(--muted-2)" }}>
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
