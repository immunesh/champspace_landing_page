"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { ScanSearch, Cpu, Hammer, GitMerge, Rocket, Zap } from "lucide-react"

const STEPS = [
  {
    step: "01",
    icon: ScanSearch,
    color: "text-indigo-400",
    bg: "bg-indigo-500",
    border: "border-indigo-500/30",
    cardBorder: "border-indigo-500/20",
    glowColor: "rgba(99,102,241,0.45)",
    title: "Discovery & Scoping",
    desc: "We intake the project brief and run it through AI-assisted analysis — automatically mapping requirements, spotting ambiguities, and generating a technical scope doc in minutes instead of days.",
    tools: ["GPT-4o", "Notion AI", "Perplexity", "Miro"],
    badge: "Day 1–2",
  },
  {
    step: "02",
    icon: Cpu,
    color: "text-cyan-400",
    bg: "bg-cyan-500",
    border: "border-cyan-500/30",
    cardBorder: "border-cyan-500/20",
    glowColor: "rgba(6,182,212,0.45)",
    title: "AI-Powered Architecture",
    desc: "Engineers use LLMs to generate system architecture proposals, compare tech stack options, and produce boilerplate — cutting design time from a week to an afternoon.",
    tools: ["Claude", "ChatGPT", "Cursor", "draw.io AI"],
    badge: "Day 2–4",
  },
  {
    step: "03",
    icon: Hammer,
    color: "text-purple-400",
    bg: "bg-purple-500",
    border: "border-purple-500/30",
    cardBorder: "border-purple-500/20",
    glowColor: "rgba(168,85,247,0.45)",
    title: "Fasttrack Build",
    desc: "Development runs at 3× speed with AI copilots writing boilerplate, unit tests, and documentation in parallel. LangChain, LlamaIndex, and CrewAI power the AI feature layers.",
    tools: ["GitHub Copilot", "Cursor", "LangChain", "LlamaIndex"],
    badge: "Week 1–3",
  },
  {
    step: "04",
    icon: GitMerge,
    color: "text-emerald-400",
    bg: "bg-emerald-500",
    border: "border-emerald-500/30",
    cardBorder: "border-emerald-500/20",
    glowColor: "rgba(16,185,129,0.45)",
    title: "LLM Integration & Testing",
    desc: "Plug in RAG pipelines, fine-tuned models, agent orchestration, and vector stores. AI-generated test suites validate every layer before client review — automated, thorough, fast.",
    tools: ["OpenAI API", "Pinecone", "CrewAI", "Pytest AI"],
    badge: "Week 3–4",
  },
  {
    step: "05",
    icon: Rocket,
    color: "text-yellow-400",
    bg: "bg-yellow-500",
    border: "border-yellow-500/30",
    cardBorder: "border-yellow-500/20",
    glowColor: "rgba(234,179,8,0.45)",
    title: "Ship & Scale",
    desc: "Deploy via automated CI/CD pipelines to AWS, GCP, or client infra. AI monitors production behaviour, flags regressions, and generates incident summaries — so the team ships with confidence.",
    tools: ["Docker", "AWS / GCP", "LangSmith", "Datadog AI"],
    badge: "Week 4–5",
  },
]

export default function Journey() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-indigo-500/20">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-indigo-200 font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Project Development,{" "}
            <span className="gradient-text">Fasttracked</span>
            <br className="hidden sm:block" />
            <span className="text-white"> with AI & LLM Tools</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            Every project at Champspace is built with AI at every stage — from scoping to shipping —
            compressing weeks of work into days without cutting corners.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 timeline-line md:left-1/2 md:-translate-x-1/2 rounded-full" />

          <div className="space-y-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isRight = i % 2 === 1
              return (
                <div
                  key={step.step}
                  className={`relative flex items-start gap-6 md:gap-0 reveal ${isRight ? "reveal-right" : "reveal-left"} d-${(i + 1) * 100} ${isVisible ? "visible" : ""}`}
                >
                  {/* Step node */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 ${step.bg}/20 border ${step.border} rounded-xl flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0`}
                    style={{ boxShadow: `0 0 22px ${step.glowColor}` }}
                  >
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 glass-strong border ${step.cardBorder} rounded-2xl p-6 md:w-[calc(50%-40px)] ${isRight ? "md:ml-auto" : "md:mr-auto"} md:flex-none`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${step.bg}/20 border ${step.border} ${step.color}`}>
                        {step.badge}
                      </span>
                      <span className="text-xs text-[#555577] font-mono font-semibold">Step {step.step}</span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-[#8888aa] text-sm leading-relaxed mb-4">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`text-xs px-2.5 py-1 rounded-full border font-medium ${step.bg}/10 ${step.border} ${step.color}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className={`mt-16 glass-strong border border-indigo-500/15 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 reveal d-600 ${isVisible ? "visible" : ""}`}>
          <div>
            <div className="text-white font-bold text-lg mb-1">Ready to build something real?</div>
            <div className="text-[#8888aa] text-sm">Submit your project and we'll fast-track it with our AI-powered dev process.</div>
          </div>
          <a href="/project"
            className="group btn-primary inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl whitespace-nowrap flex-shrink-0">
            Submit a Project
            <Rocket className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ position: "relative", zIndex: 1 }} />
          </a>
        </div>
      </div>
    </section>
  )
}
