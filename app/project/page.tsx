"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Bot, Workflow, Globe, Smartphone, Database, Layers, User, Mail, Phone, Building2, MessageSquare, Calendar, DollarSign, FileText, Paperclip } from "lucide-react"

const PROJECT_TYPES = [
  { id: "ai-agent",    icon: Bot,      label: "AI Agent / LLM App",    desc: "Chatbots, autonomous agents, RAG systems" },
  { id: "automation",  icon: Workflow, label: "Automation / RPA",       desc: "Workflow automation, integrations, pipelines" },
  { id: "web-app",     icon: Globe,    label: "Web Application",        desc: "Full-stack web product, dashboards, portals" },
  { id: "mobile-app",  icon: Smartphone,label: "Mobile Application",   desc: "iOS & Android apps, cross-platform" },
  { id: "data",        icon: Database, label: "Data Product",           desc: "Pipelines, analytics, BI dashboards" },
  { id: "custom",      icon: Layers,   label: "Custom Software",        desc: "Something unique — let's talk" },
]

const BUDGETS = [
  "Under ₹1 Lakh",
  "₹1L – ₹5L",
  "₹5L – ₹15L",
  "₹15L – ₹50L",
  "₹50L+",
  "Let's discuss",
]

const TIMELINES = [
  "ASAP / Already overdue",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months (long-term)",
  "Flexible",
]

const TEAM_SIZES = ["Just me", "2–5 people", "6–20 people", "20–100 people", "100+ people"]

export default function ProjectPage() {
  const [selectedType, setSelectedType] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  if (submitted) {
    return (
      <div className="min-h-screen grid-pattern flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 bg-cyan-500/15 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-6 glow-cyan">
            <CheckCircle2 className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Project Brief Received!</h2>
          <p className="text-[#8888aa] leading-relaxed mb-8">
            Thanks for reaching out. Our team will review your project brief and get back to you within <span className="text-cyan-300 font-medium">2 business days</span> with an initial assessment and next steps.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/" className="btn-outline inline-flex items-center gap-2 text-indigo-300 font-semibold px-6 py-3.5 rounded-xl">
              Back to Home
            </Link>
            <button onClick={() => { setSubmitted(false); setStep(1); setSelectedType("") }}
              className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl">
              <span>Submit Another</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen grid-pattern pt-16">
      {/* Ambient */}
      <div className="fixed top-1/4 -right-40 w-[500px] h-[500px] bg-cyan-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 -left-40 w-[400px] h-[400px] bg-indigo-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-[#8888aa] hover:text-cyan-300 text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Champspace
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-sm text-cyan-200 font-medium">We build. You grow.</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Submit Your <span className="gradient-text-cyan">Project Brief</span>
          </h1>
          <p className="text-[#8888aa] text-lg">
            Tell us what you need and we'll put the right team on it — from AI agents to full digital products.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                s < step ? "bg-emerald-500 text-white" :
                s === step ? "bg-cyan-500 text-white glow-cyan" :
                "bg-[#1a1a2e] text-[#8888aa] border border-cyan-500/20"
              }`}>
                {s < step ? <CheckCircle2 className="w-4 h-4" /> : s}
              </div>
              <span className={`text-sm font-medium ${s === step ? "text-white" : "text-[#8888aa]"}`}>
                {s === 1 ? "Project Type" : s === 2 ? "Contact Details" : "Project Brief"}
              </span>
              {s < 3 && <div className="w-8 h-px bg-cyan-500/20 hidden sm:block" />}
            </div>
          ))}
        </div>

        <div className="glass-strong border border-cyan-500/20 rounded-3xl p-6 sm:p-8">

          {/* ── Step 1 ── */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">What are you looking to build?</h2>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {PROJECT_TYPES.map(({ id, icon: Icon, label, desc }) => {
                  const active = selectedType === id
                  return (
                    <button key={id} onClick={() => setSelectedType(id)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                        active
                          ? "border-cyan-500/55 bg-cyan-500/10"
                          : "border-cyan-500/12 bg-[#0a0a18] hover:border-cyan-500/30"
                      }`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${active ? "bg-cyan-500/20" : "bg-[#13132a]"}`}>
                        <Icon className={`w-5 h-5 ${active ? "text-cyan-400" : "text-[#8888aa]"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-semibold ${active ? "text-white" : "text-[#aaaacc]"}`}>{label}</div>
                        <div className="text-xs text-[#8888aa] mt-0.5">{desc}</div>
                      </div>
                      {active && <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />}
                    </button>
                  )
                })}
              </div>

              <button onClick={() => setStep(2)} disabled={!selectedType}
                className="w-full inline-flex items-center justify-center gap-2 font-bold py-4 rounded-xl text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)" }}>
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* ── Step 2 ── */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Who should we contact?</h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <CField icon={<User className="w-4 h-4" />} label="Your Full Name" placeholder="Name" type="text" />
                  <CField icon={<Mail className="w-4 h-4" />} label="Work Email" placeholder="you@company.com" type="email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <CField icon={<Phone className="w-4 h-4" />} label="Phone / WhatsApp" placeholder="+91 98765 43210" type="tel" />
                  <CField icon={<Building2 className="w-4 h-4" />} label="Company / Organisation" placeholder="Your company name" type="text" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Team Size</label>
                    <select className="w-full glass border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/55 transition-colors bg-transparent cursor-pointer">
                      <option value="" className="bg-[#0d0d21]">Select team size...</option>
                      {TEAM_SIZES.map((t) => <option key={t} value={t} className="bg-[#0d0d21]">{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Industry</label>
                    <input type="text" placeholder="e.g. EdTech, FinTech, Healthcare"
                      className="w-full glass border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-cyan-500/55 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Website (if any)</label>
                  <input type="url" placeholder="https://yourcompany.com"
                    className="w-full glass border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-cyan-500/55 transition-colors" />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="flex-1 border border-cyan-500/25 text-cyan-300 font-semibold py-3.5 rounded-xl hover:bg-cyan-500/8 transition-all">
                  Back
                </button>
                <button onClick={() => setStep(3)}
                  className="flex-[2] inline-flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-white"
                  style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)" }}>
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── Step 3 ── */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Tell us about your project</h2>
              <div className="space-y-4">

                <div>
                  <label className="text-xs text-[#8888aa] font-medium mb-1.5 block flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" /> Project Name / Title
                  </label>
                  <input type="text" placeholder="e.g. Customer Support AI Agent for my e-commerce store"
                    className="w-full glass border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-cyan-500/55 transition-colors" />
                </div>

                <div>
                  <label className="text-xs text-[#8888aa] font-medium mb-1.5 block flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" /> Project Description
                  </label>
                  <textarea rows={4} placeholder="Describe what you want to build, the problem it solves, who the end users are, and any specific requirements..."
                    className="w-full glass border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-cyan-500/55 transition-colors resize-none" />
                </div>

                <div>
                  <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Key Features / Functionality</label>
                  <textarea rows={3} placeholder="List the must-have features. e.g. — User login, AI chatbot, dashboard, PDF export..."
                    className="w-full glass border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-cyan-500/55 transition-colors resize-none" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#8888aa] font-medium mb-1.5 block flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5" /> Budget Range
                    </label>
                    <select className="w-full glass border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/55 transition-colors bg-transparent cursor-pointer">
                      <option value="" className="bg-[#0d0d21]">Select budget...</option>
                      {BUDGETS.map((b) => <option key={b} value={b} className="bg-[#0d0d21]">{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-[#8888aa] font-medium mb-1.5 block flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Timeline / Deadline
                    </label>
                    <select className="w-full glass border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/55 transition-colors bg-transparent cursor-pointer">
                      <option value="" className="bg-[#0d0d21]">Select timeline...</option>
                      {TIMELINES.map((t) => <option key={t} value={t} className="bg-[#0d0d21]">{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Tech Stack Preferences (optional)</label>
                  <input type="text" placeholder="e.g. Next.js, Python, PostgreSQL — or leave blank if you're unsure"
                    className="w-full glass border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-cyan-500/55 transition-colors" />
                </div>

                <div>
                  <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Do you have existing designs, docs, or references?</label>
                  <textarea rows={2} placeholder="Share Figma links, Google Docs, reference websites, or describe any existing work..."
                    className="w-full glass border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-cyan-500/55 transition-colors resize-none" />
                </div>

                <div>
                  <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Attach any files (optional)</label>
                  <label className="flex items-center gap-3 glass border border-dashed border-cyan-500/30 rounded-xl px-4 py-4 cursor-pointer hover:border-cyan-500/55 transition-colors">
                    <Paperclip className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-cyan-300 font-medium">Click to attach files</div>
                      <div className="text-xs text-[#8888aa]">PDF, Figma export, images — max 10MB</div>
                    </div>
                    <input type="file" multiple accept=".pdf,.png,.jpg,.fig,.zip" className="hidden" />
                  </label>
                </div>

                {/* Summary */}
                <div className="glass border border-cyan-500/15 rounded-xl p-4">
                  <div className="text-xs text-[#8888aa] mb-2 font-medium">Your project brief summary</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full border font-medium bg-cyan-500/10 border-cyan-500/25 text-cyan-300">
                      {PROJECT_TYPES.find((p) => p.id === selectedType)?.label ?? selectedType}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(2)} className="flex-1 border border-cyan-500/25 text-cyan-300 font-semibold py-3.5 rounded-xl hover:bg-cyan-500/8 transition-all">
                  Back
                </button>
                <button onClick={() => setSubmitted(true)}
                  className="flex-[2] inline-flex items-center justify-center gap-2 font-bold py-4 rounded-xl text-white"
                  style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)" }}>
                  <span>Submit Project Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-[#8888aa] text-center mt-3">We'll respond within 2 business days with an initial assessment.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

function CField({ icon, label, placeholder, type }: { icon: React.ReactNode; label: string; placeholder: string; type: string }) {
  return (
    <div>
      <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">{label}</label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#555577]">{icon}</span>
        <input type={type} placeholder={placeholder}
          className="w-full glass border border-cyan-500/20 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-cyan-500/55 transition-colors" />
      </div>
    </div>
  )
}
