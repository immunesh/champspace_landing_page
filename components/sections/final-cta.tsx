"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { ArrowRight, Mail, Linkedin, Twitter, Sparkles } from "lucide-react"

export default function FinalCTA() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="apply" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-indigo-500/20">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-200 font-medium">Limited spots — 2026 cohort</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Ready to Build</span>
            <br />
            <span className="gradient-text">Tomorrow's AI?</span>
          </h2>

          <p className="text-xl text-[#8888aa] leading-relaxed mb-10 max-w-2xl mx-auto">
            Applications for our 2026 cohort are open. Join a team that ships real AI to real clients —
            and leave with a portfolio that speaks for itself.
          </p>

          {/* Application form card */}
          <div className={`glass-strong border border-indigo-500/20 rounded-3xl p-8 mb-10 text-left glow-indigo reveal d-200 ${isVisible ? "visible" : ""}`}>
            <h3 className="text-white font-bold text-xl mb-6">Start Your Application</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Track</label>
              <select className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/60 transition-colors bg-transparent appearance-none cursor-pointer">
                <option value="" className="bg-[#0d0d21]">Select your track...</option>
                <option value="industry" className="bg-[#0d0d21]">Professional AI Track (Industry Developers)</option>
                <option value="college" className="bg-[#0d0d21]">Graduate AI Launch Track (College Grads)</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Tell us about yourself</label>
              <textarea
                rows={3}
                placeholder="Your background, what you've built, and why you want to join Champspace..."
                className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
              />
            </div>
            <button className="group btn-primary w-full inline-flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl text-base">
              <span>Submit Application</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ position: "relative", zIndex: 1 }} />
            </button>
            <p className="text-xs text-[#8888aa] text-center mt-3">
              We review every application personally and reply within 3 business days.
            </p>
          </div>

          {/* Social links */}
          <div className={`flex items-center justify-center gap-4 reveal d-300 ${isVisible ? "visible" : ""}`}>
            <span className="text-sm text-[#8888aa]">Connect with us:</span>
            {[
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:hello@champspace.io" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href}
                className="w-10 h-10 glass border border-indigo-500/20 rounded-xl flex items-center justify-center text-[#8888aa] hover:text-indigo-300 hover:border-indigo-500/50 transition-all"
                aria-label={label}>
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
