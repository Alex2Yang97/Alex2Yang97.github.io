import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-[100dvh] py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-terminal-green text-sm hover:underline mb-8 inline-block"
        >
          &larr; cd ~
        </Link>

        <h1 className="text-3xl font-bold mb-2 text-foreground">Blog</h1>
        <p className="text-terminal-muted mb-12">
          Thoughts on AI, engineering, and building things.
        </p>

        {posts.length === 0 ? (
          <p className="text-terminal-muted">No posts yet. Stay tuned!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-surface border border-border rounded-lg p-5 hover:border-terminal-green/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h2 className="font-semibold text-lg text-foreground group-hover:text-terminal-green transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-xs text-terminal-muted shrink-0 ml-4 mt-1">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm text-terminal-muted leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
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
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
