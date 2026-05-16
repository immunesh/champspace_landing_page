"use client"

import { Zap, Github, Linkedin, Mail, Phone } from "lucide-react"

const LINKS = {
  Programs: [
    { label: "Apply as Engineer", href: "/apply" },
    { label: "Submit a Project", href: "/project" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Cohort Schedule", href: "#programs" },
  ],
  "What You'll Build": [
    { label: "AI Agents", href: "#ai-agents" },
    { label: "Automation Tools", href: "#automation" },
    { label: "RAG Systems", href: "#ai-agents" },
    { label: "LLM Applications", href: "#ai-agents" },
  ],
  Company: [
    { label: "About Champspace", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "GitHub", href: "https://github.com/immunesh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/110208947/" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Contact Us", href: "mailto:champspace6@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/919027396563" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden border-t border-indigo-500/10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Champ<span className="gradient-text">space</span>
              </span>
            </div>
            <p className="text-[#8888aa] text-sm leading-relaxed mb-5 max-w-xs">
              AI software & automation development company. Building real-world AI products and creating career opportunities for engineers.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: Github,   href: "https://github.com/immunesh",                          label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/110208947/",          label: "LinkedIn" },
                { icon: Mail,     href: "mailto:champspace6@gmail.com",                         label: "Email" },
                { icon: Phone,    href: "https://wa.me/919027396563",                           label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="w-9 h-9 glass border border-indigo-500/20 rounded-lg flex items-center justify-center text-[#8888aa] hover:text-indigo-300 hover:border-indigo-500/50 transition-all"
                  aria-label={label}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[#8888aa] text-sm hover:text-indigo-300 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8888aa] text-sm">
            © {new Date().getFullYear()} Champspace. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="text-[#8888aa] text-xs hover:text-indigo-300 transition-colors">Privacy Policy</a>
            <a href="/terms"   className="text-[#8888aa] text-xs hover:text-indigo-300 transition-colors">Terms & Conditions</a>
            <a href="mailto:champspace6@gmail.com" className="text-[#8888aa] text-xs hover:text-indigo-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
