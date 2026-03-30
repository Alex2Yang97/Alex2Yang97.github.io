import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-terminal-muted/60">
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}. {SITE.title} &middot;{" "}
          {SITE.location}
        </p>
        <p>Built with Next.js &middot; Deployed on GitHub Pages</p>
      </div>
    </footer>
  );
}
