import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions — Champspace",
  description: "Terms and conditions governing use of Champspace services for engineers and clients.",
}

const ENGINEER_TERMS = [
  {
    title: "E1. Eligibility",
    body: "Applications are open to individuals aged 18 and above. Both industry professionals and college graduates may apply. Champspace reserves the right to accept or decline any application at its sole discretion without providing a reason.",
  },
  {
    title: "E2. Program Commitment",
    body: "Engineers accepted into the program agree to the stated time commitment (approximately 20 hrs/week for part-time tracks, 40 hrs/week for full-time tracks). Consistent non-participation without prior notice may result in removal from the cohort.",
  },
  {
    title: "E3. Work Product & Intellectual Property",
    body: "All code, documentation, designs, models, and other work product created during the program using Champspace resources, client briefs, or company data remain the intellectual property of Champspace and/or the relevant client. Engineers retain no ownership over work created in the scope of the program unless a separate written agreement states otherwise.",
  },
  {
    title: "E4. Confidentiality",
    body: "Engineers will have access to client information, project specifications, and internal processes. All such information is strictly confidential. You may not share, reproduce, or disclose any confidential information during or after the program without prior written consent from Champspace.",
  },
  {
    title: "E5. Code of Conduct",
    points: [
      "Treat all team members, clients, and mentors with respect",
      "Do not plagiarise code or submit AI-generated work without disclosure",
      "Do not access systems, data, or credentials beyond what is assigned to you",
      "Report security vulnerabilities immediately to your program manager",
      "Violation of the code of conduct may result in immediate removal from the program",
    ],
  },
  {
    title: "E6. Stipend & Compensation",
    body: "Stipend eligibility, amount, and payment terms (if any) will be communicated in your acceptance letter. Champspace makes no guarantee of employment, placement, or compensation beyond what is explicitly stated in writing. Any placement support is provided on a best-efforts basis.",
  },
  {
    title: "E7. Certificate & Portfolio",
    body: "Upon successful completion of the program, engineers will receive a digital certificate of completion. Permission to include completed project work in a personal portfolio is granted, provided no confidential client data, proprietary code, or internal architecture is disclosed.",
  },
  {
    title: "E8. Termination",
    body: "Either party may terminate participation with 7 days written notice. Champspace may terminate immediately in the event of a material breach, including but not limited to: confidentiality violations, code of conduct violations, or misrepresentation on the application.",
  },
]

const CLIENT_TERMS = [
  {
    title: "C1. Project Submissions",
    body: "Submitting a project inquiry via our website does not constitute a binding contract. A formal engagement begins only upon execution of a separate Statement of Work (SOW) or Service Agreement signed by both parties.",
  },
  {
    title: "C2. Confidentiality",
    body: "All project details, business information, and materials submitted through our forms or shared in discovery meetings will be treated as confidential. Champspace will not share your project information with third parties outside of the delivery team without your written consent.",
  },
  {
    title: "C3. Intellectual Property",
    body: "Upon full payment as per the agreed SOW, all custom code, models, and deliverables created exclusively for your project will be assigned to you. Champspace retains the right to use general techniques, methodologies, and non-proprietary code patterns in future work. Any third-party libraries or models used remain subject to their respective licences.",
  },
  {
    title: "C4. Client Responsibilities",
    points: [
      "Provide accurate and complete project requirements in a timely manner",
      "Designate a point of contact for feedback and approvals",
      "Provide access to necessary systems, APIs, or data as agreed",
      "Review and approve deliverables within the timeframes specified in the SOW",
      "Delays caused by late client feedback may affect delivery timelines",
    ],
  },
  {
    title: "C5. Payment",
    body: "Payment terms will be defined in the SOW. Late payments beyond 14 days of due date may attract a 2% monthly late fee. Champspace reserves the right to pause or suspend delivery in the event of non-payment.",
  },
  {
    title: "C6. Acceptance & Revisions",
    body: "Deliverables will be considered accepted if no written objections are raised within 7 business days of delivery. Revision rounds included in scope will be defined in the SOW. Out-of-scope changes will be quoted separately.",
  },
  {
    title: "C7. Limitation of Liability",
    body: "Champspace's total liability for any claim arising from a project engagement is limited to the total fees paid for that specific project. We are not liable for indirect, incidental, or consequential damages including loss of profits, data, or business opportunity.",
  },
  {
    title: "C8. Warranties",
    body: "We warrant that deliverables will materially conform to agreed specifications at the time of delivery. We do not warrant uninterrupted operation of AI systems, as model behaviour may vary with input data. Post-delivery support terms will be defined in the SOW.",
  },
  {
    title: "C9. Termination",
    body: "Either party may terminate an engagement with 14 days written notice. In the event of termination, the client will be invoiced for work completed to date at a pro-rata rate. Work already delivered becomes the property of the client upon settlement of outstanding invoices.",
  },
]

const GENERAL_TERMS = [
  {
    title: "G1. Governing Law",
    body: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Uttar Pradesh, India.",
  },
  {
    title: "G2. Changes to Terms",
    body: "Champspace may update these Terms at any time. Continued use of our services after changes are posted constitutes acceptance. Material changes will be communicated via email to active users.",
  },
  {
    title: "G3. Entire Agreement",
    body: "These Terms, together with any executed SOW or Service Agreement, constitute the entire agreement between the parties and supersede any prior understandings, representations, or agreements.",
  },
  {
    title: "G4. Contact",
    body: "For any questions regarding these Terms, contact us at: champspace6@gmail.com | WhatsApp: +91 90273 96563",
  },
]

function TermSection({ section }: { section: { title: string; body?: string; points?: string[] } }) {
  return (
    <div className="glass-strong border border-indigo-500/15 rounded-2xl p-6 sm:p-8">
      <h3 className="text-white font-bold text-lg mb-3">{section.title}</h3>
      {section.body && <p className="text-[#8888aa] text-sm leading-relaxed">{section.body}</p>}
      {section.points && (
        <ul className="space-y-2">
          {section.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#8888aa]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#05050f" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-indigo-500/20">
            <span className="text-sm text-indigo-200 font-medium">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-[#8888aa] text-lg">
            Please read these terms carefully before applying to a program or submitting a project.
          </p>
          <p className="text-[#555577] text-sm mt-3">Last updated: May 2026</p>
        </div>

        {/* Quick nav */}
        <div className="glass border border-indigo-500/15 rounded-2xl p-5 mb-10 flex flex-wrap gap-3">
          <span className="text-[#8888aa] text-sm font-medium mr-2 self-center">Jump to:</span>
          <a href="#engineers" className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 hover:bg-indigo-500/20 transition-colors">For Engineers</a>
          <a href="#clients"   className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 hover:bg-cyan-500/20 transition-colors">For Clients</a>
          <a href="#general"   className="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 hover:bg-purple-500/20 transition-colors">General</a>
        </div>

        {/* Engineer Terms */}
        <div id="engineers" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <span className="text-indigo-400 text-xs font-bold">E</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Terms for Engineers</h2>
          </div>
          <p className="text-[#8888aa] text-sm mb-6">
            These terms apply to all individuals who apply to or participate in any Champspace engineering program, internship, or full-time placement.
          </p>
          <div className="space-y-4">
            {ENGINEER_TERMS.map((s) => <TermSection key={s.title} section={s} />)}
          </div>
        </div>

        {/* Client Terms */}
        <div id="clients" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <span className="text-cyan-400 text-xs font-bold">C</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Terms for Clients</h2>
          </div>
          <p className="text-[#8888aa] text-sm mb-6">
            These terms apply to all businesses and individuals who submit project inquiries or enter into a service engagement with Champspace.
          </p>
          <div className="space-y-4">
            {CLIENT_TERMS.map((s) => <TermSection key={s.title} section={s} />)}
          </div>
        </div>

        {/* General Terms */}
        <div id="general" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <span className="text-purple-400 text-xs font-bold">G</span>
            </div>
            <h2 className="text-2xl font-bold text-white">General Terms</h2>
          </div>
          <div className="space-y-4">
            {GENERAL_TERMS.map((s) => <TermSection key={s.title} section={s} />)}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Return to Champspace
          </Link>
        </div>
      </div>
    </div>
  )
}
