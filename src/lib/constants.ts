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
  /** Short paragraph (optional); prefer bullets for structured roles */
  description?: string;
  bullets?: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Assistant Director, AI Engineer",
    company: "Moody's",
    period: "Aug 2023 – Present",
    bullets: [
      "Contributed to the architecture and deployment of production-grade AI agents for enterprise compliance workflows (KYC, screening), contributing to multi-million-dollar annual revenue for Moody’s Platform.",
      "Built and optimized RAG pipelines for enterprise knowledge and research use cases, improving retrieval quality and answer relevance and reducing manual research time by approximately 53% for downstream users.",
      "Developed end-to-end evaluation and iteration pipelines for data-driven agent optimization, achieving up to 37% improvement in key quality metrics such as faithfulness and tool-call correctness.",
      "Integrated MCP and Agent Skills with Moody’s services, reducing integration overhead for GenAI use cases and supporting broader product adoption.",
      "Served as core backend engineer for Moody’s Copilot: backend microservices, CI/CD pipelines, and external service integrations for 14,000+ global employees, improving internal productivity.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Bank of China USA",
    period: "Jan 2023 – Aug 2023",
    bullets: [
      "Built an NLP (BERT, LLM) and OCR system for suspicious entity identification, deployed across the LCD Department.",
      "Developed an internal KYC web platform (Flask, SQL Server, Bootstrap) from scratch, improving team efficiency.",
      "Designed ETL pipelines and Qlik Sense dashboards, automating reporting for stakeholders.",
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "Moody's Rating",
    period: "June 2022 – Nov 2022",
    bullets: [
      "Developed a LightGBM rating model with SHAP and InterpretML, improving explainability for analysts.",
      "Built Dash/React dashboards and an internal Python package to streamline analyst workflows.",
      "Engineered end-to-end ML pipelines (AWS S3, SageMaker, Docker) and deployed multiple models to production.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Winner Technology",
    period: "Dec 2019 – July 2021",
    bullets: [
      "Built and deployed deep learning models (PyTorch) on AWS EC2 for mall passenger flow analysis, adopted by 100+ malls (e.g. Powerlong, Longfor).",
      "Developed an ad recommendation system and ran A/B tests, achieving +10% CTR and higher purchases.",
      "Engineered large-scale data pipelines (1,000+ malls, 20,000+ brands) and interpretable models to measure promotional impact, increasing ROI by 23%.",
    ],
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
