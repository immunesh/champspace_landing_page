"use client"

import { useEffect, useState, useCallback } from "react"
import {
  Zap, Lock, Eye, EyeOff, LogOut, Users, FolderKanban, MessageSquare,
  CheckCircle2, Clock, Trash2, ChevronDown, ChevronUp, RefreshCw, Search,
} from "lucide-react"
import {
  getApplications, getProjects, getContacts,
  updateApplicationStatus, updateProjectStatus, updateContactStatus,
  deleteApplication, deleteProject, deleteContact,
  type EngineerApplication, type ProjectSubmission, type ContactMessage,
} from "@/lib/form-store"

const ADMIN_PASSWORD = "champspace@admin"

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
}

function Badge({ status }: { status: "new" | "reviewed" }) {
  return status === "new"
    ? <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />New</span>
    : <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-medium"><CheckCircle2 className="w-3 h-3" />Reviewed</span>
}

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <div className="flex gap-3 text-sm">
      <span className="text-[#555577] font-medium min-w-[110px] flex-shrink-0">{label}</span>
      <span className="text-[#c0c0d0] break-all">{value}</span>
    </div>
  )
}

// ── Application Card ────────────────────────────────────────────────────────
function AppCard({ app, onRefresh }: { app: EngineerApplication; onRefresh: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-strong border border-indigo-500/15 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-4 p-4 cursor-pointer hover:bg-white/2 transition-colors" onClick={() => setOpen(!open)}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {app.name?.[0]?.toUpperCase() ?? "?"}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white font-semibold text-sm">{app.name || "—"}</span>
            <Badge status={app.status} />
          </div>
          <div className="text-[#8888aa] text-xs mt-0.5 truncate">{app.email} · {app.phone}</div>
        </div>
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
            {app.positionType === "intern" ? "Internship" : "Full-Time"}
          </span>
          <span className="text-xs text-[#555577]">{formatDate(app.submittedAt)}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-[#555577] flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#555577] flex-shrink-0" />}
      </div>

      {open && (
        <div className="border-t border-indigo-500/10 p-5 space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Row label="Name"         value={app.name} />
            <Row label="Email"        value={app.email} />
            <Row label="Phone"        value={app.phone} />
            <Row label="Location"     value={app.location} />
            <Row label="Position"     value={app.positionType === "intern" ? "Internship" : "Full-Time"} />
            <Row label="Experience"   value={app.experience} />
            <Row label="Availability" value={app.availability} />
            <Row label="College"      value={app.college} />
          </div>
          <Row label="Departments"  value={app.departments?.join(", ")} />
          {app.otherDept && <Row label="Custom Dept" value={app.otherDept} />}
          <Row label="Skills"       value={app.skills} />
          <Row label="GitHub"       value={app.github} />
          <Row label="LinkedIn"     value={app.linkedin} />
          <Row label="Portfolio"    value={app.portfolio} />
          {app.bio && (
            <div className="text-sm">
              <div className="text-[#555577] font-medium mb-1">Bio / About</div>
              <div className="text-[#c0c0d0] bg-white/3 rounded-xl p-3 leading-relaxed">{app.bio}</div>
            </div>
          )}
          {app.projectDesc && (
            <div className="text-sm">
              <div className="text-[#555577] font-medium mb-1">Project Description</div>
              <div className="text-[#c0c0d0] bg-white/3 rounded-xl p-3 leading-relaxed">{app.projectDesc}</div>
            </div>
          )}
          <div className="flex items-center gap-3 pt-2 border-t border-indigo-500/10">
            <span className="text-xs text-[#555577]">{formatDate(app.submittedAt)}</span>
            <div className="flex gap-2 ml-auto">
              <button onClick={() => { updateApplicationStatus(app.id, app.status === "new" ? "reviewed" : "new"); onRefresh() }}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/20 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {app.status === "new" ? "Mark Reviewed" : "Mark New"}
              </button>
              <button onClick={() => { if (confirm("Delete this application?")) { deleteApplication(app.id); onRefresh() } }}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 hover:bg-red-500/20 transition-colors">
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Project Card ─────────────────────────────────────────────────────────────
function ProjCard({ proj, onRefresh }: { proj: ProjectSubmission; onRefresh: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-strong border border-cyan-500/15 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-4 p-4 cursor-pointer hover:bg-white/2 transition-colors" onClick={() => setOpen(!open)}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {proj.name?.[0]?.toUpperCase() ?? "?"}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white font-semibold text-sm">{proj.name || "—"}</span>
            <Badge status={proj.status} />
          </div>
          <div className="text-[#8888aa] text-xs mt-0.5 truncate">{proj.company} · {proj.email}</div>
        </div>
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 truncate max-w-[120px]">
            {proj.projectType}
          </span>
          <span className="text-xs text-[#555577]">{formatDate(proj.submittedAt)}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-[#555577] flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#555577] flex-shrink-0" />}
      </div>

      {open && (
        <div className="border-t border-cyan-500/10 p-5 space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Row label="Name"         value={proj.name} />
            <Row label="Email"        value={proj.email} />
            <Row label="Phone"        value={proj.phone} />
            <Row label="Company"      value={proj.company} />
            <Row label="Team Size"    value={proj.teamSize} />
            <Row label="Industry"     value={proj.industry} />
            <Row label="Website"      value={proj.website} />
            <Row label="Project Type" value={proj.projectType} />
            <Row label="Budget"       value={proj.budget} />
            <Row label="Timeline"     value={proj.timeline} />
          </div>
          <Row label="Project Name"  value={proj.projectName} />
          {proj.description && (
            <div className="text-sm">
              <div className="text-[#555577] font-medium mb-1">Description</div>
              <div className="text-[#c0c0d0] bg-white/3 rounded-xl p-3 leading-relaxed">{proj.description}</div>
            </div>
          )}
          {proj.features && (
            <div className="text-sm">
              <div className="text-[#555577] font-medium mb-1">Key Features</div>
              <div className="text-[#c0c0d0] bg-white/3 rounded-xl p-3 leading-relaxed">{proj.features}</div>
            </div>
          )}
          <div className="flex items-center gap-3 pt-2 border-t border-cyan-500/10">
            <span className="text-xs text-[#555577]">{formatDate(proj.submittedAt)}</span>
            <div className="flex gap-2 ml-auto">
              <button onClick={() => { updateProjectStatus(proj.id, proj.status === "new" ? "reviewed" : "new"); onRefresh() }}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/20 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {proj.status === "new" ? "Mark Reviewed" : "Mark New"}
              </button>
              <button onClick={() => { if (confirm("Delete this submission?")) { deleteProject(proj.id); onRefresh() } }}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 hover:bg-red-500/20 transition-colors">
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Contact Card ─────────────────────────────────────────────────────────────
function ContactCard({ msg, onRefresh }: { msg: ContactMessage; onRefresh: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-strong border border-purple-500/15 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-4 p-4 cursor-pointer hover:bg-white/2 transition-colors" onClick={() => setOpen(!open)}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {msg.name?.[0]?.toUpperCase() ?? "?"}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white font-semibold text-sm">{msg.name || "—"}</span>
            <Badge status={msg.status} />
          </div>
          <div className="text-[#8888aa] text-xs mt-0.5 truncate">{msg.email} · {msg.subject}</div>
        </div>
        <div className="hidden sm:block flex-shrink-0">
          <span className="text-xs text-[#555577]">{formatDate(msg.submittedAt)}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-[#555577] flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#555577] flex-shrink-0" />}
      </div>

      {open && (
        <div className="border-t border-purple-500/10 p-5 space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Row label="Name"    value={msg.name} />
            <Row label="Email"   value={msg.email} />
            <Row label="Subject" value={msg.subject} />
          </div>
          <div className="text-sm">
            <div className="text-[#555577] font-medium mb-1">Message</div>
            <div className="text-[#c0c0d0] bg-white/3 rounded-xl p-3 leading-relaxed">{msg.message}</div>
          </div>
          <div className="flex items-center gap-3 pt-2 border-t border-purple-500/10">
            <span className="text-xs text-[#555577]">{formatDate(msg.submittedAt)}</span>
            <div className="flex gap-2 ml-auto">
              <button onClick={() => { updateContactStatus(msg.id, msg.status === "new" ? "reviewed" : "new"); onRefresh() }}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/20 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {msg.status === "new" ? "Mark Reviewed" : "Mark New"}
              </button>
              <button onClick={() => { if (confirm("Delete this message?")) { deleteContact(msg.id); onRefresh() } }}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 hover:bg-red-500/20 transition-colors">
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Main Admin Page ───────────────────────────────────────────────────────────
export default function AdminPage() {
  const [authed, setAuthed]     = useState(false)
  const [pw, setPw]             = useState("")
  const [showPw, setShowPw]     = useState(false)
  const [pwError, setPwError]   = useState("")
  const [tab, setTab]           = useState<"apps" | "projects" | "contacts">("apps")
  const [search, setSearch]     = useState("")
  const [tick, setTick]         = useState(0)

  const [apps, setApps]         = useState<EngineerApplication[]>([])
  const [projects, setProjects] = useState<ProjectSubmission[]>([])
  const [contacts, setContacts] = useState<ContactMessage[]>([])

  const refresh = useCallback(() => {
    setApps(getApplications())
    setProjects(getProjects())
    setContacts(getContacts())
    setTick((t) => t + 1)
  }, [])

  useEffect(() => { if (authed) refresh() }, [authed, refresh])

  const handleLogin = () => {
    if (pw === ADMIN_PASSWORD) { setAuthed(true); setPwError("") }
    else { setPwError("Incorrect password. Try again.") }
  }

  // Filter by search
  const filterApps = apps.filter((a) =>
    !search || [a.name, a.email, a.phone, a.location].some((v) => v?.toLowerCase().includes(search.toLowerCase()))
  )
  const filterProjs = projects.filter((p) =>
    !search || [p.name, p.email, p.company, p.projectType, p.projectName].some((v) => v?.toLowerCase().includes(search.toLowerCase()))
  )
  const filterContacts = contacts.filter((c) =>
    !search || [c.name, c.email, c.subject, c.message].some((v) => v?.toLowerCase().includes(search.toLowerCase()))
  )

  const newApps     = apps.filter((a) => a.status === "new").length
  const newProjs    = projects.filter((p) => p.status === "new").length
  const newContacts = contacts.filter((c) => c.status === "new").length

  // ── Login screen ──────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-16" style={{ background: "#05050f" }}>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4 glow-indigo">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Champspace Admin</h1>
            <p className="text-[#8888aa] text-sm mt-1">Enter your admin password to continue</p>
          </div>
          <div className="glass-strong border border-indigo-500/20 rounded-3xl p-6">
            <div className="mb-4">
              <label className="text-xs text-[#8888aa] font-medium mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555577]" />
                <input
                  type={showPw ? "text" : "password"}
                  value={pw}
                  onChange={(e) => { setPw(e.target.value); setPwError("") }}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  placeholder="Admin password"
                  className={`w-full glass rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-[#555577] focus:outline-none transition-colors border ${pwError ? "border-red-500/60" : "border-indigo-500/20 focus:border-indigo-500/55"}`}
                />
                <button onClick={() => setShowPw(!showPw)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#555577] hover:text-white transition-colors">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {pwError && <p className="text-xs text-red-400 mt-1.5">{pwError}</p>}
            </div>
            <button onClick={handleLogin}
              className="btn-primary w-full text-white font-semibold py-3 rounded-xl">
              Sign In
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Dashboard ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen pt-16" style={{ background: "#05050f" }}>
      {/* Header */}
      <div className="border-b border-indigo-500/10 px-4 py-3 sticky top-16 z-40 glass-strong">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white font-bold text-sm tracking-tight">Champspace <span className="text-indigo-400">Admin</span></span>
          </div>

          <div className="flex-1 max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#555577]" />
              <input
                type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, company…"
                className="w-full glass border border-indigo-500/20 rounded-xl pl-8 pr-3 py-2 text-xs text-white placeholder-[#555577] focus:outline-none focus:border-indigo-500/55 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={refresh} className="w-8 h-8 glass border border-indigo-500/20 rounded-lg flex items-center justify-center text-[#8888aa] hover:text-indigo-300 transition-colors" aria-label="Refresh">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => setAuthed(false)} className="inline-flex items-center gap-1.5 text-xs glass border border-indigo-500/20 rounded-lg px-3 py-2 text-[#8888aa] hover:text-red-400 hover:border-red-500/30 transition-colors">
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: Users,         label: "Engineer Applications", total: apps.length,     newCount: newApps,     color: "indigo", tab: "apps"     as const },
            { icon: FolderKanban,  label: "Project Submissions",   total: projects.length, newCount: newProjs,    color: "cyan",   tab: "projects" as const },
            { icon: MessageSquare, label: "Contact Messages",      total: contacts.length, newCount: newContacts, color: "purple", tab: "contacts" as const },
          ].map((s) => (
            <button key={s.tab} onClick={() => setTab(s.tab)}
              className={`glass-strong border rounded-2xl p-4 text-left transition-all hover:scale-[1.02] ${tab === s.tab ? `border-${s.color}-500/40 bg-${s.color}-500/5` : "border-indigo-500/10"}`}>
              <div className="flex items-center justify-between mb-2">
                <s.icon className={`w-5 h-5 text-${s.color}-400`} />
                {s.newCount > 0 && (
                  <span className={`text-xs px-2 py-0.5 rounded-full bg-${s.color}-500/15 border border-${s.color}-500/30 text-${s.color}-300 font-bold`}>
                    {s.newCount} new
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold text-white">{s.total}</div>
              <div className="text-xs text-[#8888aa] mt-0.5">{s.label}</div>
            </button>
          ))}
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-2 mb-6">
          {([
            { key: "apps",     label: "Applications", count: filterApps.length,     icon: Users },
            { key: "projects", label: "Projects",     count: filterProjs.length,    icon: FolderKanban },
            { key: "contacts", label: "Contacts",     count: filterContacts.length, icon: MessageSquare },
          ] as const).map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all ${
                tab === t.key
                  ? "bg-indigo-500/20 border border-indigo-500/40 text-white"
                  : "text-[#8888aa] hover:text-white hover:bg-white/5"
              }`}>
              <t.icon className="w-4 h-4" />
              {t.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${tab === t.key ? "bg-indigo-500/30 text-indigo-200" : "bg-white/8 text-[#8888aa]"}`}>
                {t.count}
              </span>
            </button>
          ))}
        </div>

        {/* Empty state */}
        {((tab === "apps" && filterApps.length === 0) ||
          (tab === "projects" && filterProjs.length === 0) ||
          (tab === "contacts" && filterContacts.length === 0)) && (
          <div className="glass border border-indigo-500/10 rounded-2xl p-12 text-center">
            <Clock className="w-10 h-10 text-[#555577] mx-auto mb-3" />
            <p className="text-[#8888aa] font-medium">No {tab} yet</p>
            <p className="text-[#555577] text-sm mt-1">
              {search ? "No results match your search." : "Submissions will appear here once users complete the form."}
            </p>
          </div>
        )}

        {/* Lists */}
        <div className="space-y-3" key={tick}>
          {tab === "apps"     && filterApps.map((a) => <AppCard     key={a.id} app={a}   onRefresh={refresh} />)}
          {tab === "projects" && filterProjs.map((p) => <ProjCard   key={p.id} proj={p}  onRefresh={refresh} />)}
          {tab === "contacts" && filterContacts.map((c) => <ContactCard key={c.id} msg={c} onRefresh={refresh} />)}
        </div>
      </div>
    </div>
  )
}
