"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft, ArrowRight, CheckCircle2, Zap, User, Mail, Phone, Github,
  Linkedin, Globe, Code2, Brain, Layers, Server, Cloud, Wrench, BarChart3,
  Briefcase, GraduationCap, Upload, AlertCircle, PenLine,
} from "lucide-react"
import { saveApplication } from "@/lib/form-store"
import { submitToSheets } from "@/lib/sheets"

const DEPARTMENTS = [
  { id: "ai-ml",      icon: Brain,     label: "AI / ML Engineering",   desc: "LLM agents, RAG systems, model training" },
  { id: "frontend",   icon: Code2,     label: "Frontend Development",   desc: "Next.js, React, UI/UX engineering" },
  { id: "backend",    icon: Server,    label: "Backend Development",    desc: "APIs, databases, microservices" },
  { id: "automation", icon: Wrench,    label: "Automation Engineering", desc: "Workflow automation, RPA, integrations" },
  { id: "devops",     icon: Cloud,     label: "DevOps / Cloud",         desc: "AWS, GCP, Docker, CI/CD pipelines" },
  { id: "data",       icon: BarChart3, label: "Data Engineering",       desc: "Pipelines, analytics, data products" },
  { id: "fullstack",  icon: Layers,    label: "Full Stack Development", desc: "End-to-end product engineering" },
  { id: "others",     icon: Layers,    label: "Others",                 desc: "Something else — tell us more" },
]

const EXPERIENCE_LEVELS = ["0–1 year (Fresher)", "1–2 years", "2–4 years", "4–7 years", "7+ years"]
const AVAILABILITY = ["Immediately", "Within 2 weeks", "Within 1 month", "1–3 months notice"]

type Fields = {
  name: string; email: string; phone: string; location: string;
  github: string; linkedin: string; portfolio: string; college: string; skills: string;
}
type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+\d][\d\s\-().]{7,}$/

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.name.trim())                      e.name     = "Full name is required"
  else if (f.name.trim().length < 2)       e.name     = "Name must be at least 2 characters"
  if (!f.email.trim())                     e.email    = "Email address is required"
  else if (!EMAIL_RE.test(f.email.trim())) e.email    = "Enter a valid email address"
  if (!f.phone.trim())                     e.phone    = "Phone number is required"
  else if (!PHONE_RE.test(f.phone.trim())) e.phone    = "Enter a valid phone number"
  if (!f.location.trim())                  e.location = "Location is required"
  return e
}

export default function ApplyPage() {
  const [positionType, setPositionType] = useState<"intern" | "fulltime">("intern")
  const [selectedDepts, setSelectedDepts] = useState<string[]>([])
  const [otherDept, setOtherDept] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)
  const [experience, setExperience] = useState("")
  const [availability, setAvailability] = useState("")
  const [bio, setBio] = useState("")
  const [projectDesc, setProjectDesc] = useState("")

  const [fields, setFields] = useState<Fields>({
    name: "", email: "", phone: "", location: "",
    github: "", linkedin: "", portfolio: "", college: "", skills: "",
  })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({})

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }))
    if (touched[key]) setErrors((prev) => ({ ...prev, [key]: validate({ ...fields, [key]: e.target.value })[key] }))
  }

  const blur = (key: keyof Fields) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }))
    setErrors((prev) => ({ ...prev, [key]: validate(fields)[key] }))
  }

  const handleStep2Continue = () => {
    const allTouched = { name: true, email: true, phone: true, location: true }
    setTouched((prev) => ({ ...prev, ...allTouched }))
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length === 0) setStep(3)
  }

  const toggleDept = (id: string) =>
    setSelectedDepts((prev) => prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id])

  if (submitted) {
    return (
      <div className="min-h-screen grid-pattern flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 bg-emerald-500/15 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6 glow-emerald">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Application Submitted!</h2>
          <p className="text-[#8888aa] leading-relaxed mb-8">
            Thanks for applying to Champspace. We review every application personally and will get back to you within{" "}
            <span className="text-indigo-300 font-medium">3 business days</span>.
          </p>
          <Link href="/" className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl">
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen grid-pattern pt-16">
      <div className="fixed top-1/4 -left-40 w-[500px] h-[500px] bg-indigo-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 -right-40 w-[400px] h-[400px] bg-purple-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#8888aa] hover:text-indigo-300 text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Champspace
        </Link>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-indigo-500/20">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-sm text-indigo-200 font-medium">2026 Applications Open</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Join the <span className="gradient-text">Champspace Team</span>
          </h1>
          <p className="text-[#8888aa] text-lg">Apply for an internship or full-time role. We build real AI products — and we want you building with us.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                s < step ? "bg-emerald-500 text-white" :
                s === step ? "bg-indigo-500 text-white glow-indigo" :
                "bg-[#1a1a2e] text-[#8888aa] border border-indigo-500/20"
              }`}>
                {s < step ? <CheckCircle2 className="w-4 h-4" /> : s}
              </div>
              <span className={`text-sm font-medium hidden sm:block ${s === step ? "text-white" : "text-[#8888aa]"}`}>
                {s === 1 ? "Role & Department" : s === 2 ? "Personal Details" : "Experience & Submit"}
              </span>
              {s < 3 && <div className="w-6 h-px bg-indigo-500/20 hidden sm:block" />}
            </div>
          ))}
        </div>

        <div className="glass-strong border border-indigo-500/20 rounded-3xl p-6 sm:p-8">

          {/* ── Step 1 ── */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">What kind of role are you looking for?</h2>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {([["intern", GraduationCap, "Internship", "3–6 month program"], ["fulltime", Briefcase, "Full-Time", "Permanent position"]] as const).map(([val, Icon, label, sub]) => (
                  <button key={val} onClick={() => setPositionType(val)}
                    className={`p-4 rounded-2xl border text-left transition-all ${positionType === val ? "border-indigo-500/60 bg-indigo-500/10 glow-indigo" : "border-indigo-500/15 bg-[#0a0a18] hover:border-indigo-500/30"}`}>
                    <Icon className={`w-6 h-6 mb-2 ${positionType === val ? "text-indigo-400" : "text-[#8888aa]"}`} />
                    <div className={`font-semibold text-sm ${positionType === val ? "text-white" : "text-[#aaaacc]"}`}>{label}</div>
                    <div className="text-xs text-[#8888aa] mt-0.5">{sub}</div>
                  </button>
                ))}
              </div>

              <h3 className="text-white font-semibold mb-3">Select Department(s) <span className="text-[#8888aa] font-normal text-sm">(pick all that apply)</span></h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {DEPARTMENTS.map(({ id, label, desc }) => {
                  const active = selectedDepts.includes(id)
                  const isOthers = id === "others"
                  const Icon = isOthers ? PenLine : DEPARTMENTS.find((d) => d.id === id)!.icon
                  return (
                    <button key={id} onClick={() => toggleDept(id)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                        active
                          ? isOthers
                            ? "border-purple-500/55 bg-purple-500/10"
                            : "border-indigo-500/55 bg-indigo-500/10"
                          : "border-indigo-500/12 bg-[#0a0a18] hover:border-indigo-500/30"
                      }`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        active ? (isOthers ? "bg-purple-500/20" : "bg-indigo-500/20") : "bg-[#13132a]"
                      }`}>
                        <Icon className={`w-4 h-4 ${active ? (isOthers ? "text-purple-400" : "text-indigo-400") : "text-[#8888aa]"}`} />
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${active ? "text-white" : "text-[#aaaacc]"}`}>{label}</div>
                        <div className="text-xs text-[#8888aa] mt-0.5">{desc}</div>
                      </div>
                      {active && <CheckCircle2 className={`w-4 h-4 ml-auto mt-0.5 flex-shrink-0 ${isOthers ? "text-purple-400" : "text-indigo-400"}`} />}
                    </button>
                  )
                })}
              </div>

              {/* Others custom input */}
              {selectedDepts.includes("others") && (
                <div className="mb-5 border border-purple-500/30 bg-purple-500/5 rounded-xl p-4">
                  <label className="text-xs text-purple-300 font-medium mb-2 flex items-center gap-1.5">
                    <PenLine className="w-3.5 h-3.5" /> Describe your area of interest
                  </label>
                  <input
                    type="text"
                    value={otherDept}
                    onChange={(e) => setOtherDept(e.target.value)}
                    placeholder="e.g. UI/UX Design, Blockchain, Embedded Systems, Game Development..."
                    className="w-full bg-transparent border border-purple-500/25 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-purple-500/60 transition-colors"
                  />
                </div>
              )}

              <div className="mb-3" />

              <button onClick={() => setStep(2)} disabled={selectedDepts.length === 0}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed">
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" style={{ position: "relative", zIndex: 1 }} />
              </button>
            </div>
          )}

          {/* ── Step 2 ── */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Tell us about yourself</h2>
              <p className="text-xs text-[#8888aa] mb-6">Fields marked <span className="text-red-400">*</span> are required</p>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <VField
                    icon={<User className="w-4 h-4" />} label="Full Name" required
                    placeholder="Your full name" value={fields.name}
                    onChange={set("name")} onBlur={blur("name")} error={errors.name}
                  />
                  <VField
                    icon={<Mail className="w-4 h-4" />} label="Email Address" required
                    placeholder="you@example.com" type="email" value={fields.email}
                    onChange={set("email")} onBlur={blur("email")} error={errors.email}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <VField
                    icon={<Phone className="w-4 h-4" />} label="Phone Number" required
                    placeholder="+91 98765 43210" type="tel" value={fields.phone}
                    onChange={set("phone")} onBlur={blur("phone")} error={errors.phone}
                  />
                  <VField
                    label="Location" required
                    placeholder="City, Country" value={fields.location}
                    onChange={set("location")} onBlur={blur("location")} error={errors.location}
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <VField icon={<Github className="w-4 h-4" />} label="GitHub" placeholder="github.com/you" type="url" value={fields.github} onChange={set("github")} onBlur={blur("github")} />
                  <VField icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" placeholder="linkedin.com/in/you" type="url" value={fields.linkedin} onChange={set("linkedin")} onBlur={blur("linkedin")} />
                  <VField icon={<Globe className="w-4 h-4" />} label="Portfolio" placeholder="yoursite.com" type="url" value={fields.portfolio} onChange={set("portfolio")} onBlur={blur("portfolio")} />
                </div>
                <VField label="College / University (if applicable)" placeholder="e.g. IIT Delhi, VIT Vellore" value={fields.college} onChange={set("college")} onBlur={blur("college")} />
                <VField label="Your Tech Stack / Skills" placeholder="e.g. Python, React, LangChain, Docker" value={fields.skills} onChange={set("skills")} onBlur={blur("skills")} />
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="btn-outline flex-1 text-indigo-300 font-semibold py-3.5 rounded-xl">Back</button>
                <button onClick={handleStep2Continue}
                  className="btn-primary flex-[2] inline-flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl">
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" style={{ position: "relative", zIndex: 1 }} />
                </button>
              </div>
            </div>
          )}

          {/* ── Step 3 ── */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Experience & final details</h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Experience Level</label>
                    <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/55 transition-colors bg-transparent cursor-pointer">
                      <option value="" className="bg-[#0d0d21]">Select level...</option>
                      {EXPERIENCE_LEVELS.map((l) => <option key={l} value={l} className="bg-[#0d0d21]">{l}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Availability to Start</label>
                    <select value={availability} onChange={(e) => setAvailability(e.target.value)} className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/55 transition-colors bg-transparent cursor-pointer">
                      <option value="" className="bg-[#0d0d21]">Select availability...</option>
                      {AVAILABILITY.map((a) => <option key={a} value={a} className="bg-[#0d0d21]">{a}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Tell us about yourself & why Champspace</label>
                  <textarea rows={4} value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Your background, what you've built, and why you want to join Champspace..."
                    className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-indigo-500/55 transition-colors resize-none" />
                </div>
                <div>
                  <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Share a project or work you're proud of</label>
                  <textarea rows={3} value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)} placeholder="Describe a project you've built — what it does, the tech stack, your role, and the impact..."
                    className="w-full glass border border-indigo-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none focus:border-indigo-500/55 transition-colors resize-none" />
                </div>
                <div>
                  <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Resume / CV</label>
                  <label className="flex items-center gap-3 glass border border-dashed border-indigo-500/30 rounded-xl px-4 py-4 cursor-pointer hover:border-indigo-500/55 transition-colors">
                    <Upload className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-indigo-300 font-medium">Click to upload resume</div>
                      <div className="text-xs text-[#8888aa]">PDF or DOC, max 5MB</div>
                    </div>
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                  </label>
                </div>
                <div className="glass border border-indigo-500/15 rounded-xl p-4">
                  <div className="text-xs text-[#8888aa] mb-2 font-medium">Your application summary</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">{positionType === "intern" ? "Internship" : "Full-Time"}</span>
                    {selectedDepts.map((d) => (
                      <span key={d} className="tag">
                        {d === "others" && otherDept.trim() ? otherDept.trim() : DEPARTMENTS.find((x) => x.id === d)?.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(2)} className="btn-outline flex-1 text-indigo-300 font-semibold py-3.5 rounded-xl">Back</button>
                <button onClick={() => {
                    const payload = {
                      positionType, departments: selectedDepts, otherDept,
                      ...fields, experience, availability, bio, projectDesc,
                    }
                    saveApplication(payload)
                    submitToSheets("application", {
                      ...fields,
                      positionType,
                      departments: selectedDepts.join(", "),
                      otherDept, experience, availability, bio, projectDesc,
                    })
                    setSubmitted(true)
                  }}
                  className="btn-primary flex-[2] inline-flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl">
                  <span>Submit Application</span>
                  <ArrowRight className="w-4 h-4" style={{ position: "relative", zIndex: 1 }} />
                </button>
              </div>
              <p className="text-xs text-[#8888aa] text-center mt-3">We reply to every application within 3 business days.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

/* ── Validated field component ── */
function VField({
  icon, label, placeholder, type = "text", required,
  value, onChange, onBlur, error,
}: {
  icon?: React.ReactNode; label: string; placeholder?: string; type?: string
  required?: boolean; value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void; error?: string
}) {
  return (
    <div>
      <label className="text-xs text-[#8888aa] font-medium mb-1.5 flex items-center gap-1">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <div className="relative">
        {icon && <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#555577]">{icon}</span>}
        <input
          type={type} placeholder={placeholder} value={value}
          onChange={onChange} onBlur={onBlur}
          className={`w-full glass rounded-xl ${icon ? "pl-10" : "pl-4"} pr-4 py-3 text-sm text-white placeholder-[#555577] focus:outline-none transition-colors border ${
            error ? "border-red-500/60 focus:border-red-500" : "border-indigo-500/20 focus:border-indigo-500/55"
          }`}
        />
        {error && <AlertCircle className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400" />}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 flex-shrink-0" />{error}
        </p>
      )}
    </div>
  )
}
