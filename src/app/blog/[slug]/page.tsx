import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | AlexYoung`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-[100dvh] py-20 px-4 md:px-8">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-terminal-green text-sm hover:underline mb-8 inline-block"
        >
          &larr; cd ~
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <time className="text-sm text-terminal-muted">{post.date}</time>
            {post.tags.length > 0 && (
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-border text-terminal-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="prose prose-invert prose-green max-w-none prose-headings:text-foreground prose-p:text-terminal-muted prose-li:text-terminal-muted prose-a:text-terminal-green prose-a:underline prose-strong:text-foreground prose-code:text-terminal-orange prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-blockquote:border-terminal-green/40 prose-blockquote:text-terminal-muted prose-hr:border-border">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight, rehypeSlug],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
