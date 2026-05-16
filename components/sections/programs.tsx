"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Code2, FolderKanban, CheckCircle2, ArrowRight } from "lucide-react"

const ENGINEER_PERKS = [
  "Work on real AI agent & automation projects",
  "Internship and full-time tracks available",
  "All departments: AI/ML, Backend, Frontend, DevOps",
  "Mentorship from senior engineers",
  "Flexible part-time or full-time schedule",
  "Certificate + portfolio of shipped products",
]

const CLIENT_PERKS = [
  "AI agents, LLM apps & RAG systems",
  "Business process & workflow automation",
  "API integrations and data pipelines",
  "Intelligent document processing",
  "End-to-end delivery from design to deployment",
  "Transparent pricing and fast turnaround",
]

export default function Programs() {
  const { ref, isVisible } = useIntersection()
  return (
    <section id="programs" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="tag">Get Involved</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Two Ways to{" "}
            <span className="gradient-text">Work With Us.</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            Whether you're a developer looking to grow your career or a business with an AI problem to solve —
            Champspace has a path for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Engineer Card */}
          <div className={`reveal-left ${isVisible ? "visible" : ""} d-200`}>
            <div className="relative rounded-3xl p-px overflow-hidden h-full"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(168,85,247,0.3), rgba(6,182,212,0.2))" }}>
              <div className="glass-strong rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/8 rounded-full blur-[60px]" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 glow-indigo">
                    <Code2 className="w-7 h-7 text-white" />
                  </div>

                  <span className="tag mb-3 inline-block">For Engineers</span>
                  <h3 className="text-2xl font-bold text-white mb-3">Apply as an Engineer</h3>
                  <p className="text-[#8888aa] mb-6 leading-relaxed">
                    Join Champspace as an intern or full-time engineer. Work on real AI products shipped to
                    real clients — across every engineering discipline.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {ENGINEER_PERKS.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-[#c0c0d0]">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="text-center">
                        <div className="text-xl font-bold text-indigo-400">Intern</div>
                        <div className="text-xs text-[#8888aa]">4–6 months</div>
                      </div>
                      <div className="w-px h-10 bg-indigo-500/20" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-indigo-400">Full-Time</div>
                        <div className="text-xs text-[#8888aa]">Open roles</div>
                      </div>
                      <div className="w-px h-10 bg-indigo-500/20" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-indigo-400">Remote</div>
                        <div className="text-xs text-[#8888aa]">Work anywhere</div>
                      </div>
                    </div>
                    <a href="/apply"
                      className="group btn-primary w-full inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl">
                      <span>Apply as Engineer</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ position: "relative", zIndex: 1 }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Project Card */}
          <div className={`reveal-right ${isVisible ? "visible" : ""} d-300`}>
            <div className="relative rounded-3xl p-px overflow-hidden h-full"
              style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.4), rgba(99,102,241,0.3), rgba(168,85,247,0.2))" }}>
              <div className="glass-strong rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-[60px]" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-5 glow-cyan">
                    <FolderKanban className="w-7 h-7 text-white" />
                  </div>

                  <span className="tag mb-3 inline-block" style={{ color: "#67e8f9", borderColor: "rgba(6,182,212,0.3)", background: "rgba(6,182,212,0.1)" }}>
                    For Businesses
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">Submit a Client Project</h3>
                  <p className="text-[#8888aa] mb-6 leading-relaxed">
                    Have an AI or automation challenge? Submit your project and our team of engineers will
                    design, build, and ship the solution for your business.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {CLIENT_PERKS.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-[#c0c0d0]">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="text-center">
                        <div className="text-xl font-bold text-cyan-400">Fast</div>
                        <div className="text-xs text-[#8888aa]">Quick turnaround</div>
                      </div>
                      <div className="w-px h-10 bg-cyan-500/20" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-cyan-400">Custom</div>
                        <div className="text-xs text-[#8888aa]">Tailored to you</div>
                      </div>
                      <div className="w-px h-10 bg-cyan-500/20" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-cyan-400">End-to-End</div>
                        <div className="text-xs text-[#8888aa]">Full delivery</div>
                      </div>
                    </div>
                    <a href="/project"
                      className="group w-full inline-flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-all">
                      Submit a Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
