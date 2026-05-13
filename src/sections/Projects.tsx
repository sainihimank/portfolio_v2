"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden pt-0 pb-32"
      style={{ scrollMarginTop: "120px" }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 h-96 w-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, var(--accent-glow-strong) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.4) 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="section-label mx-auto">Selected Work</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-pretty sm:text-5xl md:text-6xl">
            Featured{" "}
            <span className="text-gradient-shimmer">Projects</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Products I've built — from scratch to production. Each one shipping clean code and solving real problems.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/sainihimank?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-bold transition-all hover:shadow-lg"
            style={{
              borderColor: "var(--card-border)",
              background: "var(--card)",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px var(--accent-glow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <span>See all projects on GitHub</span>
            <ExternalLink size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
