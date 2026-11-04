# The Reef That Balanced Its Books (four-part version)

HH4092 Week 11 solo presentation, as a Shorthand-style scrolling story (`index.html`): full-bleed chapter openers, a sideways-scrolling 3D fly-in map, the 3D reef cross-section and cut-away coral, historian profile bands, an archive-figure scrollmation for Martin, pull quotes and a primary-source reader.

**This is the four-part version** (about 50 minutes, 17 sections), a copy of `atomic-reef new-flow` reorganized as: the Odums → their 1955 paper (told as they told it) → how three historians read it (Golley, Taylor, then Martin at length) → our synthesis.

| Part | Sections | Min |
|---|---|---|
| Question | Title, question, three-picture hook, thesis | 2 |
| 1 · The Odums | Lineage (Tansley → Lindeman → Hutchinson → Tom 1950; father; two brothers) · AEC patron (memo → letter → p. 291) · fly-in map | 8 |
| 2 · The 1955 paper | Transect · coral + fallout · the reef’s books (pyramid, Table 17) · impact (award, textbook, Big Ecology) | 10 |
| 3 · Historians | Internalist ↔ externalist frame (and Martin’s footnote 3) · Golley · Taylor · Martin (hydroids, a–e) · *Where Martin overstates* (optional) | 13.5 |
| 4 · Synthesis | Three perspectives on one paper · class activity “One report, three historians” · my verdict + course links · sources | 16.5 |

**Course concepts.** Explicit “Course link” tags: internalist/externalist (Part 3 frame), ecology ↔ sociology (father; Taylor), patrons and institutions (AEC; impact), access to the field (map; Martin d). Implicit only: Comte (Taylor’s “science as a new order”), Huxley/Bateson optimism vs anxiety (Martin e), *oikos* (“the reef’s books”).

**Optional section.** `"showMartinLimits": false` in `src/content/config.json` drops “Where Martin overstates”; `"hide": true` on one item in `slides.json` (`martin-limits` → `items`) drops one card. Rebuild after editing.

The class activity is a QR code and link in the deck to a shared Google Doc (`activityUrl` in `config.json`), where groups highlight the AEC’s 1955 report as their historian. The Kahoot warm-up file is `activity-kit/kahoot-warmup.xlsx`.

## Run it (another laptop: needs Node.js 18+ only)

1. Double-click `Launch.command` (macOS), or in a terminal in this folder run:
   `node serve.mjs`
2. Open http://127.0.0.1:4173/ and press **F** for fullscreen.

Everything is bundled locally: no internet is needed during the talk. Opening `dist/index.html` directly as a file (`file://`) is **not** supported; use the server.

The class activity runs from a Google Doc, so students need no access to this laptop. To share the story itself over the room’s Wi-Fi: `HOST=0.0.0.0 node serve.mjs` prints a network address.

## Keys

Scroll freely, or → / PageDown next stop · ← / PageUp back (clickers work) · **F** fullscreen · **T** activity timer · **R** source reader · **S** 1957 figure · **B** blank screen · Esc close. In the energy section → / ← step through the cards first. `#/5/3` deep-links to map stop 4.

## Before class (user-owned)

Edit `src/content/config.json`, then `npm run build`:
- `presenters`: your name (one entry); `presentationDate` and `dateApproved` (the date is not confirmed as approved).
- `activityUrl` (the Google Doc) and `activityShortUrl` (optional link text): the QR code appears only when set.
- `responseBoardUrl`: the Padlet or Google Doc for answers.

## Files

- `dist/` built site (what `serve.mjs` serves): the story, `sources.html` (source register and credits; every footnote links here), and `documents/` with the 1957 Odum and Odum PDF.
- `src/story/` the story (`Story.tsx` shell and navigation; `sections.tsx` content sections; `blocks.tsx` Shorthand-style building blocks; `fallbacks.tsx` 2D versions of the 3D views; `story.css`). `src/three/` the 3D scenes. `src/sources/` the bibliography page.
- `src/content/slides.json` all the talk's text, notes and footnotes; `sources.json` the source register; `config.json` settings.
- `public/documents/` the PDFs above (copied into `dist` on build). `public/assets/` map imagery, 3D models, captured stills and source scans.


## Develop

`npm install` · `npm run dev` · `npm run build`
