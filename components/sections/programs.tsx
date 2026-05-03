"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Briefcase, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react"

const INDUSTRY_PERKS = [
  "Advanced AI agent architectures",
  "Real client project ownership",
  "Career transition to AI engineering",
  "LLM fine-tuning & deployment",
  "Flexible part-time schedule",
  "Mentorship from senior engineers",
]

const COLLEGE_PERKS = [
  "Foundations of AI/ML and LLMs",
  "Hands-on project from day 1",
  "Portfolio of shipped AI tools",
  "Job placement support",
  "Full-time internship track",
  "Peer learning community",
]

export default function Programs() {
  const { ref, isVisible } = useIntersection()
  return (
    <section id="programs" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="tag">Internship Programs</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Two Paths.{" "}
            <span className="gradient-text">One Destination.</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            Whether you're an industry professional pivoting into AI or a fresh grad ready to build,
            Champspace has a program shaped for your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Industry Developer Card */}
          <div className={`reveal-left ${isVisible ? "visible" : ""} d-200`}>
            <div className="relative rounded-3xl p-px overflow-hidden h-full"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(168,85,247,0.3), rgba(6,182,212,0.2))" }}>
              <div className="glass-strong rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">
                {/* Accent glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/8 rounded-full blur-[60px]" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 glow-indigo">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>

                  <span className="tag mb-3 inline-block">For Industry Developers</span>
                  <h3 className="text-2xl font-bold text-white mb-3">Professional AI Track</h3>
                  <p className="text-[#8888aa] mb-6 leading-relaxed">
                    Designed for working developers, data engineers, and software professionals who want to transition into
                    AI engineering. Build real AI agents used by businesses — while keeping your current job.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {INDUSTRY_PERKS.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-[#c0c0d0]">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="text-center">
                        <div className="text-xl font-bold text-indigo-400">6 months</div>
                        <div className="text-xs text-[#8888aa]">Program Duration</div>
                      </div>
                      <div className="w-px h-10 bg-indigo-500/20" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-indigo-400">Part-time</div>
                        <div className="text-xs text-[#8888aa]">~20 hrs/week</div>
                      </div>
                      <div className="w-px h-10 bg-indigo-500/20" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-indigo-400">Remote</div>
                        <div className="text-xs text-[#8888aa]">Work anywhere</div>
                      </div>
                    </div>
                    <a href="#apply"
                      className="group btn-primary w-full inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl">
                      <span>Apply as Industry Dev</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ position: "relative", zIndex: 1 }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* College Grad Card */}
          <div className={`reveal-right ${isVisible ? "visible" : ""} d-300`}>
            <div className="relative rounded-3xl p-px overflow-hidden h-full"
              style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.4), rgba(99,102,241,0.3), rgba(168,85,247,0.2))" }}>
              <div className="glass-strong rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">
                {/* Accent glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-[60px]" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-5 glow-cyan">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>

                  <span className="tag mb-3 inline-block" style={{ color: "#67e8f9", borderColor: "rgba(6,182,212,0.3)", background: "rgba(6,182,212,0.1)" }}>
                    For College Graduates
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">Graduate AI Launch Track</h3>
                  <p className="text-[#8888aa] mb-6 leading-relaxed">
                    Fresh out of college? Jump straight into building AI products alongside senior engineers.
                    No prior AI experience needed — just curiosity and drive. We'll teach you everything on the job.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {COLLEGE_PERKS.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-[#c0c0d0]">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="text-center">
                        <div className="text-xl font-bold text-cyan-400">4 months</div>
                        <div className="text-xs text-[#8888aa]">Program Duration</div>
                      </div>
                      <div className="w-px h-10 bg-cyan-500/20" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-cyan-400">Full-time</div>
                        <div className="text-xs text-[#8888aa]">40 hrs/week</div>
                      </div>
                      <div className="w-px h-10 bg-cyan-500/20" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-cyan-400">Hybrid</div>
                        <div className="text-xs text-[#8888aa]">Flexible</div>
                      </div>
                    </div>
                    <a href="#apply"
                      className="group w-full inline-flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-all">
                      Apply as College Grad
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
