import {
  SITE,
  ABOUT_TEXT,
  EXPERIENCE,
  PROJECTS,
  SOCIAL_LINKS,
  ASCII_BANNER,
} from "./constants";
import type { BlogPost } from "./blog";

export interface CommandResult {
  output: string;
  isHTML?: boolean;
  clear?: boolean;
  action?: "toggle-theme" | "set-theme-light" | "set-theme-dark" | "switch-gui";
}

const HELP_TEXT = `
Available commands:

  about        Who I am
  experience   Work history
  projects     Open source projects
  blog         List blog posts
  blog <slug>  Read a specific post
  contact      How to reach me
  clear        Clear terminal
  theme        Toggle light/dark theme
  theme light  Switch to light theme
  theme dark   Switch to dark theme
  gui          Switch to GUI mode
  help         Show this message
`;

function formatAbout(): string {
  return `
${ASCII_BANNER}
${SITE.title} | ${SITE.location}
${"─".repeat(48)}

${ABOUT_TEXT}
`;
}

function formatExperienceBody(exp: (typeof EXPERIENCE)[number]): string {
  if (exp.bullets?.length) {
    return exp.bullets.map((b) => `  • ${b}`).join("\n");
  }
  return `  ${exp.description ?? ""}`;
}

function formatExperience(): string {
  const lines = EXPERIENCE.map(
    (exp) => `
  ${exp.role} @ ${exp.company}
  ${exp.period}
${formatExperienceBody(exp)}
`
  );
  return `
Work Experience
${"─".repeat(48)}
${lines.join("\n" + "─".repeat(48) + "\n")}`;
}

function formatProjects(): string {
  const header = `
Open Source Projects
${"─".repeat(60)}
`;
  const rows = PROJECTS.map(
    (p) =>
      `  ${p.name}
  ${p.description}
  ★ ${p.stars}  |  ${p.language}  |  ${p.url}
`
  );
  return header + rows.join("\n" + "─".repeat(60) + "\n");
}

function formatBlogList(posts: BlogPost[]): string {
  if (posts.length === 0) {
    return "\n  No blog posts yet. Stay tuned!\n";
  }
  const header = `
Blog Posts
${"─".repeat(48)}
`;
  const rows = posts.map(
    (p) => `  ${p.date}  ${p.title}
             slug: ${p.slug}`
  );
  return (
    header +
    rows.join("\n") +
    `\n\n  Use 'blog <slug>' to read a post.\n`
  );
}

function formatBlogPost(post: BlogPost | null, slug: string): string {
  if (!post) {
    return `\n  Post not found: "${slug}"\n  Use 'blog' to see available posts.\n`;
  }
  return `
${post.title}
${post.date}
${"─".repeat(48)}

${post.excerpt}

  → Read full post: /blog/${post.slug}
`;
}

function formatContact(): string {
  const lines = SOCIAL_LINKS.map(
    (link) => `  ${link.name.padEnd(12)} ${link.url}`
  );
  return `
Contact
${"─".repeat(48)}
${lines.join("\n")}
`;
}

export function executeCommand(
  input: string,
  posts: BlogPost[]
): CommandResult {
  const trimmed = input.trim().toLowerCase();
  const [cmd, ...args] = trimmed.split(/\s+/);

  switch (cmd) {
    case "help":
      return { output: HELP_TEXT };
    case "about":
      return { output: formatAbout() };
    case "experience":
      return { output: formatExperience() };
    case "projects":
      return { output: formatProjects() };
    case "blog": {
      if (args.length > 0) {
        const slug = args.join("-");
        const post = posts.find((p) => p.slug === slug) || null;
        return { output: formatBlogPost(post, slug) };
      }
      return { output: formatBlogList(posts) };
    }
    case "contact":
      return { output: formatContact() };
    case "clear":
      return { output: "", clear: true };
    case "theme": {
      if (args[0] === "light") {
        return { output: "\n  Theme set to light.\n", action: "set-theme-light" };
      }
      if (args[0] === "dark") {
        return { output: "\n  Theme set to dark.\n", action: "set-theme-dark" };
      }
      return { output: "\n  Theme toggled.\n", action: "toggle-theme" };
    }
    case "gui":
      return { output: "\n  Switching to GUI mode...\n", action: "switch-gui" };
    case "":
      return { output: "" };
    default:
      return {
        output: `\n  Command not found: "${cmd}"\n  Type 'help' for available commands.\n`,
      };
  }
}
