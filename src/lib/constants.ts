export const SITE = {
  name: "AlexYoung",
  username: "Alex2Yang97",
  title: "AI Engineer",
  location: "NY, US",
  bio: "All in AI!",
  url: "https://alex2yang97.github.io",
  github: "https://github.com/Alex2Yang97",
  prompt: "visitor@alexyoung",
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/Alex2Yang97", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/",
    icon: "linkedin",
  },
  { name: "Twitter", url: "https://twitter.com/", icon: "twitter" },
  { name: "Email", url: "mailto:alex@example.com", icon: "email" },
];

export interface Project {
  name: string;
  repo: string;
  description: string;
  language: string;
  stars: number;
  url: string;
}

export const PROJECTS: Project[] = [
  {
    name: "yahoo-finance-mcp",
    repo: "Alex2Yang97/yahoo-finance-mcp",
    description:
      "MCP server providing comprehensive financial data from Yahoo Finance — stock prices, company info, financial statements, options, and market news.",
    language: "Python",
    stars: 253,
    url: "https://github.com/Alex2Yang97/yahoo-finance-mcp",
  },
  {
    name: "local-full-stack-deep-research",
    repo: "Alex2Yang97/local-full-stack-deep-research",
    description:
      "Full-stack local deep research app built with LangGraph, supporting multiple LLM providers and search APIs. FastAPI + Next.js 15.",
    language: "Python",
    stars: 12,
    url: "https://github.com/Alex2Yang97/local-full-stack-deep-research",
  },
  {
    name: "news-analyst-agent",
    repo: "Alex2Yang97/news-analyst-agent",
    description:
      "AI-powered news analysis system providing real-time insights about companies, markets, and financial trends.",
    language: "Python",
    stars: 4,
    url: "https://github.com/Alex2Yang97/news-analyst-agent",
  },
  {
    name: "pocket-curator-template",
    repo: "Alex2Yang97/pocket-curator-template",
    description:
      "Template for building an AI-powered web app for art lovers to curate, analyze, and share artwork. Built with Next.js, TypeScript, and Supabase.",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/Alex2Yang97/pocket-curator-template",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const EXPERIENCE: Experience[] = [
  {
    role: "AI Engineer",
    company: "Your Company",
    period: "2024 - Present",
    description:
      "Building AI-powered applications and MCP servers. Working on LLM integrations, deep research systems, and financial data tools.",
  },
  {
    role: "Software Engineer",
    company: "Previous Company",
    period: "2022 - 2024",
    description:
      "Developed full-stack applications with Python and TypeScript. Built data pipelines and machine learning systems.",
  },
  {
    role: "Research Associate",
    company: "Columbia University",
    period: "2020 - 2022",
    description:
      "NLP research including semi-supervised learning for part-of-speech tagging. Collaborated with J.P. Morgan on applied ML projects.",
  },
];

export const ABOUT_TEXT = `Hi, I'm AlexYoung — an AI engineer based in New York.

I'm passionate about building intelligent systems that make complex data accessible. My work spans MCP servers, deep research agents, news analysis systems, and full-stack AI applications.

I believe in open source and sharing knowledge. When I'm not coding, you'll find me exploring the latest in AI research and building tools that bridge the gap between cutting-edge models and practical applications.`;

export const ASCII_BANNER = `
   _    _           __   __                    
  / \\  | | _____  __\\ \\ / /__  _   _ _ __   __ _ 
 / _ \\ | |/ _ \\ \\/ / \\ V / _ \\| | | | '_ \\ / _\` |
/ ___ \\| |  __/>  <   | | (_) | |_| | | | | (_| |
\\_/ \\_\\_|\\___/_/\\_\\  |_|\\___/ \\__,_|_| |_|\\__, |
                                           |___/ `;
