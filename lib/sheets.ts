// Submit form data to Google Sheets via a deployed Apps Script web app.
// Set NEXT_PUBLIC_SHEETS_URL in .env.local to your Apps Script deployment URL.

const SCRIPT_URL = process.env.NEXT_PUBLIC_SHEETS_URL ?? ""

export type SheetForm = "application" | "project" | "contact"

export async function submitToSheets(formType: SheetForm, data: Record<string, string>) {
  if (!SCRIPT_URL) {
    console.warn("NEXT_PUBLIC_SHEETS_URL not set — skipping Google Sheets submission.")
    return
  }
  try {
    // mode: no-cors avoids CORS preflight errors with Apps Script.
    // We cannot read the response body in no-cors mode, but the data is received.
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ formType, ...data }),
    })
  } catch (err) {
    // Fail silently — localStorage copy is still saved
    console.error("Google Sheets submission error:", err)
  }
}
