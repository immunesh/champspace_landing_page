/**
 * Champspace — Google Apps Script
 *
 * HOW TO DEPLOY:
 * 1. Go to https://sheets.google.com and create a new spreadsheet.
 * 2. Name it "Champspace Form Submissions".
 * 3. Open Extensions → Apps Script.
 * 4. Delete the default code and paste ALL of this file.
 * 5. Click Save (Ctrl+S).
 * 6. Click Deploy → New deployment.
 * 7. Type: Web app
 * 8. Execute as: Me
 * 9. Who has access: Anyone
 * 10. Click Deploy → Authorize → Allow.
 * 11. Copy the Web App URL and paste it into your .env.local:
 *       NEXT_PUBLIC_SHEETS_URL=https://script.google.com/macros/s/YOUR_ID/exec
 */

// ─── Sheet names ────────────────────────────────────────────────────────────
var SHEETS = {
  application: "Engineer Applications",
  project:     "Project Submissions",
  contact:     "Contact Messages",
}

// ─── Column headers per form ─────────────────────────────────────────────────
var HEADERS = {
  application: [
    "Submitted At", "Name", "Email", "Phone", "Location",
    "Position Type", "Departments", "Other Department",
    "GitHub", "LinkedIn", "Portfolio", "College", "Skills",
    "Experience", "Availability", "Bio", "Project Description",
  ],
  project: [
    "Submitted At", "Name", "Email", "Phone", "Company",
    "Team Size", "Industry", "Website",
    "Project Type", "Project Name", "Description", "Features",
    "Budget", "Timeline",
  ],
  contact: [
    "Submitted At", "Name", "Email", "Subject", "Message",
  ],
}

// ─── Row builders ─────────────────────────────────────────────────────────────
function buildRow(formType, data, now) {
  if (formType === "application") {
    return [
      now,
      data.name        || "",
      data.email       || "",
      data.phone       || "",
      data.location    || "",
      data.positionType === "intern" ? "Internship" : "Full-Time",
      (data.departments || "").replace(/,/g, ", "),
      data.otherDept   || "",
      data.github      || "",
      data.linkedin    || "",
      data.portfolio   || "",
      data.college     || "",
      data.skills      || "",
      data.experience  || "",
      data.availability|| "",
      data.bio         || "",
      data.projectDesc || "",
    ]
  }

  if (formType === "project") {
    return [
      now,
      data.name        || "",
      data.email       || "",
      data.phone       || "",
      data.company     || "",
      data.teamSize    || "",
      data.industry    || "",
      data.website     || "",
      data.projectType || "",
      data.projectName || "",
      data.description || "",
      data.features    || "",
      data.budget      || "",
      data.timeline    || "",
    ]
  }

  if (formType === "contact") {
    return [
      now,
      data.name    || "",
      data.email   || "",
      data.subject || "",
      data.message || "",
    ]
  }

  return []
}

// ─── Main handler ─────────────────────────────────────────────────────────────
function doPost(e) {
  try {
    var raw  = e.postData ? e.postData.contents : "{}"
    var data = JSON.parse(raw)
    var formType = data.formType

    if (!SHEETS[formType]) {
      return respond({ success: false, error: "Unknown formType: " + formType })
    }

    var ss        = SpreadsheetApp.getActiveSpreadsheet()
    var sheetName = SHEETS[formType]
    var sheet     = ss.getSheetByName(sheetName)

    // Create sheet and header row on first use
    if (!sheet) {
      sheet = ss.insertSheet(sheetName)
      var headerRow = sheet.getRange(1, 1, 1, HEADERS[formType].length)
      headerRow.setValues([HEADERS[formType]])
      headerRow.setFontWeight("bold")
      headerRow.setBackground("#1a1a2e")
      headerRow.setFontColor("#a5b4fc")
      sheet.setFrozenRows(1)
    }

    var now = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss")
    var row = buildRow(formType, data, now)

    if (row.length > 0) {
      sheet.appendRow(row)
      // Auto-resize columns for readability
      sheet.autoResizeColumns(1, row.length)
    }

    return respond({ success: true })
  } catch (err) {
    return respond({ success: false, error: err.toString() })
  }
}

function respond(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}

// ─── Optional: test via GET ───────────────────────────────────────────────────
function doGet() {
  return ContentService
    .createTextOutput("Champspace Apps Script is live ✓")
    .setMimeType(ContentService.MimeType.TEXT)
}
