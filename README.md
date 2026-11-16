# To-Do List App

A lightweight, responsive task manager built with vanilla HTML, CSS, and JavaScript featuring persistent browser storage and dynamic DOM manipulation.

## Featuress
- **Task Management:** Create, complete, delete, and bulk-clear tasks with real-time task counter updates.
- **Persistent Storage:** Saves task states (`text` and `completed` status) as structured JSON in `localStorage`.
- **Keyboard & Validation Support:** Supports `Enter` key submission, whitespace trimming, and a 100-character input limit.
- **XSS-Safe Rendering:** Uses `document.createElement` and `textContent` for safe DOM updates.

## Tech Stack
- HTML5, CSS3 (Flexbox), Vanilla JavaScript (ES6+), Web Storage API (`localStorage`)
