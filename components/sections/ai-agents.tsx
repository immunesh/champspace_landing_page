"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Bot, MessageSquare, Search, Code2, GitBranch, Database, Layers } from "lucide-react"

const AGENTS = [
  {
    icon: MessageSquare,
    color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20", glow: "rgba(99,102,241,0.3)",
    title: "Conversational AI Agents",
    desc: "Build intelligent chatbots and voice assistants powered by GPT-4o and Claude. Interns design multi-turn dialogue systems with memory and context awareness for real business deployments.",
    tags: ["OpenAI", "LangChain", "Memory"],
    size: "lg:col-span-2",
  },
  {
    icon: Bot,
    color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "rgba(6,182,212,0.3)",
    title: "Autonomous Task Agents",
    desc: "Agents that plan, reason, and act — using tools like web search, code execution, and APIs to complete multi-step tasks without human intervention.",
    tags: ["ReAct", "Tool Use", "Planning"],
    size: "",
  },
  {
    icon: Database,
    color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", glow: "rgba(168,85,247,0.3)",
    title: "RAG-Powered Knowledge Agents",
    desc: "Retrieval-Augmented Generation systems that connect LLMs to private documents, databases, and knowledge bases for accurate, grounded answers.",
    tags: ["LlamaIndex", "Pinecone", "Embeddings"],
    size: "",
  },
  {
    icon: Code2,
    color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "rgba(16,185,129,0.3)",
    title: "Code Generation Agents",
    desc: "AI agents that write, review, test, and debug code. Interns build tools that automate software development workflows end-to-end.",
    tags: ["Codex", "AST", "Testing"],
    size: "",
  },
  {
    icon: GitBranch,
    color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "rgba(234,179,8,0.3)",
    title: "Multi-Agent Orchestration",
    desc: "Design systems where multiple specialized agents collaborate — a planner, a researcher, a coder, and a reviewer — working as a team to solve complex problems.",
    tags: ["AutoGen", "CrewAI", "Orchestration"],
    size: "",
  },
  {
    icon: Search,
    color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20", glow: "rgba(236,72,153,0.3)",
    title: "Data Analysis Agents",
    desc: "Agents that autonomously explore datasets, generate insights, create visualisations, and produce natural-language reports for business stakeholders.",
    tags: ["Pandas", "Matplotlib", "SQL"],
    size: "lg:col-span-2",
  },
]

export default function AIAgents() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="ai-agents" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="tag" style={{ color: "#c084fc", borderColor: "rgba(168,85,247,0.3)", background: "rgba(168,85,247,0.1)" }}>
            AI Agents
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Intelligent Agents.{" "}
            <span className="gradient-text">Real Impact.</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            Every intern at Champspace ships at least one AI agent to production. Here's what you'll build.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon
            return (
              <div
                key={agent.title}
                className={`bento-card p-6 group ${agent.size} reveal d-${(i % 4 + 1) * 100} ${isVisible ? "visible" : ""}`}
              >
                <div className="relative overflow-hidden h-full flex flex-col">
                  {/* Hover glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: agent.glow }} />

                  <div className={`w-11 h-11 ${agent.bg} border ${agent.border} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${agent.color}`} />
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2">{agent.title}</h3>
                  <p className="text-[#8888aa] text-sm leading-relaxed mb-4 flex-1">{agent.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {agent.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border font-medium ${agent.bg} ${agent.border} ${agent.color}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
