"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { useCounter } from "@/hooks/use-counter"
import { Users, Rocket, Building2, Trophy } from "lucide-react"

const STATS = [
  { icon: Users,     value: 200, suffix: "+", label: "Interns Trained",      sub: "Since 2022",          color: "text-indigo-400",  bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  { icon: Rocket,    value: 50,  suffix: "+", label: "AI Projects Shipped",   sub: "To production",       color: "text-cyan-400",    bg: "bg-cyan-500/10",   border: "border-cyan-500/20" },
  { icon: Building2, value: 30,  suffix: "+", label: "Partner Companies",     sub: "Across industries",   color: "text-purple-400",  bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: Trophy,    value: 95,  suffix: "%", label: "Placement Rate",        sub: "Within 3 months",     color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
]

function StatCard({ icon: Icon, value, suffix, label, sub, color, bg, border, isVisible }: (typeof STATS)[0] & { isVisible: boolean }) {
  const count = useCounter(value, 1800, isVisible)
  return (
    <div className={`glass-strong border ${border} rounded-2xl p-6 card-hover text-center`}>
      <div className={`w-12 h-12 ${bg} border ${border} rounded-xl flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div className={`text-4xl font-bold ${color} mb-1`} style={{ animation: isVisible ? "counter-pop .5s ease forwards" : "none" }}>
        {count}{suffix}
      </div>
      <div className="text-white font-semibold text-sm mb-0.5">{label}</div>
      <div className="text-[#8888aa] text-xs">{sub}</div>
    </div>
  )
}

export default function Stats() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="relative py-16 overflow-hidden" ref={ref}>
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((s, i) => (
            <div key={s.label} className={`reveal d-${(i + 1) * 100} ${isVisible ? "visible" : ""}`}>
              <StatCard {...s} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-16" />
    </section>
  )
}
