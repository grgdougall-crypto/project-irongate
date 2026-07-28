# Project IronGate — Final Polish Build

WarMachine Logistics & Distribution Center
Employee Cybersecurity Orientation Portal

## Open the project

1. Open this folder in VS Code.
2. Open `index.html`.
3. Use Live Server, or double-click `index.html` in File Explorer.

## Files

- `index.html` — application structure
- `styles.css` — visual design and responsive layout
- `cases.js` — all five investigation lessons
- `app.js` — navigation, answers, progression, saved progress, and completion
- `assets/images` — future logos and scenario images
- `assets/videos` — future Sora videos

## Reset test progress

Open the browser developer console and run:

resetIronGateProgress()

You may also use the Reset Training Progress button on the final screen.

## Add videos later

Place generated MP4 files in `assets/videos`.
The current version uses polished surveillance-style placeholders so the application works before videos are added.


## Version 2.1 updates

- Integrated the original roadway-W WarMachine identity
- Official company name: WarMachine Logistics & Distribution
- Official tagline: Moving Freight. Protecting Data.
- Renamed the portal to Security Operations Academy
- Removed A.R.M.O.R. branding in favor of Threat Analysis language
- Increased panel contrast while preserving the dark enterprise theme
- Upgraded the completion screen and printable Certificate of Operational Readiness


## Layout correction

- Corrected an extra closing HTML tag that caused the Threat Profile sidebar
  and investigation content to stack incorrectly.
- Removed the word “Center” from the footer company name.


## Version 2.2 updates

- Reduced the website header height
- Reduced the header logo by approximately 15%
- Removed the tagline from the website header
- Preserved the full Cybersecurity Investigation Queue title
- Reduced the completion-screen logo so the title is the focal point
- Reworked print sizing and spacing so the certificate fits on one landscape page


## Version 2.3 updates

- Restored the gold hover state for Begin Investigation and Review Completed Case
- Corrected the certificate logo by using the complete original logo image
- Removed certificate logo cropping
- Enlarged and rebalanced the printable certificate
- Forced the certificate to fill one landscape page without spilling to a second page


## Version 3.0 updates

- Added a dedicated print-only Certificate of Operational Readiness
- Certificate uses exact US Letter landscape dimensions
- On-screen website elements are removed from the print document
- Certificate is designed to remain on one printed sheet
- Rebuilt the certificate logo treatment using the uncropped WarMachine mark
- Added automatic completion date
- Preserved the gold Begin Investigation and Review Case hover effects


## Version 3.1 updates

- Added an employee-name field to the landing page
- Saves the learner name in browser storage
- Displays a personalized welcome message on the dashboard
- Places the learner name on the completion screen
- Prints the learner name as the certificate recipient
- Retains employee ID WM-27481 as secondary certificate information
- Added a visible Reset Training button to the Investigation Queue
- Reset now clears progress and learner name
- Pressing Enter in the name field starts the orientation


## Final polish updates

- Removed unused A.R.M.O.R. styling left from earlier versions
- Preserved the approved Threat Analysis wording
- Preserved learner name, dashboard reset, certificate personalization, and one-page print certificate
- Standardized button transitions and gold investigation-button hover
- Added clear keyboard-focus states
- Added reduced-motion support
- No new features were added; this build is ready for video integration


## Version 4.0 — Final Presentation Build

- Integrated all five finished incident-recreation videos
- Replaced the surveillance placeholder with a responsive HTML5 video player
- Added dynamic video loading for each investigation
- Videos now wait for the learner to click Play
- Pauses video when leaving an investigation
- Renamed the video section to Operational Incident Recreation
- Preserved learner identity, progress tracking, certificate printing, and final-polish styling

### Included videos

- WM-001-Phishing.mp4
- WM-002-Social-Engineering.mp4
- WM-003-Weak-Passwords.mp4
- WM-004-Unknown-USB-Devices.mp4
- WM-005-Ransomware.mp4


## Version 4.1 — Guided Playback and Publishing Build

- Removed video autoplay so learners can read the briefing first
- Videos begin only when the learner clicks Play
- Added a clear playback instruction above each video
- Added `preload="metadata"` for efficient loading
- Disabled the browser download control where supported
- Renamed video headings to Operational Incident: [Threat]
- Replaced Physical Simulation wording with Operational Incident Recreation
- Replaced Physical Analogy labels with Warehouse Analogy
- Updated the footer to Interactive Employee Cybersecurity Training
- Prepared the project for GitHub and GitHub Pages publishing
