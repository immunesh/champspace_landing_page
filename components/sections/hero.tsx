"use client"

import { Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import DashboardPreview from "@/components/dashboard-preview"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-[#0a0f14] via-[#0a0a2e] to-[#0a0f14] animate-fade-in-up font-geist">
      {/* Gradient Heading Centered */}
      <div className="w-full flex flex-col items-center mb-10">
        <h1
          className="text-center font-extrabold leading-[1.1]"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: '2.5rem',
            fontFamily: 'Geist, Geist Fallback, sans-serif',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 40%, #22d3ee 60%, #a3e635 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            Connecting Design<br />Possibilities Creating
          </span>
        </h1>
      </div>
      {/* Main Content Row */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start justify-center">
        {/* Left: AI Image */}
        <div className="flex-1 flex justify-end">
          <img
            src="/image-1.jpg"
            alt="AI Brain Network"
            className="rounded-2xl shadow-2xl w-full max-w-xl "
            style={{objectFit: 'cover', aspectRatio: '16/10'}}
          />
        </div>
        {/* Right: Chat Card, Description, Button */}
        <div className="flex-1 flex flex-col gap-6 min-w-[340px] max-w-[420px]">
          {/* Chat Card */}
          <div className="rounded-2xl bg-[#101417] border border-white/20 p-7 shadow-lg mb-2">
            <div className="flex flex-col gap-4">
              {/* Message 1 */}
              <div className="flex items-center gap-2 justify-end">
                <div className="bg-white text-black px-4 py-2 rounded-full text-base font-medium shadow">What can you do for me?</div>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              {/* Message 2 */}
              <div className="flex items-center gap-2 justify-start">
                <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="AI" className="w-8 h-8 rounded-full border-2 border-white" />
                <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold shadow border border-white/10 max-w-[210px]">
                  I can answer questions provide information & any problem you have
                </div>
              </div>
              {/* Message 3 */}
              <div className="flex items-center gap-2 justify-end">
                <div className="bg-white text-black px-4 py-2 rounded-full text-base font-medium shadow">How does AI work?</div>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="text-green-400 text-base font-medium mb-2" style={{lineHeight: '1.5'}}>
            It is a long established fact that a reader will be destracted by the readable content of a page when is looking at its layout
          </div>
          {/* Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold text-lg shadow hover:scale-105 transition"
              style={{boxShadow: '0 2px 16px 0 rgba(34,197,94,0.15)'}}
            >
              Learn More <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
