import type { BlogPost } from "@/lib/blog";
import ScrollReveal from "./ScrollReveal";

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <section id="blog" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-terminal-green text-sm mb-2 tracking-wider">
              $ ls blog/
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              Blog
            </h3>
            <p className="text-terminal-muted">
              No posts yet. Stay tuned!
            </p>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-terminal-green text-sm mb-2 tracking-wider">
            $ ls blog/
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Blog
          </h3>
        </ScrollReveal>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={0.1 * i}>
              <a
                href={`/blog/${post.slug}`}
                className="block bg-surface border border-border rounded-lg p-5 hover:border-terminal-green/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground group-hover:text-terminal-green transition-colors">
                    {post.title}
                  </h4>
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
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
