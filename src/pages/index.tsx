import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Other } from "@/sections/Other";
import { Contact } from "@/sections/Contact";
import { siteConfig } from "@/data/config";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{`${siteConfig.name} | ${siteConfig.title}`}</title>
        <meta
          name="description"
          content={siteConfig.description}
        />
      </Head>

      <main className="pb-20">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Other />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
