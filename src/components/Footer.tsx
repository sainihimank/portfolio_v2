import { siteConfig, socials } from "@/data/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t px-4 py-10 sm:px-0 sm:py-12"
      style={{ borderColor: "var(--card-border)", background: "var(--card)" }}>
      <div className="section">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
            <span className="font-display text-xl font-black" style={{ color: "var(--accent)" }}>HS</span>
            <span style={{ color: "var(--card-border)" }}>|</span>
            <span className="font-mono">© {year} {siteConfig.name}</span>
          </div>

          <div className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            Built with Next.js + Tailwind · Deployed on Vercel
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:scale-110"
                  style={{ color: "var(--muted)" }}
                  aria-label={social.name}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
