"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Workflow, Plug, BarChart3, FileText, ArrowRight, CheckCircle2, Zap } from "lucide-react"

const AUTOMATION_TYPES = [
  {
    icon: Workflow,
    color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20",
    title: "Business Process Automation",
    desc: "Automate repetitive workflows like invoice processing, report generation, customer onboarding, and HR tasks — turning hours of work into seconds.",
    examples: ["Auto-invoice validation", "HR onboarding flows", "Approval chains"],
  },
  {
    icon: Plug,
    color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20",
    title: "API Integration & Workflows",
    desc: "Connect siloed systems — CRMs, ERPs, SaaS tools — through intelligent middleware that routes data, transforms formats, and handles errors gracefully.",
    examples: ["Salesforce ↔ Slack sync", "Webhook orchestration", "Event-driven pipelines"],
  },
  {
    icon: BarChart3,
    color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20",
    title: "Data Pipeline Automation",
    desc: "Build ETL/ELT pipelines that ingest, clean, enrich, and deliver data to dashboards and ML models — fully automated and monitored.",
    examples: ["Real-time ingestion", "Data quality checks", "Scheduled transforms"],
  },
  {
    icon: FileText,
    color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20",
    title: "Intelligent Document Processing",
    desc: "AI-powered extraction from PDFs, emails, and scanned documents — classifying, summarising, and routing content without human review.",
    examples: ["Contract extraction", "Email classification", "OCR + NLP parsing"],
  },
]

const WORKFLOW_STEPS = [
  { label: "Trigger", color: "bg-indigo-500", textColor: "text-indigo-300" },
  { label: "Parse",   color: "bg-purple-500", textColor: "text-purple-300" },
  { label: "AI Step", color: "bg-cyan-500",   textColor: "text-cyan-300" },
  { label: "Action",  color: "bg-emerald-500", textColor: "text-emerald-300" },
]

export default function Automation() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="automation" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[110px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="tag" style={{ color: "#67e8f9", borderColor: "rgba(6,182,212,0.3)", background: "rgba(6,182,212,0.1)" }}>
            Automation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Automation That Works{" "}
            <span className="gradient-text-cyan">While You Sleep</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            Interns design and deploy automation systems that handle real business problems — saving companies thousands of hours per year.
          </p>
        </div>

        {/* Animated workflow bar */}
        <div className={`mb-14 reveal d-100 ${isVisible ? "visible" : ""}`}>
          <div className="glass-strong border border-indigo-500/15 rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-[#8888aa] font-medium">Live Automation Pipeline</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>

            {/* Pipeline viz */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 flex-shrink-0">
                  <div className={`px-4 py-2.5 rounded-xl border ${step.bg}/20 border-opacity-30 flex items-center gap-2 text-sm font-medium ${step.textColor}`}
                    style={{ borderColor: step.color.replace("bg-", "").replace("-500", "") === step.color ? "rgba(99,102,241,0.3)" : undefined,
                      background: `${step.color.replace("bg-", "rgba(").replace("-500", ",0.1)")})` }}>
                    <span className={`w-2 h-2 rounded-full ${step.color}`}
                      style={{ animation: `pulse-glow ${1 + i * 0.3}s ease-in-out infinite` }} />
                    {step.label}
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#8888aa] flex-shrink-0" />
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2 flex-shrink-0">
                <ArrowRight className="w-4 h-4 text-[#8888aa]" />
                <div className="px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-sm font-medium text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Done ✓
                </div>
              </div>
            </div>

            <div className="mt-4 h-1 rounded-full overflow-hidden bg-[#1a1a2e]">
              <div className="h-full rounded-full glow-line-animate" style={{ width: "70%" }} />
            </div>
          </div>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {AUTOMATION_TYPES.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title}
                className={`glass-strong border ${item.border} rounded-2xl p-6 card-hover reveal d-${(i + 1) * 100} ${isVisible ? "visible" : ""}`}>
                <div className={`w-12 h-12 ${item.bg} border ${item.border} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#8888aa] text-sm leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-1.5">
                  {item.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-xs text-[#c0c0d0]">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.bg.replace("bg-", "bg-").replace("/10", "")} ${item.color.replace("text-", "bg-")}`} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
