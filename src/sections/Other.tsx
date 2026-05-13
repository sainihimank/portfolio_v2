import { siteConfig } from "@/data/config";
import Image from "next/image";
import { motion } from "framer-motion";

export function Other() {
  const githubGraph = `https://ghchart.rshah.org/${siteConfig.githubUsername}`;

  return (
    <section id="other" className="pt-0 pb-24 sm:pb-32" style={{ scrollMarginTop: "120px" }}>
      <div className="section max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="section-label mx-auto">Open Source</span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            GitHub <span className="text-gradient-shimmer">Activity</span>
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card-base p-6"
        >
          <p className="section-label">Contribution Graph</p>
          <Image
            src={githubGraph}
            alt="GitHub contribution graph"
            width={1200}
            height={240}
            className="mt-4 w-full rounded-xl border p-2"
            style={{ borderColor: "var(--card-border)", background: "var(--card-2)" }}
            unoptimized
          />
          <div className="mt-4 flex items-center justify-between">
            <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
              @{siteConfig.githubUsername}
            </p>
            <a
              href={`https://github.com/${siteConfig.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs transition-colors hover:underline"
              style={{ color: "var(--accent)" }}
            >
              View profile ↗
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
