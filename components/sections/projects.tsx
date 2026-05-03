"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { ExternalLink, Github } from "lucide-react"

const PROJECTS = [
  {
    title: "Customer Support AI Agent",
    desc: "Autonomous agent that handles 80% of customer queries, escalates edge cases, and drafts tickets — deployed for a fintech client with 10k daily users.",
    tags: ["LangChain", "GPT-4o", "FastAPI", "PostgreSQL"],
    color: "indigo",
    metric: { v: "80%", l: "query resolution" },
  },
  {
    title: "Automated Data Pipeline",
    desc: "Real-time pipeline ingesting data from 12 sources, applying ML-based anomaly detection, and delivering clean data to a BI dashboard with zero manual steps.",
    tags: ["Airflow", "Pandas", "Kafka", "GCP"],
    color: "cyan",
    metric: { v: "12×", l: "data sources unified" },
  },
  {
    title: "RAG Knowledge Base Engine",
    desc: "Internal search tool for a legal firm — indexes thousands of contracts, enables semantic search, and surfaces relevant clauses with cited sources.",
    tags: ["LlamaIndex", "Pinecone", "Next.js", "OpenAI"],
    color: "purple",
    metric: { v: "5000+", l: "docs indexed" },
  },
  {
    title: "Multi-Agent Research Assistant",
    desc: "System of 4 coordinated agents — planner, searcher, analyst, and writer — that produces comprehensive research reports from a single prompt.",
    tags: ["CrewAI", "Tavily", "GPT-4o", "React"],
    color: "emerald",
    metric: { v: "4", l: "agents coordinated" },
  },
  {
    title: "Invoice Processing Automation",
    desc: "IDP pipeline using OCR + NLP to extract, validate, and route invoice data into an ERP — eliminating 30 hours of manual data entry weekly.",
    tags: ["Tesseract", "spaCy", "AWS Lambda", "SAP"],
    color: "yellow",
    metric: { v: "30h", l: "saved per week" },
  },
  {
    title: "Code Review Agent",
    desc: "GitHub-integrated agent that auto-reviews PRs for security vulnerabilities, performance issues, and style violations — with actionable inline comments.",
    tags: ["GitHub API", "Claude", "Docker", "Python"],
    color: "pink",
    metric: { v: "100%", l: "PRs auto-reviewed" },
  },
]

const COLOR = {
  indigo:  { tag: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300",  metric: "text-indigo-400",  dot: "bg-indigo-500",  border: "border-indigo-500/20" },
  cyan:    { tag: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300",        metric: "text-cyan-400",    dot: "bg-cyan-500",    border: "border-cyan-500/20" },
  purple:  { tag: "bg-purple-500/10 border-purple-500/25 text-purple-300",  metric: "text-purple-400",  dot: "bg-purple-500",  border: "border-purple-500/20" },
  emerald: { tag: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300", metric: "text-emerald-400", dot: "bg-emerald-500", border: "border-emerald-500/20" },
  yellow:  { tag: "bg-yellow-500/10 border-yellow-500/25 text-yellow-300",  metric: "text-yellow-400",  dot: "bg-yellow-500",  border: "border-yellow-500/20" },
  pink:    { tag: "bg-pink-500/10 border-pink-500/25 text-pink-300",        metric: "text-pink-400",    dot: "bg-pink-500",    border: "border-pink-500/20" },
} as const

export default function Projects() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="projects" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="tag">What Interns Build</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Real Projects.{" "}
            <span className="gradient-text">Real Impact.</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            Every Champspace intern ships at least one project to production. Here are examples of what past interns have built.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((proj, i) => {
            const c = COLOR[proj.color as keyof typeof COLOR]
            return (
              <div key={proj.title}
                className={`bento-card p-6 group flex flex-col reveal d-${(i % 3 + 1) * 100} ${isVisible ? "visible" : ""}`}>
                {/* Top: metric pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${c.tag}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                    <span className={c.metric}>{proj.metric.v}</span>
                    <span className="text-[#8888aa] font-normal">{proj.metric.l}</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-7 h-7 glass rounded-lg flex items-center justify-center hover:border-indigo-500/40 transition-all" aria-label="GitHub">
                      <Github className="w-3.5 h-3.5 text-[#8888aa]" />
                    </button>
                    <button className="w-7 h-7 glass rounded-lg flex items-center justify-center hover:border-indigo-500/40 transition-all" aria-label="View">
                      <ExternalLink className="w-3.5 h-3.5 text-[#8888aa]" />
                    </button>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2 group-hover:gradient-text transition-all">{proj.title}</h3>
                <p className="text-[#8888aa] text-sm leading-relaxed mb-4 flex-1">{proj.desc}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {proj.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-md border font-medium ${c.tag}`}>{tag}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
