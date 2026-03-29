import { getAllPosts } from "@/lib/blog";
import Terminal from "@/components/Terminal";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import BlogSection from "@/components/BlogCard";
import Footer from "@/components/Footer";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <div id="terminal">
        <Terminal posts={posts} />
      </div>

      <Navbar />

      <main>
        <About />
        <Projects />
        <BlogSection posts={posts} />
      </main>

      <Footer />
    </>
  );
}
