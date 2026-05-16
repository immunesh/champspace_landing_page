"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Play, ChevronLeft, ChevronRight, X, Building2 } from "lucide-react"
import { useIntersection } from "@/hooks/use-intersection"

const CLIENT_VIDEOS = [
  {
    company: "TechVentures Inc.",
    name: "Rajiv Mehta",
    title: "CTO",
    project: "AI Agent Platform",
    youtubeId: "dQw4w9WgXcQ",
    quote: "Champspace delivered an AI agent system that saved our team over 40 hours of manual work every week.",
    gradient: "from-indigo-600 to-cyan-700",
    tagColor: "bg-indigo-500/15 border-indigo-500/25 text-indigo-300",
  },
  {
    company: "RetailEdge Co.",
    name: "Priya Singh",
    title: "Head of Operations",
    project: "Process Automation",
    youtubeId: "dQw4w9WgXcQ",
    quote: "Our invoice processing that used to take 3 days now runs overnight, fully automated.",
    gradient: "from-cyan-600 to-indigo-700",
    tagColor: "bg-cyan-500/15 border-cyan-500/25 text-cyan-300",
  },
  {
    company: "DataFlow Systems",
    name: "Alex Thompson",
    title: "VP Engineering",
    project: "RAG Knowledge Base",
    youtubeId: "dQw4w9WgXcQ",
    quote: "The RAG pipeline they built handles 10,000 queries a day without a single hiccup.",
    gradient: "from-purple-600 to-pink-700",
    tagColor: "bg-purple-500/15 border-purple-500/25 text-purple-300",
  },
  {
    company: "HealthFirst Labs",
    name: "Dr. Neha Kapoor",
    title: "Director of R&D",
    project: "Document Processing",
    youtubeId: "dQw4w9WgXcQ",
    quote: "Medical records extraction that needed a team of 5 is now fully automated and error-free.",
    gradient: "from-emerald-600 to-cyan-700",
    tagColor: "bg-emerald-500/15 border-emerald-500/25 text-emerald-300",
  },
]

function ClientVideoModal({ video, onClose }: { video: (typeof CLIENT_VIDEOS)[0]; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(5,5,15,0.92)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl glass-strong border border-cyan-500/25 rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(6,182,212,0.15)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 glass border border-white/10 rounded-xl flex items-center justify-center text-white hover:border-cyan-500/50 transition-all"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${video.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
              {video.name[0]}
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{video.name} · {video.title}</div>
              <div className="text-[#8888aa] text-xs">{video.company}</div>
            </div>
            <span className={`ml-auto text-xs px-2.5 py-1 rounded-full border font-medium ${video.tagColor}`}>
              {video.project}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ClientVideoTestimonials() {
  const { ref, isVisible } = useIntersection()
  const [activeModal, setActiveModal] = useState<(typeof CLIENT_VIDEOS)[0] | null>(null)
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

  const scrollSnaps = emblaApi?.scrollSnapList() ?? []

  return (
    <>
      <section className="relative py-24 overflow-hidden" ref={ref}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          <div className={`text-center mb-12 px-4 reveal ${isVisible ? "visible" : ""}`}>
            <span className="tag" style={{ color: "#67e8f9", borderColor: "rgba(6,182,212,0.3)", background: "rgba(6,182,212,0.08)" }}>
              Client Stories
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
              What Our{" "}
              <span className="gradient-text-cyan">Clients Say</span>
            </h2>
            <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
              Real businesses, real results. Watch how Champspace transformed their operations with AI and automation.
            </p>
          </div>

          <div className={`reveal d-200 ${isVisible ? "visible" : ""}`}>
            <div ref={emblaRef} className="overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex gap-4 sm:gap-5">
                {CLIENT_VIDEOS.map((video) => (
                  <div key={video.name} className="flex-none w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
                    <div className="bento-card group cursor-pointer overflow-hidden" onClick={() => setActiveModal(video)}>
                      <div className="relative w-full aspect-video overflow-hidden bg-black">
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                          alt={video.company}
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-50`} />

                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="w-14 h-14 rounded-2xl bg-white/15 border-2 border-white/30 flex items-center justify-center text-white mb-2 backdrop-blur-sm">
                            <Building2 className="w-6 h-6" />
                          </div>
                          <div className="text-white/90 font-semibold text-sm">{video.company}</div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="w-14 h-14 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-sm scale-90 group-hover:scale-100 transition-transform duration-300">
                            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      <div className="p-5">
                        <p className="text-[#c0c0d0] text-sm leading-relaxed mb-4 line-clamp-2">
                          "{video.quote}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-semibold text-sm">{video.name}</div>
                            <div className="text-[#8888aa] text-xs">{video.title} · {video.company}</div>
                          </div>
                          <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${video.tagColor}`}>
                            {video.project.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`flex items-center justify-center gap-6 mt-8 px-4 reveal d-300 ${isVisible ? "visible" : ""}`}>
            <button onClick={scrollPrev} className="w-11 h-11 glass border border-cyan-500/25 rounded-xl flex items-center justify-center text-[#8888aa] hover:text-cyan-300 hover:border-cyan-500/55 transition-all active:scale-95" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, i) => (
                <button key={i} onClick={() => emblaApi?.scrollTo(i)}
                  className={`rounded-full transition-all duration-300 ${i === selectedIndex ? "w-6 h-2.5 bg-cyan-400" : "w-2.5 h-2.5 bg-[#333355] hover:bg-cyan-500/50"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={scrollNext} className="w-11 h-11 glass border border-cyan-500/25 rounded-xl flex items-center justify-center text-[#8888aa] hover:text-cyan-300 hover:border-cyan-500/55 transition-all active:scale-95" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-center text-xs text-[#555577] mt-4 sm:hidden">Swipe to see more</p>
        </div>
      </section>

      {activeModal && <ClientVideoModal video={activeModal} onClose={() => setActiveModal(null)} />}
    </>
  )
}
