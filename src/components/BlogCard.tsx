import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import ScrollReveal from "./ScrollReveal";

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-terminal-green text-sm mb-2 tracking-wider">
            $ ls blog/
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Blog
          </h2>
        </ScrollReveal>

        {posts.length === 0 ? (
          <ScrollReveal delay={0.1}>
            <p className="text-terminal-muted">
              No posts yet. Stay tuned!
            </p>
          </ScrollReveal>
        ) : (
          <>
            <div className="space-y-4">
              {posts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={0.1 * i}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block bg-surface border border-border rounded-lg p-5 hover:border-terminal-green/50 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terminal-green"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-terminal-green transition-colors">
                        {post.title}
                      </h3>
                      <span className="text-xs text-terminal-muted shrink-0 ml-4">
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
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.1 * posts.length}>
              <div className="mt-6">
                <Link
                  href="/blog"
                  className="text-sm text-terminal-green hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terminal-green rounded-sm"
                >
                  View all posts &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </>
        )}
      </div>
    </section>
  );
}
