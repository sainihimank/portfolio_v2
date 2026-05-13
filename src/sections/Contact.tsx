"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, Github, Linkedin, Mail } from "lucide-react";
import { socials } from "@/data/config";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok) {
      setSuccess(true);
      setMessage("Message sent! I'll get back to you shortly.");
      (event.target as HTMLFormElement).reset();
    } else {
      setMessage(data.error || "Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section pb-24" style={{ scrollMarginTop: "120px" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <span className="section-label mx-auto">Get In Touch</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Let's Build <span className="text-gradient-shimmer">Together.</span>
        </h2>
        <p className="mt-4 mx-auto max-w-xl text-base" style={{ color: "var(--muted)" }}>
          Have a project, role, or idea? I respond quickly with clear next steps.
        </p>
      </motion.div>

      <div className="relative overflow-hidden rounded-[2rem] border p-6 sm:p-10"
        style={{ borderColor: "var(--card-border)", background: "var(--card)" }}>

        {/* Corner glows */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, var(--accent-glow-strong) 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.4) 0%, transparent 70%)" }} />

        <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl font-bold">Let&apos;s Work<br />Together</h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Whether it's a full product, a feature, or just exploring ideas — I'm all ears. Based in India, working globally.
            </p>

            {/* Location badge */}
            <div className="mt-6 rounded-2xl border p-4" style={{ borderColor: "var(--card-border)", background: "var(--card-2)" }}>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin size={15} style={{ color: "var(--accent)" }} />
                <span>New Delhi, India</span>
              </div>
              {/* Mini map placeholder */}
              <div className="mt-3 relative h-36 overflow-hidden rounded-xl border"
                style={{ borderColor: "var(--card-border)", background: "linear-gradient(135deg, #0f1923 0%, #1a2a35 100%)" }}>
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-30"
                  style={{ backgroundImage: "linear-gradient(rgba(200,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                {/* Dot */}
                <div className="absolute left-[64%] top-[46%] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute inline-flex h-8 w-8 rounded-full animate-ping opacity-40"
                      style={{ background: "var(--accent)" }} />
                    <span className="relative flex h-4 w-4 rounded-full border-2 border-white"
                      style={{ background: "var(--accent)" }} />
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-2 left-2 rounded-full border px-2 py-0.5 text-xs"
                  style={{ borderColor: "var(--card-border)", background: "rgba(10,10,15,0.8)", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                  Open to remote · IST +5:30
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                    style={{ borderColor: "var(--card-border)", background: "var(--card-2)", color: "var(--muted)" }}
                    aria-label={s.name}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border p-5 space-y-3"
              style={{ borderColor: "var(--card-border)", background: "var(--card-2)" }}
            >
              <p className="font-mono text-xs uppercase tracking-widest pb-1" style={{ color: "var(--muted)" }}>
                // start a conversation
              </p>

              {[
                { name: "name", placeholder: "Your name", type: "text" },
                { name: "email", placeholder: "your@email.com", type: "email" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-sm"
                  style={{
                    borderColor: "var(--card-border)",
                    background: "var(--card)",
                    color: "var(--foreground)",
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--accent-glow)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--card-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              ))}

              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                rows={5}
                required
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                style={{
                  borderColor: "var(--card-border)",
                  background: "var(--card)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-body)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow = "0 0 0 2px var(--accent-glow)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all disabled:opacity-60"
                style={{ background: "var(--accent)", color: "#0a0a0f" }}
              >
                <Send size={14} className="transition-transform group-hover:translate-x-1" />
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {message && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-mono"
                  style={{ color: success ? "var(--accent)" : "#f87171" }}
                >
                  {success ? "✓ " : "✕ "}{message}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
