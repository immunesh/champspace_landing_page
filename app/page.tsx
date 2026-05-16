import Hero from "@/components/sections/hero"
import Stats from "@/components/sections/stats"
import Programs from "@/components/sections/programs"
import AIAgents from "@/components/sections/ai-agents"
import Automation from "@/components/sections/automation"
import Journey from "@/components/sections/journey"
import Projects from "@/components/sections/projects"
import ClientVideoTestimonials from "@/components/sections/client-video-testimonials"
import VideoReviews from "@/components/sections/video-reviews"
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Stats />
      <Programs />
      <AIAgents />
      <Automation />
      <Journey />
      <Projects />
      <ClientVideoTestimonials />
      <VideoReviews />
      <FinalCTA />
      <Footer />
    </main>
  )
}
