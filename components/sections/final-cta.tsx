"use client"

import { useState } from "react"
import { useIntersection } from "@/hooks/use-intersection"
import { ArrowRight, Mail, Linkedin, Twitter, Sparkles, Phone, CheckCircle2 } from "lucide-react"

export default function FinalCTA() {
  const { ref, isVisible } = useIntersection()
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-indigo-500/20">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-200 font-medium">Let's talk</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Get in</span>{" "}
            <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-xl text-[#8888aa] leading-relaxed mb-10 max-w-xl mx-auto">
            Have a question, a project idea, or just want to know more about Champspace? Drop us a message and we'll get back to you quickly.
          </p>

          {/* Contact form */}
          <div className={`glass-strong border border-indigo-500/20 rounded-3xl p-8 mb-10 text-left glow-indigo reveal d-200 ${isVisible ? "visible" : ""}`}>
            {sent ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-emerald-500/15 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Message Sent!</h3>
                <p className="text-[#8888aa] text-sm">We'll get back to you within 1–2 business days.</p>
                <button onClick={() => setSent(false)} className="mt-4 text-xs text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-white font-bold text-xl mb-6">Send us a message</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Your Name</label>
                      <input type="text" placeholder="Full name"
                        className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-indigo-500/55 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Email Address</label>
                      <input type="email" placeholder="you@example.com"
                        className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-indigo-500/55 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Subject</label>
                    <input type="text" placeholder="What's this about?"
                      className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-indigo-500/55 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Message</label>
                    <textarea rows={4} placeholder="Tell us what's on your mind..."
                      className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-indigo-500/55 transition-colors resize-none" />
                  </div>
                  <button onClick={() => setSent(true)}
                    className="group btn-primary w-full inline-flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl text-base">
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ position: "relative", zIndex: 1 }} />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Quick contact links */}
          <div className={`flex flex-wrap items-center justify-center gap-4 reveal d-300 ${isVisible ? "visible" : ""}`}>
            <span className="text-sm text-[#8888aa]">Or reach us directly:</span>
            {[
              { icon: Mail,     label: "Email",    href: "mailto:hello@champspace.in" },
              { icon: Phone,    label: "WhatsApp", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Twitter,  label: "Twitter",  href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href}
                className="inline-flex items-center gap-2 glass border border-indigo-500/20 rounded-xl px-4 py-2.5 text-sm text-[#8888aa] hover:text-indigo-300 hover:border-indigo-500/50 transition-all">
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
