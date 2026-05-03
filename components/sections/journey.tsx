"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { BookOpen, Wrench, FlaskConical, Cloud, Trophy } from "lucide-react"

const STAGES = [
  {
    month: "Month 1",
    icon: BookOpen,
    color: "text-indigo-400", bg: "bg-indigo-500", border: "border-indigo-500/30",
    glowColor: "rgba(99,102,241,0.5)",
    title: "AI Foundations",
    desc: "Start with the building blocks. Python for AI, prompt engineering, OpenAI API, Git workflows, and understanding how LLMs actually work under the hood.",
    skills: ["Python", "Prompt Engineering", "OpenAI API", "Git & CI/CD"],
  },
  {
    month: "Month 2",
    icon: Wrench,
    color: "text-cyan-400", bg: "bg-cyan-500", border: "border-cyan-500/30",
    glowColor: "rgba(6,182,212,0.5)",
    title: "AI Frameworks",
    desc: "Dive into the AI engineering stack. LangChain, LlamaIndex, vector databases, embeddings, and building your first RAG system.",
    skills: ["LangChain", "LlamaIndex", "Pinecone", "Embeddings"],
  },
  {
    month: "Month 3",
    icon: FlaskConical,
    color: "text-purple-400", bg: "bg-purple-500", border: "border-purple-500/30",
    glowColor: "rgba(168,85,247,0.5)",
    title: "Build Your Agent",
    desc: "Your first production project. Design and build a complete AI agent — from architecture to testing to a working demo presented to real stakeholders.",
    skills: ["Agent Design", "Tool Use", "Testing", "Demo Day"],
  },
  {
    month: "Month 4",
    icon: Cloud,
    color: "text-emerald-400", bg: "bg-emerald-500", border: "border-emerald-500/30",
    glowColor: "rgba(16,185,129,0.5)",
    title: "Deploy to Production",
    desc: "Take your agent live. Containerisation with Docker, cloud deployment on AWS/GCP, monitoring, cost optimisation, and handling production traffic.",
    skills: ["Docker", "AWS / GCP", "Monitoring", "Cost Optimisation"],
  },
  {
    month: "Month 5–6",
    icon: Trophy,
    color: "text-yellow-400", bg: "bg-yellow-500", border: "border-yellow-500/30",
    glowColor: "rgba(234,179,8,0.5)",
    title: "Real Client Work",
    desc: "Join an active client project. Contribute features, attend client meetings, and own a meaningful slice of a production AI system. This is where your career starts.",
    skills: ["Client Delivery", "Code Reviews", "Product Thinking", "AI Strategy"],
  },
]

export default function Journey() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="journey" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="tag" style={{ color: "#a5b4fc", borderColor: "rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.1)" }}>
            Learning Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Your Internship{" "}
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            A structured, progressive curriculum that takes you from AI fundamentals to shipping real software for real clients.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 timeline-line md:left-1/2 md:-translate-x-1/2 rounded-full" />

          <div className="space-y-10">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon
              const isRight = i % 2 === 1
              return (
                <div
                  key={stage.month}
                  className={`relative flex items-start gap-6 md:gap-0 reveal ${isRight ? "reveal-right" : "reveal-left"} d-${(i + 1) * 100} ${isVisible ? "visible" : ""}`}
                >
                  {/* Icon node */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 ${stage.bg}/20 border ${stage.border} rounded-xl flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0`}
                    style={{ boxShadow: `0 0 20px ${stage.glowColor}` }}>
                    <Icon className={`w-5 h-5 ${stage.color}`} />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 glass-strong border ${stage.border} rounded-2xl p-6 md:w-[calc(50%-40px)] ${isRight ? "md:ml-auto" : "md:mr-auto"} md:flex-none`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${stage.bg}/20 border ${stage.border} ${stage.color}`}>
                        {stage.month}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{stage.title}</h3>
                    <p className="text-[#8888aa] text-sm leading-relaxed mb-4">{stage.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {stage.skills.map((skill) => (
                        <span key={skill} className={`text-xs px-2.5 py-1 rounded-full border font-medium ${stage.bg}/10 ${stage.border} ${stage.color}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
