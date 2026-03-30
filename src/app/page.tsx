import { getAllPosts } from "@/lib/blog";
import PageShell from "@/components/PageShell";

export default function Home() {
  const posts = getAllPosts();

  return <PageShell posts={posts} />;
}
