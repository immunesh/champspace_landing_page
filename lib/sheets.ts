// Submit form data to Google Sheets via a deployed Apps Script web app.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwXVN0X7OevRjzJMVeV4trZ1InPUsVMUzNU7Sq9oOe_1NEpoHE1kzVWW0T0bKR6940/exec"

export type SheetForm = "application" | "project" | "contact"

export async function submitToSheets(formType: SheetForm, data: Record<string, string>) {
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
