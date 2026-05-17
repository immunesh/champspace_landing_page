// Submit form data to Google Sheets via a deployed Apps Script web app.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwXVN0X7OevRjzJMVeV4trZ1InPUsVMUzNU7Sq9oOe_1NEpoHE1kzVWW0T0bKR6940/exec"

export type SheetForm = "application" | "project" | "contact"

export function submitToSheets(formType: SheetForm, data: Record<string, string>) {
  const body = JSON.stringify({ formType, ...data })
  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    navigator.sendBeacon(SCRIPT_URL, new Blob([body], { type: "text/plain" }))
  } else {
    fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body }).catch(() => {})
  }
}
