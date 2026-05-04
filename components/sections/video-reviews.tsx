"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Play, ChevronLeft, ChevronRight, X, Volume2 } from "lucide-react"
import { useIntersection } from "@/hooks/use-intersection"

const VIDEOS = [
  {
    name: "Aisha Patel",
    role: "AI Engineer",
    track: "Industry Dev Track",
    duration: "2:34",
    quote: "Going from CRUD apps to shipping multi-agent systems in 6 months was unreal.",
    gradient: "from-indigo-600 to-purple-700",
    dotColor: "bg-indigo-400",
    tagColor: "bg-indigo-500/15 border-indigo-500/25 text-indigo-300",
    videoId: null,
  },
  {
    name: "Marcus Kim",
    role: "ML Engineer",
    track: "College Grad Track",
    duration: "3:12",
    quote: "I had a full-time offer before I even finished the program. Champspace was everything.",
    gradient: "from-cyan-600 to-indigo-700",
    dotColor: "bg-cyan-400",
    tagColor: "bg-cyan-500/15 border-cyan-500/25 text-cyan-300",
    videoId: null,
  },
  {
    name: "Fatima Al-Hassan",
    role: "AI Developer",
    track: "Industry Dev Track",
    duration: "2:58",
    quote: "The curriculum is genuinely current. I was building with LangChain and CrewAI from week two.",
    gradient: "from-purple-600 to-pink-700",
    dotColor: "bg-purple-400",
    tagColor: "bg-purple-500/15 border-purple-500/25 text-purple-300",
    videoId: null,
  },
  {
    name: "Rahul Sharma",
    role: "AI Intern → Full-Time",
    track: "College Grad Track",
    duration: "2:17",
    quote: "I went from zero ML experience to reviewing other intern's code by month four.",
    gradient: "from-emerald-600 to-cyan-700",
    dotColor: "bg-emerald-400",
    tagColor: "bg-emerald-500/15 border-emerald-500/25 text-emerald-300",
    videoId: null,
  },
  {
    name: "Sophie Chen",
    role: "AI Consultant",
    track: "Industry Dev Track",
    duration: "3:41",
    quote: "Part-time format, real deadlines, real stakeholders. Best investment I've made in my career.",
    gradient: "from-yellow-600 to-orange-700",
    dotColor: "bg-yellow-400",
    tagColor: "bg-yellow-500/15 border-yellow-500/25 text-yellow-300",
    videoId: null,
  },
  {
    name: "James Okoye",
    role: "Software Engineer",
    track: "College Grad Track",
    duration: "2:49",
    quote: "Every interview I went to, the Champspace work was the highlight. I had 4 offers.",
    gradient: "from-pink-600 to-purple-700",
    dotColor: "bg-pink-400",
    tagColor: "bg-pink-500/15 border-pink-500/25 text-pink-300",
    videoId: null,
  },
]

function VideoModal({ video, onClose }: { video: (typeof VIDEOS)[0]; onClose: () => void }) {
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
        className="relative w-full max-w-2xl glass-strong border border-indigo-500/25 rounded-3xl overflow-hidden glow-indigo"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 glass border border-white/10 rounded-xl flex items-center justify-center text-white hover:border-indigo-500/50 transition-all"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Video placeholder */}
        <div className={`relative w-full aspect-video bg-gradient-to-br ${video.gradient} flex items-center justify-center`}>
          <div className="absolute inset-0 dot-pattern opacity-20" />
          {/* Simulated video UI */}
          <div className="relative z-10 text-center px-6">
            <div className="w-20 h-20 rounded-full bg-white/15 border border-white/30 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
            <p className="text-white/80 text-sm font-medium">"{video.quote}"</p>
          </div>
          {/* Fake progress bar */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-1 bg-white/10">
              <div className="h-full bg-white/70 rounded-full" style={{ width: "35%" }} />
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-3">
                <button className="text-white/70 hover:text-white transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </button>
                <Volume2 className="w-4 h-4 text-white/70" />
                <span className="text-white/60 text-xs font-mono">0:58 / {video.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${video.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
              {video.name[0]}
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{video.name}</div>
              <div className="text-[#8888aa] text-xs">{video.role}</div>
            </div>
            <span className={`ml-auto text-xs px-2.5 py-1 rounded-full border font-medium ${video.tagColor}`}>
              {video.track}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function VideoReviews() {
  const { ref, isVisible } = useIntersection()
  const [activeModal, setActiveModal] = useState<(typeof VIDEOS)[0] | null>(null)
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          {/* Heading */}
          <div className={`text-center mb-12 px-4 reveal ${isVisible ? "visible" : ""}`}>
            <span className="tag" style={{ color: "#f9a8d4", borderColor: "rgba(236,72,153,0.3)", background: "rgba(236,72,153,0.08)" }}>
              Video Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
              Hear It From{" "}
              <span className="gradient-text">Our Interns</span>
            </h2>
            <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
              Real stories, unscripted. Watch what our interns have to say about their Champspace experience.
            </p>
          </div>

          {/* Carousel viewport */}
          <div className={`reveal d-200 ${isVisible ? "visible" : ""}`}>
            <div ref={emblaRef} className="overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex gap-4 sm:gap-5">
                {VIDEOS.map((video) => (
                  <div
                    key={video.name}
                    className="flex-none w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                  >
                    <div
                      className="bento-card group cursor-pointer overflow-hidden"
                      onClick={() => setActiveModal(video)}
                    >
                      {/* Thumbnail */}
                      <div className={`relative w-full aspect-video bg-gradient-to-br ${video.gradient} overflow-hidden`}>
                        <div className="absolute inset-0 dot-pattern opacity-20" />
                        {/* Scan line effect */}
                        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute left-0 right-0 h-px bg-white/20 blur-[1px]"
                            style={{ animation: "scan 2s linear infinite", top: 0 }} />
                        </div>

                        {/* Avatar */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center text-white font-bold text-2xl mb-2 backdrop-blur-sm">
                            {video.name[0]}
                          </div>
                          <div className="text-white/90 font-semibold text-sm">{video.name}</div>
                        </div>

                        {/* Play overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="w-14 h-14 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-sm scale-90 group-hover:scale-100 transition-transform duration-300">
                            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                          </div>
                        </div>

                        {/* Duration badge */}
                        <div className="absolute top-3 right-3 glass rounded-lg px-2.5 py-1 text-xs font-mono text-white border border-white/15">
                          {video.duration}
                        </div>

                        {/* Bottom gradient */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>

                      {/* Card body */}
                      <div className="p-5">
                        <p className="text-[#c0c0d0] text-sm leading-relaxed mb-4 line-clamp-2">
                          "{video.quote}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-semibold text-sm">{video.name}</div>
                            <div className="text-[#8888aa] text-xs">{video.role}</div>
                          </div>
                          <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${video.tagColor}`}>
                            {video.track.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className={`flex items-center justify-center gap-6 mt-8 px-4 reveal d-300 ${isVisible ? "visible" : ""}`}>
            {/* Prev */}
            <button
              onClick={scrollPrev}
              className="w-11 h-11 glass border border-indigo-500/25 rounded-xl flex items-center justify-center text-[#8888aa] hover:text-indigo-300 hover:border-indigo-500/55 transition-all active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "w-6 h-2.5 bg-indigo-400"
                      : "w-2.5 h-2.5 bg-[#333355] hover:bg-indigo-500/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={scrollNext}
              className="w-11 h-11 glass border border-indigo-500/25 rounded-xl flex items-center justify-center text-[#8888aa] hover:text-indigo-300 hover:border-indigo-500/55 transition-all active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Swipe hint — mobile only */}
          <p className="text-center text-xs text-[#555577] mt-4 sm:hidden">
            Swipe to explore more reviews
          </p>
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <VideoModal video={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  )
}
