// Submit form data to Google Sheets via a deployed Apps Script web app.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwXVN0X7OevRjzJMVeV4trZ1InPUsVMUzNU7Sq9oOe_1NEpoHE1kzVWW0T0bKR6940/exec"

export type SheetForm = "application" | "project" | "contact"

export async function submitToSheets(formType: SheetForm, data: Record<string, string>) {
  const body = JSON.stringify({ formType, ...data })
  try {
    await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body })
  } catch {
    // sendBeacon has a ~64 KB limit so it cannot carry resume data.
    // Only fall back to it for small, text-only payloads.
    if (body.length < 60_000 && typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon(SCRIPT_URL, new Blob([body], { type: "text/plain" }))
    }
  }
}
