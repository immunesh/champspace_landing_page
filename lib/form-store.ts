export type EngineerApplication = {
  id: string
  submittedAt: string
  status: "new" | "reviewed"
  positionType: "intern" | "fulltime"
  departments: string[]
  otherDept: string
  name: string
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
  portfolio: string
  college: string
  skills: string
  experience: string
  availability: string
  bio: string
  projectDesc: string
}

export type ProjectSubmission = {
  id: string
  submittedAt: string
  status: "new" | "reviewed"
  projectType: string
  otherType: string
  name: string
  email: string
  phone: string
  company: string
  teamSize: string
  industry: string
  website: string
  projectName: string
  description: string
  features: string
  budget: string
  timeline: string
}

export type ContactMessage = {
  id: string
  submittedAt: string
  status: "new" | "reviewed"
  name: string
  email: string
  subject: string
  message: string
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

function load<T>(key: string): T[] {
  if (typeof window === "undefined") return []
  try { return JSON.parse(localStorage.getItem(key) || "[]") } catch { return [] }
}

function save<T>(key: string, data: T[]) {
  localStorage.setItem(key, JSON.stringify(data))
}

// ── Engineer Applications ──────────────────────────────────────────────────
export function saveApplication(data: Omit<EngineerApplication, "id" | "submittedAt" | "status">) {
  const list = load<EngineerApplication>("cs_applications")
  list.unshift({ ...data, id: uid(), submittedAt: new Date().toISOString(), status: "new" })
  save("cs_applications", list)
}
export function getApplications()        { return load<EngineerApplication>("cs_applications") }
export function updateApplicationStatus(id: string, status: "new" | "reviewed") {
  save("cs_applications", getApplications().map((a) => a.id === id ? { ...a, status } : a))
}
export function deleteApplication(id: string) {
  save("cs_applications", getApplications().filter((a) => a.id !== id))
}

// ── Project Submissions ────────────────────────────────────────────────────
export function saveProject(data: Omit<ProjectSubmission, "id" | "submittedAt" | "status">) {
  const list = load<ProjectSubmission>("cs_projects")
  list.unshift({ ...data, id: uid(), submittedAt: new Date().toISOString(), status: "new" })
  save("cs_projects", list)
}
export function getProjects()       { return load<ProjectSubmission>("cs_projects") }
export function updateProjectStatus(id: string, status: "new" | "reviewed") {
  save("cs_projects", getProjects().map((p) => p.id === id ? { ...p, status } : p))
}
export function deleteProject(id: string) {
  save("cs_projects", getProjects().filter((p) => p.id !== id))
}

// ── Contact Messages ───────────────────────────────────────────────────────
export function saveContact(data: Omit<ContactMessage, "id" | "submittedAt" | "status">) {
  const list = load<ContactMessage>("cs_contacts")
  list.unshift({ ...data, id: uid(), submittedAt: new Date().toISOString(), status: "new" })
  save("cs_contacts", list)
}
export function getContacts()       { return load<ContactMessage>("cs_contacts") }
export function updateContactStatus(id: string, status: "new" | "reviewed") {
  save("cs_contacts", getContacts().map((c) => c.id === id ? { ...c, status } : c))
}
export function deleteContact(id: string) {
  save("cs_contacts", getContacts().filter((c) => c.id !== id))
}
