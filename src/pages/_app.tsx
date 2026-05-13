import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Cursor glow effect
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const onMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    const onLeave = () => { glow.style.opacity = "0"; };
    const onEnter = () => { glow.style.opacity = "1"; };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.body.removeChild(glow);
    };
  }, []);

  return <Component {...pageProps} />;
}
