<!-- Copilot / AI agent instructions for the servicosja repo -->

Purpose
- Help an AI coding agent get productive quickly with the frontend app in this repo.

Quick Start (local dev)
- Location: `frontend/` — the app is a Vite + React project. See `frontend/package.json` for scripts.
- Windows PowerShell (copy/paste):
  ```powershell
  cd frontend
  npm install
  npm run dev
  ```
- Helpful scripts: `npm run dev` (dev server), `npm run build` (production build), `npm run preview` (preview build), `npm run lint` (eslint).

Project structure highlights
- `frontend/src/` — application source. Entry: `src/main.jsx` (router setup) and `src/App.jsx` (layout with `Navbar`, `Footer`, `Chatbot`).
- `frontend/src/pages/` — route pages (each page is a folder with a `.jsx` and a `.module.css`). Example: `src/pages/home/home.jsx`.
- `frontend/src/components/` — reusable or feature-scoped components grouped by folder. Example: `src/components/bannerHome/bannerHome.jsx` + `bannerHome.module.css`.
- `frontend/public/img/` — static images served as-is. Use these for `<img src="/img/..." />` in markup.
- `frontend/src/assets/fonts/style.css` — custom font declarations used across the app.

Code / style conventions (observable)
- CSS Modules: components and pages use `*.module.css` files alongside their `.jsx` files. Keep this pairing when adding styles.
- Component filenames use lowercase folder names and `.jsx` inside (e.g., `navbar/navbar.jsx`). Follow existing casing to avoid import errors.
- Routing: client-side routing via `react-router` is defined in `src/main.jsx`. Routes are mounted under `App` (which renders `Outlet`). If you add a route, add the page import in `main.jsx` and a matching child route.
- UI libraries: project uses MUI (`@mui/material`), Emotion (`@emotion/*`), and `react-icons`. Prefer these for new UI elements unless a strong reason not to.

Project-specific gotchas (do not assume defaults)
- Typos and naming: some pages/components have non-standard names (for example `providerDatails` is used across imports and routes). Do not rename files or routes without updating all imports and the router — prefer keeping existing names for small changes.
- No backend in this repo: this workspace contains only the frontend. If you see API calls, confirm the external service or separate backend repo before changing endpoints.
- ESLint: there is an `eslint.config.js` at `frontend/`. Run `npm run lint` to check style; follow the established lint rules rather than introducing new style patterns.

Developer workflow notes
- Branching: follow the project's README guidance — do not work directly on `main`. Use feature branch names such as `feature/frontend/<description>` or `feature/backend/<description>` depending on the task.
- Commits / PRs: push feature branches and open PRs for merges into `main`. The repo README includes explicit PR workflow steps — mirror those messages in commit/PR descriptions.

Where to look for intent / important examples
- Entry + routing: `frontend/src/main.jsx` and `frontend/src/App.jsx`.
- Layout and site chrome: `frontend/src/components/navbar/`, `footer/`, `chatbot/`.
- Page/component pattern: inspect any folder under `frontend/src/pages/` and `frontend/src/components/` for the canonical folder->jsx->module.css pattern.

When changing files
- Preserve existing import paths and casing unless performing a repo-wide rename (which requires updating router and every import).
- Run `npm run lint` and `npm run dev` locally to confirm no runtime/import errors after edits.

If you need more context
- Ask for backend API docs or the backend repo link if you must modify API integration.
- Tell me which page/component you plan to change; I can enumerate all files to update and create a safe patch.

Feedback
- If any instruction here is unclear or incomplete, tell me which area (dev commands, routing, naming conventions) and I will update this file.
