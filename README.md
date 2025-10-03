# Weather App (Electron + Express + EJS)

Small desktop weather app using Electron as the shell and an Express + EJS server as the renderer. Fetches data from OpenWeatherMap.

## Features
- Enter a city and get current weather (temperature, feels like, min/max, description).
- Uses OpenWeatherMap API.
- Electron desktop wrapper with an Express backend rendering EJS templates.

## Prerequisites
- Node.js (v16+ recommended)
- npm
- Optional: Windows build tools when packaging for Windows

## Install
1. Clone the repo.
2. From the project root run:
   npm install

## Run (development)
1. Ensure the OpenWeatherMap API key is available. The project currently uses a hardcoded key in `server.js`. For a safer approach, set an environment variable (recommended):
   - Windows (PowerShell):
     $env:OWM_API_KEY = "your_api_key_here"
   - macOS / Linux:
     export OWM_API_KEY="your_api_key_here"
   Then update `server.js` to read `process.env.OWM_API_KEY`.
2. Start the app:
   npm start
   This launches Electron, which opens `http://localhost:3000/` served by the local Express server.

## Packaging
The project includes a script using `electron-packager`. From project root:
npm run package
This creates a `release/` folder with a packaged app for the configured platform/arch.

## File locations you may need to edit
- `main.js` — Electron main process (window size, icon, load URL).
- `server.js` — Express server and API calls (change API key handling here).
- `views/index.ejs` — UI templates.
- `public/style.css` — styles.
- `public/search.png` — search icon (place it in `public/`).
- `icon.ico` — application icon (place at project root).

## Notes
- The project can be converted to use ES modules; if you did, ensure `package.json` contains `"type": "module"`.
- If you move away from server-side rendering, convert EJS pages to static HTML/JS and call the OpenWeatherMap API directly from the client (watch CORS and API key exposure).

## Troubleshooting
- Blank or missing images: ensure `public/search.png` exists and is referenced as `/search.png`.
- Large layout/scrollbars: CSS max-width settings control the layout; adjust `public/style.css`.
- API errors: confirm API key and network access; server logs are printed to the console where you ran `npm start`.

## License
ISC
