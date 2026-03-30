"use client";

import { useSiteContext } from "@/contexts/SiteContext";
import Terminal from "./Terminal";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import Projects from "./Projects";
import BlogSection from "./BlogCard";
import Contact from "./Contact";
import Footer from "./Footer";
import type { BlogPost } from "@/lib/blog";

export default function PageShell({ posts }: { posts: BlogPost[] }) {
  const { mode, mounted } = useSiteContext();

  if (!mounted || mode === "cli") {
    return (
      <div id="terminal">
        <Terminal posts={posts} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <main id="main-content">
        <About />
        <Projects />
        <BlogSection posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
