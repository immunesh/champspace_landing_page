"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useIntersection } from "@/hooks/use-intersection"

const TESTIMONIALS = [
  {
    name: "Aisha Patel",
    role: "Software Engineer → AI Engineer",
    track: "Industry Dev Track",
    text: "Champspace is the real deal. In 6 months I went from writing CRUD apps to deploying a multi-agent system used by 3,000 daily users. The mentorship was unlike anything I'd experienced — senior engineers who actually cared about my growth.",
    color: "indigo",
    avatar: "from-indigo-500 to-purple-600",
    company: "Now at a Series B AI startup",
    stars: 5,
  },
  {
    name: "Marcus Kim",
    role: "CS Graduate, 2025",
    track: "College Grad Track",
    text: "I graduated with a CS degree but no idea how to build real AI. Champspace gave me my first production project within weeks. By month 3 I was on a client call presenting the agent I built. I got a full-time offer before I even finished the program.",
    color: "cyan",
    avatar: "from-cyan-500 to-indigo-600",
    company: "Hired as ML Engineer",
    stars: 5,
  },
  {
    name: "Fatima Al-Hassan",
    role: "Data Analyst → AI Developer",
    track: "Industry Dev Track",
    text: "The curriculum is genuinely current — LangChain, CrewAI, the whole modern stack. I wasn't just learning theory; I was building automation tools that my clients were using in production every week. Champspace accelerated my career by 3 years.",
    color: "purple",
    avatar: "from-purple-500 to-pink-600",
    company: "Now leading AI projects",
    stars: 5,
  },
  {
    name: "Rahul Sharma",
    role: "BTech Graduate",
    track: "College Grad Track",
    text: "Coming in with no prior ML experience, I was worried I'd be lost. But the structure is brilliant — each week built on the last. By month 2 I'd built a RAG system. By month 4 I was reviewing other interns' code. Champspace changed my trajectory completely.",
    color: "emerald",
    avatar: "from-emerald-500 to-cyan-600",
    company: "AI intern → promoted full-time",
    stars: 5,
  },
  {
    name: "Sophie Chen",
    role: "Backend Engineer → AI Architect",
    track: "Industry Dev Track",
    text: "The part-time format was perfect for my situation. I kept my day job while building serious AI skills. The projects are real — production-grade codebases, real deadlines, real stakeholders. Best investment I've made in my career.",
    color: "yellow",
    avatar: "from-yellow-500 to-orange-600",
    company: "Now consulting in AI",
    stars: 5,
  },
  {
    name: "James Okoye",
    role: "Final Year Student",
    track: "College Grad Track",
    text: "I joined while still in my final year. By graduation I had a portfolio of 3 shipped AI projects. Every interview I went to, the Champspace work was the highlight. I had 4 offers — picked the one with the best AI team.",
    color: "pink",
    avatar: "from-pink-500 to-purple-600",
    company: "Full-time offer before graduation",
    stars: 5,
  },
]

const COLOR = {
  indigo:  { border: "border-indigo-500/25",  quote: "text-indigo-400",  tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25",  glow: "rgba(99,102,241,0.12)" },
  cyan:    { border: "border-cyan-500/25",    quote: "text-cyan-400",    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",        glow: "rgba(6,182,212,0.12)" },
  purple:  { border: "border-purple-500/25",  quote: "text-purple-400",  tag: "bg-purple-500/10 text-purple-300 border-purple-500/25",  glow: "rgba(168,85,247,0.12)" },
  emerald: { border: "border-emerald-500/25", quote: "text-emerald-400", tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25", glow: "rgba(16,185,129,0.12)" },
  yellow:  { border: "border-yellow-500/25",  quote: "text-yellow-400",  tag: "bg-yellow-500/10 text-yellow-300 border-yellow-500/25",  glow: "rgba(234,179,8,0.12)" },
  pink:    { border: "border-pink-500/25",    quote: "text-pink-400",    tag: "bg-pink-500/10 text-pink-300 border-pink-500/25",        glow: "rgba(236,72,153,0.12)" },
} as const

export default function Testimonials() {
  const { ref, isVisible } = useIntersection()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi, onSelect])

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 4500)
    return () => clearInterval(interval)
  }, [emblaApi])

  const scrollSnaps = emblaApi?.scrollSnapList() ?? []
  const active = TESTIMONIALS[selectedIndex % TESTIMONIALS.length]

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[90px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10">
        {/* Heading */}
        <div className={`text-center mb-12 px-4 reveal ${isVisible ? "visible" : ""}`}>
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

        {/* Featured active card (large, above carousel) */}
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 reveal d-100 ${isVisible ? "visible" : ""}`}>
          {TESTIMONIALS.map((t, i) => {
            const c = COLOR[t.color as keyof typeof COLOR]
            return (
              <div
                key={t.name}
                className="absolute inset-0 transition-all duration-500"
                style={{
                  opacity: i === selectedIndex % TESTIMONIALS.length ? 1 : 0,
                  pointerEvents: i === selectedIndex % TESTIMONIALS.length ? "auto" : "none",
                  position: i === selectedIndex % TESTIMONIALS.length ? "relative" : "absolute",
                }}
              >
                <div
                  className={`bento-card ${c.border} p-8 sm:p-10 relative overflow-hidden transition-all duration-500`}
                  style={{ boxShadow: `0 0 60px ${c.glow}` }}
                >
                  {/* Background quote mark */}
                  <div className={`absolute top-4 right-6 text-[120px] font-serif leading-none ${c.quote} opacity-5 select-none pointer-events-none`}>
                    "
                  </div>

                  <Quote className={`w-7 h-7 ${c.quote} mb-5 opacity-70`} />

                  <p className="text-[#d0d0e8] text-base sm:text-lg leading-relaxed mb-6 relative z-10">
                    "{t.text}"
                  </p>

                  <div className="flex gap-0.5 mb-5">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatar} flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-lg`}>
                      {t.name[0]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-[#8888aa] text-xs">{t.role}</div>
                      <div className="text-[#666688] text-xs mt-0.5">{t.company}</div>
                    </div>
                    <span className={`hidden sm:inline-flex text-xs px-3 py-1.5 rounded-full border font-medium flex-shrink-0 ${c.tag}`}>
                      {t.track}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Carousel strip */}
        <div className={`reveal d-200 ${isVisible ? "visible" : ""}`}>
          <div ref={emblaRef} className="overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex gap-4">
              {TESTIMONIALS.map((t, i) => {
                const c = COLOR[t.color as keyof typeof COLOR]
                const isActive = i === selectedIndex % TESTIMONIALS.length
                return (
                  <button
                    key={t.name}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`flex-none w-[80vw] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] text-left transition-all duration-300 rounded-2xl border p-5 cursor-pointer
                      ${isActive
                        ? `${c.border} bg-[#0d0d21]`
                        : "border-white/5 bg-[#0a0a18] hover:border-indigo-500/20 hover:bg-[#0d0d21]"
                      }`}
                    style={isActive ? { boxShadow: `0 0 30px ${c.glow}` } : undefined}
                    aria-label={`View story from ${t.name}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatar} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {t.name[0]}
                      </div>
                      <div className="min-w-0">
                        <div className={`text-sm font-semibold truncate transition-colors ${isActive ? "text-white" : "text-[#aaaacc]"}`}>
                          {t.name}
                        </div>
                        <div className="text-[#8888aa] text-xs truncate">{t.role}</div>
                      </div>
                      {isActive && (
                        <div className={`ml-auto w-2 h-2 rounded-full flex-shrink-0 ${c.quote.replace("text-", "bg-")}`}
                          style={{ animation: "pulse-glow 1.5s ease-in-out infinite" }} />
                      )}
                    </div>

                    <p className={`text-xs leading-relaxed line-clamp-2 transition-colors ${isActive ? "text-[#c0c0d0]" : "text-[#666688]"}`}>
                      "{t.text}"
                    </p>

                    <div className="flex gap-0.5 mt-3">
                      {[...Array(t.stars)].map((_, j) => (
                        <Star key={j} className={`w-3 h-3 fill-yellow-400 text-yellow-400 transition-opacity ${isActive ? "opacity-100" : "opacity-40"}`} />
                      ))}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className={`flex items-center justify-center gap-6 mt-7 px-4 reveal d-300 ${isVisible ? "visible" : ""}`}>
          <button
            onClick={scrollPrev}
            className="w-11 h-11 glass border border-indigo-500/25 rounded-xl flex items-center justify-center text-[#8888aa] hover:text-indigo-300 hover:border-indigo-500/55 transition-all active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === selectedIndex % TESTIMONIALS.length
                    ? "w-6 h-2.5 bg-indigo-400"
                    : "w-2.5 h-2.5 bg-[#333355] hover:bg-indigo-500/50"
                }`}
                aria-label={`Go to story ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="w-11 h-11 glass border border-indigo-500/25 rounded-xl flex items-center justify-center text-[#8888aa] hover:text-indigo-300 hover:border-indigo-500/55 transition-all active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-xs text-[#555577] mt-3 sm:hidden">
          Swipe to read more stories
        </p>
      </div>
    </section>
  )
}
