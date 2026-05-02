import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import Problem from "@/components/sections/problem"
import Solution from "@/components/sections/solution"
import UseCases from "@/components/sections/use-cases"
import Testimonials from "@/components/sections/testimonials"
import Pricing from "@/components/sections/pricing"
import FAQ from "@/components/sections/faq"
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"


export default function Home() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden min-h-screen">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <Hero />

        {/* Features Section (Technology that design makes life easier) */}
        <Features />

        {/* Problem Section (Tech support, Software develop, etc.) */}
        <Problem />

        {/* Solution Section (The Future Starts with AI, etc.) */}
        <Solution />

        {/* Use Cases Section (Revolutionizing industries with AI, etc.) */}
        <UseCases />

        {/* Testimonials Section (The future is here, Innovation that matters) */}
        <Testimonials />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <FinalCTA />

        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  )
}
