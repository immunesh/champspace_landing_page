import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy — Champspace",
  description: "How Champspace collects, uses, and protects your personal information.",
}

const SECTIONS = [
  {
    title: "1. Who We Are",
    body: `Champspace ("we", "us", "our") is an AI software and automation development company. We operate at champspace.in and can be reached at champspace6@gmail.com. This Privacy Policy applies to all users of our website, including engineers who apply to our programs and clients who submit project inquiries.`,
  },
  {
    title: "2. Information We Collect",
    subsections: [
      {
        heading: "For Engineers (Applicants)",
        points: [
          "Full name, email address, phone number, and location",
          "GitHub, LinkedIn, and portfolio URLs",
          "College / university details",
          "Skills, experience level, availability, and bio",
          "Project descriptions and uploaded resume files",
          "Internship or full-time preference and department selection",
        ],
      },
      {
        heading: "For Clients (Project Submissions)",
        points: [
          "Full name, work email address, and phone number",
          "Company name, team size, industry, and website",
          "Project name, description, features, budget range, and timeline",
          "Technology preferences and reference materials",
          "Uploaded project brief or attachment files",
        ],
      },
      {
        heading: "Automatically Collected",
        points: [
          "Browser type, device type, and operating system",
          "IP address and approximate geographic location",
          "Pages visited, time spent, and referral source",
          "Cookies and similar tracking technologies (see Section 7)",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    points: [
      "To review engineer applications and communicate hiring decisions",
      "To evaluate client project submissions and follow up with proposals",
      "To send transactional emails related to your application or inquiry",
      "To improve our website, forms, and user experience",
      "To comply with legal obligations and resolve disputes",
      "We do not use your data for automated profiling or third-party advertising.",
    ],
  },
  {
    title: "4. Legal Basis for Processing",
    body: `We process personal data under the following legal bases: (a) Contract — processing necessary to respond to your application or project inquiry; (b) Legitimate Interests — improving our services and preventing fraud; (c) Consent — where you have explicitly agreed (e.g., marketing communications). You may withdraw consent at any time by contacting us.`,
  },
  {
    title: "5. Data Sharing",
    body: `We do not sell your personal data. We may share information with: (a) Trusted service providers who assist in operating our website (hosting, email delivery) under strict confidentiality agreements; (b) Legal or regulatory authorities if required by law. All third-party processors are bound by data protection obligations at least as protective as this policy.`,
  },
  {
    title: "6. Data Retention",
    points: [
      "Engineer applications: retained for 12 months after submission, or until you request deletion",
      "Client project inquiries: retained for 24 months to support ongoing engagements",
      "Contact form submissions: retained for 6 months",
      "Website analytics data: retained for 12 months in aggregated form",
    ],
  },
  {
    title: "7. Cookies",
    body: `We use essential cookies required for website functionality. We do not use third-party advertising cookies. You can disable cookies in your browser settings, though some features may be affected. By continuing to use our site you consent to our use of essential cookies.`,
  },
  {
    title: "8. Your Rights",
    points: [
      "Access — request a copy of the personal data we hold about you",
      "Rectification — ask us to correct inaccurate or incomplete data",
      "Erasure — request deletion of your data where no legal obligation to retain exists",
      "Restriction — ask us to limit how we use your data",
      "Portability — receive your data in a structured, machine-readable format",
      "Objection — object to processing based on legitimate interests",
      "To exercise any right, email us at champspace6@gmail.com. We will respond within 30 days.",
    ],
  },
  {
    title: "9. Data Security",
    body: `We implement industry-standard security measures including HTTPS encryption, access controls, and regular security reviews. No method of transmission over the internet is 100% secure; we cannot guarantee absolute security but commit to prompt notification in the event of a breach.`,
  },
  {
    title: "10. Children's Privacy",
    body: `Our services are not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected such data, please contact us immediately and we will delete it.`,
  },
  {
    title: "11. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Material changes will be indicated by an updated "Last Updated" date at the top of this page. Continued use of our website after changes constitutes acceptance of the revised policy.`,
  },
  {
    title: "12. Contact",
    body: `Questions or concerns about this policy? Contact us at: champspace6@gmail.com | WhatsApp: +91 90273 96563 | champspace.in`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#05050f" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-indigo-500/20">
            <span className="text-sm text-indigo-200 font-medium">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-[#8888aa] text-lg">
            This policy applies to all users of Champspace — engineers, clients, and visitors.
          </p>
          <p className="text-[#555577] text-sm mt-3">Last updated: May 2026</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title} className="glass-strong border border-indigo-500/15 rounded-2xl p-6 sm:p-8">
              <h2 className="text-white font-bold text-xl mb-4">{section.title}</h2>
              {"body" in section && (
                <p className="text-[#8888aa] text-sm leading-relaxed">{section.body}</p>
              )}
              {"points" in section && (
                <ul className="space-y-2">
                  {section.points!.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#8888aa]">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {"subsections" in section && (
                <div className="space-y-6">
                  {section.subsections!.map((sub) => (
                    <div key={sub.heading}>
                      <h3 className="text-indigo-300 font-semibold text-sm mb-3">{sub.heading}</h3>
                      <ul className="space-y-2">
                        {sub.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#8888aa]">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60 mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
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
