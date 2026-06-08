/**
 * Champspace — Google Apps Script
 *
 * HOW TO DEPLOY:
 * 1. Go to https://sheets.google.com and create a new spreadsheet.
 * 2. Name it "Champspace Form Submissions".
 * 3. Open Extensions → Apps Script.
 * 4. Delete the default code and paste ALL of this file.
 * 5. Click Save (Ctrl+S).
 * 6. Enable the Drive Advanced Service:
 *    - Click the "+" next to "Services" in the left sidebar.
 *    - Find "Google Drive API", select it, and click Add.
 *    (This is required for DOC/DOCX → PDF conversion.)
 * 7. Click Deploy → New deployment (or "Manage deployments" → edit existing → new version).
 * 8. Type: Web app
 * 9. Execute as: Me
 * 10. Who has access: Anyone
 * 11. Click Deploy → Authorize → Allow.
 *     IMPORTANT: When prompted, grant ALL requested permissions including Google Drive access.
 * 12. Copy the Web App URL and paste it into your .env.local:
 *        NEXT_PUBLIC_SHEETS_URL=https://script.google.com/macros/s/YOUR_ID/exec
 *
 * NOTE: Every time you edit this script you must create a NEW deployment version
 * (Deploy → Manage deployments → edit → new version) for changes to take effect.
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
    "Experience", "Availability", "Bio", "Project Description", "Resume Link",
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

// ─── Mime type helper ─────────────────────────────────────────────────────────
function getMimeType(filename) {
  if (!filename) return "application/octet-stream"
  if (filename.match(/\.pdf$/i))  return "application/pdf"
  if (filename.match(/\.docx$/i)) return "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  if (filename.match(/\.doc$/i))  return "application/msword"
  return "application/octet-stream"
}

// ─── Resume → PDF saver ───────────────────────────────────────────────────────
// Saves the resume to the given Drive folder always as a PDF file.
// If the uploaded file is already a PDF it is stored directly.
// If it is a DOC/DOCX it is imported as a Google Doc then exported as PDF,
// and the intermediate Google Doc is deleted.
function saveResumeAsPdf(resumeBase64, resumeFileName, folder) {
  var decoded  = Utilities.base64Decode(resumeBase64)
  var mimeType = getMimeType(resumeFileName)
  var baseName = resumeFileName.replace(/\.(pdf|docx?|doc)$/i, "")

  if (mimeType === "application/pdf") {
    var blob = Utilities.newBlob(decoded, "application/pdf", resumeFileName)
    var file = folder.createFile(blob)
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW)
    return file.getUrl()
  }

  // DOC / DOCX: import as Google Doc so Drive converts it, then export as PDF.
  // Requires the Drive Advanced Service (Drive API) to be enabled in the project.
  var srcBlob  = Utilities.newBlob(decoded, mimeType, resumeFileName)
  var imported = Drive.Files.insert(
    { title: resumeFileName, mimeType: "application/vnd.google-apps.document", parents: [{ id: folder.getId() }] },
    srcBlob
  )
  var pdfBlob = DriveApp.getFileById(imported.id).getAs(MimeType.PDF)
  pdfBlob.setName(baseName + ".pdf")
  var pdfFile = folder.createFile(pdfBlob)
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW)
  DriveApp.getFileById(imported.id).setTrashed(true)
  return pdfFile.getUrl()
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
      data.resumeLink  || "",
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

    // Save resume to Google Drive as PDF and store the link
    if (formType === "application" && data.resumeBase64 && data.resumeFileName) {
      try {
        var folders = DriveApp.getFoldersByName("Champspace Resumes")
        var folder  = folders.hasNext() ? folders.next() : DriveApp.createFolder("Champspace Resumes")
        data.resumeLink = saveResumeAsPdf(data.resumeBase64, data.resumeFileName, folder)
      } catch (fileErr) {
        data.resumeLink = "Upload failed: " + fileErr.toString()
      }
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
