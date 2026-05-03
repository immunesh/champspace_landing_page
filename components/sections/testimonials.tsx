"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Quote, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Aisha Patel",
    role: "Software Engineer → AI Engineer",
    track: "Industry Dev Track",
    text: "Champspace is the real deal. In 6 months I went from writing CRUD apps to deploying a multi-agent system used by 3,000 daily users. The mentorship was unlike anything I'd experienced — senior engineers who actually cared about my growth.",
    color: "indigo",
    company: "Now at a Series B AI startup",
  },
  {
    name: "Marcus Kim",
    role: "CS Graduate, 2025",
    track: "College Grad Track",
    text: "I graduated with a CS degree but no idea how to build real AI. Champspace gave me my first production project within weeks. By month 3 I was on a client call presenting the agent I built. I got a full-time offer before I even finished the program.",
    color: "cyan",
    company: "Hired as ML Engineer",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Data Analyst → AI Developer",
    track: "Industry Dev Track",
    text: "The curriculum is genuinely current — LangChain, CrewAI, the whole modern stack. I wasn't just learning theory; I was building automation tools that my team's clients were using in production every week. Champspace accelerated my career by 3 years.",
    color: "purple",
    company: "Now leading AI projects",
  },
  {
    name: "Rahul Sharma",
    role: "BTech Graduate",
    track: "College Grad Track",
    text: "Coming in with no prior ML experience, I was worried I'd be lost. But the structure is brilliant — each week built on the last. By month 2 I'd built a RAG system. By month 4 I was reviewing other interns' code. Champspace changed my trajectory completely.",
    color: "emerald",
    company: "Started as AI intern, promoted",
  },
  {
    name: "Sophie Chen",
    role: "Backend Engineer → AI Architect",
    track: "Industry Dev Track",
    text: "The part-time format was perfect for my situation. I kept my day job while building serious AI skills. The projects are real — production-grade codebases, real deadlines, real stakeholders. Best investment I've made in my career.",
    color: "yellow",
    company: "Now consulting in AI",
  },
  {
    name: "James Okoye",
    role: "Final Year Student",
    track: "College Grad Track",
    text: "I joined while still in my final year. By graduation I had a portfolio of 3 shipped AI projects. Every interview I went to, the Champspace work was the highlight. I had 4 offers — picked the one with the best AI team.",
    color: "pink",
    company: "Full-time offer before graduation",
  },
]

const COLOR = {
  indigo:  { border: "border-indigo-500/20",  quote: "text-indigo-400",  tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20" },
  cyan:    { border: "border-cyan-500/20",    quote: "text-cyan-400",    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
  purple:  { border: "border-purple-500/20",  quote: "text-purple-400",  tag: "bg-purple-500/10 text-purple-300 border-purple-500/20" },
  emerald: { border: "border-emerald-500/20", quote: "text-emerald-400", tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" },
  yellow:  { border: "border-yellow-500/20",  quote: "text-yellow-400",  tag: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20" },
  pink:    { border: "border-pink-500/20",    quote: "text-pink-400",    tag: "bg-pink-500/10 text-pink-300 border-pink-500/20" },
} as const

export default function Testimonials() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[90px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="tag" style={{ color: "#c084fc", borderColor: "rgba(168,85,247,0.3)", background: "rgba(168,85,247,0.1)" }}>
            Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Interns Who{" "}
            <span className="gradient-text">Changed Their Careers</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            Don't take our word for it — hear from the people who've been through the program.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {TESTIMONIALS.map((t, i) => {
            const c = COLOR[t.color as keyof typeof COLOR]
            return (
              <div
                key={t.name}
                className={`break-inside-avoid bento-card p-6 ${c.border} reveal d-${(i % 3 + 1) * 100} ${isVisible ? "visible" : ""}`}
              >
                <Quote className={`w-6 h-6 ${c.quote} mb-4 opacity-60`} />

                <p className="text-[#c0c0d0] text-sm leading-relaxed mb-5">"{t.text}"</p>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    style={{ background: `linear-gradient(135deg, var(--${t.color === "indigo" ? "primary" : t.color === "cyan" ? "accent" : t.color}, #6366f1), rgba(168,85,247,0.8))` }}>
                    {t.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-semibold text-sm truncate">{t.name}</div>
                    <div className="text-[#8888aa] text-xs truncate">{t.role}</div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${c.tag}`}>{t.track}</span>
                </div>
                <div className="mt-2 text-xs text-[#8888aa]">{t.company}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
