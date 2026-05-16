"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Sparkles, Zap, Bot, Code2, CheckCircle2, Activity } from "lucide-react"

const TYPING_WORDS = ["AI Agents", "Automation Tools", "LLM Apps", "RAG Systems", "ML Pipelines"]

const TECH_BADGES = [
  { label: "Python",     cls: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",  dot: "bg-indigo-400",  delay: "0s" },
  { label: "LangChain",  cls: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",        dot: "bg-cyan-400",    delay: "0.8s" },
  { label: "OpenAI API", cls: "border-purple-500/30 bg-purple-500/10 text-purple-300",  dot: "bg-purple-400",  delay: "1.6s" },
  { label: "FastAPI",    cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300", dot: "bg-emerald-400", delay: "2.4s" },
  { label: "Docker",     cls: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",  dot: "bg-yellow-400",  delay: "3.2s" },
  { label: "LlamaIndex", cls: "border-pink-500/30 bg-pink-500/10 text-pink-300",        dot: "bg-pink-400",    delay: "4s" },
]

const CODE_LINES = [
  { t: "agent = ChampAgent(", c: "code-cyan" },
  { t: '  model="gpt-4o",',   c: "code-yellow" },
  { t: "  tools=[search, code_exec],", c: "code-white" },
  { t: ")",                   c: "code-cyan" },
  { t: "",                    c: "" },
  { t: "# Run autonomous task", c: "code-gray" },
  { t: "result = await agent.run(", c: "code-green" },
  { t: '  "Analyse dataset & report"', c: "code-yellow" },
  { t: ")",                   c: "code-green" },
]

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [display, setDisplay] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [particles, setParticles] = useState<{ id: number; x: number; size: number; delay: number; dur: number }[]>([])
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    setParticles(
      Array.from({ length: 16 }, (_, i) => ({
        id: i, x: Math.random() * 100, size: Math.random() * 2.5 + 1,
        delay: Math.random() * 8, dur: Math.random() * 10 + 8,
      }))
    )
  }, [])

  useEffect(() => {
    const word = TYPING_WORDS[wordIdx]
    const speed = deleting ? 45 : 90
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, display.length + 1)
        setDisplay(next)
        if (next === word) setTimeout(() => setDeleting(true), 1800)
      } else {
        const next = word.slice(0, display.length - 1)
        setDisplay(next)
        if (next === "") {
          setDeleting(false)
          setWordIdx((i) => (i + 1) % TYPING_WORDS.length)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [display, deleting, wordIdx])

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 200)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern pt-16">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-[130px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[110px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/4 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating particles */}
      {particles.map((p) => (
        <div key={p.id} className="absolute rounded-full bg-indigo-400/20 pointer-events-none"
          style={{ left: `${p.x}%`, bottom: "-10px", width: `${p.size}px`, height: `${p.size}px`,
            animation: `particle-rise ${p.dur}s ${p.delay}s linear infinite` }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left column */}
        <div style={{ animation: "slide-up .7s ease forwards" }}>
          <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-7 border border-indigo-500/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                style={{ animation: "ping-slow 1.5s cubic-bezier(0,0,.2,1) infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm text-indigo-200 font-medium">Now Accepting · 2026 Cohort Open</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Build Real</span>
            <br />
            <span className="gradient-text inline-block min-w-[10ch] min-h-[1.15em]">
              {display}<span className="animate-blink text-indigo-400 ml-0.5">|</span>
            </span>
            <br />
            <span className="text-white">with Champspace</span>
          </h1>

          <p className="text-lg text-[#8888aa] leading-relaxed mb-8 max-w-lg">
            Champspace is the technology backbone powering Allendesi and building future-ready AI and digital products while creating real-world career opportunities for developers.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="/apply"
              className="group btn-primary inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl">
              <span>Apply as Engineer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ position: "relative", zIndex: 1 }} />
            </a>
            <a href="/project"
              className="btn-outline inline-flex items-center gap-2 text-indigo-300 font-semibold px-8 py-4 rounded-xl">
              <Sparkles className="w-4 h-4" />
              Submit a Project
            </a>
          </div>

          <div className="flex flex-wrap gap-8">
            {[{ v: "200+", l: "Interns Trained" }, { v: "50+", l: "AI Projects Shipped" }, { v: "30+", l: "Partner Companies" }].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold gradient-text">{s.v}</div>
                <div className="text-sm text-[#8888aa]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative" style={{ animation: "slide-right .8s .2s ease both" }}>
          <div className="absolute inset-0 rounded-3xl bg-indigo-500/5 blur-2xl" />

          <div className="relative glass-strong rounded-3xl p-1 border border-indigo-500/20 glow-indigo">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-indigo-500/10">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <span className="ml-3 text-xs text-[#8888aa] font-mono">champspace_agent.py</span>
              <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
                <Activity className="w-3 h-3" />
                <span>Running</span>
              </div>
            </div>

            {/* Code */}
            <div className="code-block rounded-none border-0 p-5 min-h-[200px]">
              {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                <span key={i} className={`code-line ${line.c}`}>
                  {line.t}
                  {i === visibleLines - 1 && <span className="animate-blink text-indigo-400">▋</span>}
                </span>
              ))}
            </div>

            {/* Output */}
            <div className="border-t border-indigo-500/10 p-4 space-y-2 rounded-b-3xl">
              {[
                { icon: <Bot className="w-3.5 h-3.5 text-cyan-400" />, text: "Agent initialized with 2 tools", color: "text-[#8888aa]" },
                { icon: <Zap className="w-3.5 h-3.5 text-yellow-400" />, text: "Searching knowledge base...", color: "text-[#8888aa]" },
                { icon: <Code2 className="w-3.5 h-3.5 text-purple-400" />, text: "Generating analysis report...", color: "text-[#8888aa]" },
                { icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />, text: "Task completed in 1.4s ✓", color: "text-emerald-400 font-semibold" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  {row.icon}
                  <span className={row.color}>{row.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech badges */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {TECH_BADGES.map((b) => (
              <span key={b.label}
                className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs font-medium ${b.cls}`}
                style={{ animation: `float-alt 4s ${b.delay} ease-in-out infinite` }}>
                <span className={`w-1.5 h-1.5 rounded-full ${b.dot}`} />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05050f] to-transparent pointer-events-none" />
    </section>
  )
}
