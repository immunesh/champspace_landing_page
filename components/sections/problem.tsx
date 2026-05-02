"use client"

import { AlertTriangle, TrendingUp, Zap } from "lucide-react"

export default function Problem() {
  const problems = [
    {
      stat: "1 digital attack every 39 seconds",
      description: "The threat landscape is growing exponentially",
      icon: TrendingUp,
    },
    {
      stat: "Traditional security tools are slow, reactive, and complex",
      description: "Leave gaps in your defense and slow your team down",
      icon: AlertTriangle,
    },
    {
      stat: "Small gaps → massive data breaches",
      description: "Without real-time detection, damage compounds quickly",
      icon: Zap,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#0a0f14] via-[#0a0a2e] to-[#0a0f14] animate-fade-in-up font-geist">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">The Threat Is Real</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Your security team is overwhelmed. Your tools are outdated. Your defenses have gaps.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl glassmorphism glow-border hover:border-accent transition group cursor-pointer transform-gpu hover:scale-105 hover:shadow-2xl active:scale-95 duration-200 animate-fadeIn"
                tabIndex={0}
                role="button"
                aria-label={problem.stat}
              >
                <Icon className="w-8 h-8 text-primary group-hover:text-accent group-hover:scale-110 transition mb-4 duration-200" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">{problem.stat}</h3>
                <p className="text-slate-400">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
