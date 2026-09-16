/**
 * Product cards on the homepage.
 * To add a product later: append an object to PRODUCTS and rebuild.
 * status: "live" | "open-testing" | "wip" | "github"
 *
 * Copy is pulled from public READMEs / product sites where possible.
 * Private repos are used only when this machine can read them; do not invent metrics.
 */

export type ProductStatus = "live" | "open-testing" | "wip" | "github";

export type ProductLink = {
  label: string;
  href: string;
};

export type Product = {
  slug: string;
  name: string;
  kind: string;
  blurb: string;
  /** Languages, frameworks, and APIs actually used. */
  stack: string[];
  /** What was built and which problems it was aimed at. No invented metrics. */
  built: string;
  status: ProductStatus;
  links: ProductLink[];
};

export const STATUS_LABEL: Record<ProductStatus, string> = {
  live: "Live",
  "open-testing": "Open testing",
  wip: "WIP",
  github: "GitHub",
};

export const PRODUCTS: Product[] = [
  {
    slug: "qa-studio-pro",
    name: "QA Studio Pro",
    kind: "Chrome extension",
    blurb:
      "Local-first record and replay for QA flows. Capture once, run again — on your machine. No account, no server, no AI.",
    stack: [
      "TypeScript",
      "Manifest V3",
      "Chrome DevTools Protocol",
      "Dexie / IndexedDB",
      "esbuild",
      "Tailwind CSS",
      "Vitest",
    ],
    built:
      "I needed to record a real-site flow without writing a Playwright harness first. A content script captures clicks, typing (including contenteditable), uploads, drag-and-drop, and SPA navigations; replay attaches chrome.debugger and fires CDP input, with selector retries and wait-for-settle. Flows group into folders (fail-fast run), swap environments via {BASE_URL}-style variables, and export JSON, YAML, or Playwright TypeScript. Storage is IndexedDB in this browser.",
    status: "live",
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/qa-studio-pro/gbecpdccfeemhcnecgodpljiidfdfiem",
      },
      { label: "Site", href: "https://qa-studio-site.vercel.app/" },
    ],
  },
  {
    slug: "inflow",
    name: "InFlow",
    kind: "Android",
    blurb:
      "A private second brain. Notes, links, photos, voice, and tasks on-device, with optional Google Drive backup. Play listing may 404 until it is public.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Coroutines",
      "Google Drive API",
      "Coil",
      "Media3",
    ],
    built:
      "I wanted a vault that works offline and treats Drive as backup, not a product cloud. The app writes a versioned JSON vault (schema 7, soft delete) to app-private storage; Google sign-in is optional and uses drive.file under InFlow/inflow-db.json plus attachments. Home is a share-target composer (text, links, photo, voice, files). If the device and Drive both changed, it asks which copy to keep. Compose UI is screenshot-tested with Roborazzi.",
    status: "open-testing",
    links: [
      { label: "Site", href: "https://inflow-vault.vercel.app" },
      {
        label: "Play open testing",
        href: "https://play.google.com/apps/testing/com.inflow.vault",
      },
    ],
  },
  {
    slug: "telegram-agent-console",
    name: "Telegram Agent Console",
    kind: "VS Code extension",
    blurb:
      "A side panel for chatting with one Telegram bot — typically the agent on your machine. Read, reply, slash-command typeahead. Own site later; GitHub for now.",
    stack: [
      "TypeScript",
      "VS Code Webview",
      "gramjs / MTProto",
      "esbuild",
      "SecretStorage",
    ],
    built:
      "My agent only speaks Telegram, so I was leaving the editor every time it pinged. The extension logs in as my user over MTProto (not the Bot API), mirrors one bot chat in a side-panel webview, and stores api_id / api_hash / session in OS-encrypted SecretStorage. Slash-command typeahead comes from the bot's registered commands. Scope is cut on purpose: no chat list, no media gallery, no notifications after VS Code closes.",
    status: "live",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/IamFishR/telegram-agent-console",
      },
      {
        label: "Marketplace",
        href: "https://marketplace.visualstudio.com/items?itemName=IamFishR.telegram-agent-console",
      },
    ],
  },
  {
    slug: "mymarkdown",
    name: "mymarkdown",
    kind: "Web app",
    blurb:
      "Fast markdown editor for local browser notes and real files on disk. Folder tree, auto-save, live preview.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Zustand",
      "File System Access API",
      "react-markdown",
    ],
    built:
      "I wanted an editor that can open a real folder, not only notes trapped in the tab. The File System Access API plus idb-keyval keeps the directory handle; edits debounce-save (1s) back to the original .md file. Local notes still live in localStorage for browsers without the folder API. Live GitHub-flavored preview, dark/light, search, and session restore of the last folder.",
    status: "live",
    links: [
      { label: "Site", href: "https://mymarkdown-tawny.vercel.app" },
      { label: "GitHub", href: "https://github.com/IamFishR/mymarkdown" },
    ],
  },
  {
    slug: "mindful-work",
    name: "Mindful Work",
    kind: "Android",
    blurb:
      "A calmer launcher for focused work. List-based app menu, usage insights, and limits — less visual noise, more intention.",
    stack: ["Android"],
    built:
      "Play listing: a list-based home without app icons, usage tracking, and per-app limits so the screen stays quieter. No public source repo turned up for this package (com.app.mindfulwork), so the stack stops at Android. Last Play update: 13 Sep 2023.",
    status: "live",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.app.mindfulwork",
      },
    ],
  },
  {
    slug: "localdevenv",
    name: "localdevenv",
    kind: "Windows",
    blurb:
      "WinUI 3 dashboard for local development: parse projects, run tasks, watch ports and processes, manage env files in one place.",
    stack: ["C#", "WinUI 3", ".NET 8", "Windows App SDK", "SQLite"],
    built:
      "I wanted one Windows window instead of a pile of terminals for local-dev clutter. It parses package.json, Cargo.toml, pyproject.toml, requirements.txt, .csproj, and docker-compose; edits .env files with secret masking; maps ports to PIDs and can kill them; and talks to local Postgres / MySQL / Mongo / Redis. Service interfaces plus DI (project parse, processes, tasks, logs, versions, dependency audit).",
    status: "github",
    links: [
      { label: "GitHub", href: "https://github.com/IamFishR/localdevenv" },
    ],
  },
  {
    slug: "webcrecorder",
    name: "webcrecorder",
    kind: "Web app",
    blurb:
      "Browser recording studio — camera, mic, and screen with picture-in-picture. Recordings stay in a local gallery. Previous Vercel deploy is gone; GitHub is the source.",
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Electron"],
    built:
      "A recording studio in the browser (README: Lumina Capture) using camera, mic, and screen capture with a picture-in-picture overlay and a local gallery to rename, download, or delete takes. The repo also packages the same UI with electron-vite / electron-builder for a Windows desktop build. The old Vercel URL is gone.",
    status: "github",
    links: [
      { label: "GitHub", href: "https://github.com/IamFishR/webcrecorder" },
    ],
  },
  {
    slug: "waterintake",
    name: "waterintake",
    kind: "Android",
    blurb:
      "Kotlin / Jetpack Compose tracker for daily water intake — goals, reminders, charts. Still being built.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Hilt",
      "Room",
      "WorkManager",
      "Coroutines / Flow",
    ],
    built:
      "WIP hydration tracker: log intake, set a daily goal, ml or oz, reminders, dashboard charts, streaks, and export/backup. Clean Architecture (data / domain / presentation), Room for history, Hilt for injection, WorkManager and AlarmManager for reminders.",
    status: "wip",
    links: [
      { label: "GitHub", href: "https://github.com/IamFishR/waterintake" },
    ],
  },
  {
    slug: "mindfulminutes",
    name: "mindfulminutes",
    kind: "Fitbit",
    blurb: "Clock face for Fitbit Versa 3. Minutes, not noise.",
    stack: ["JavaScript", "Fitbit SDK 6.1", "Versa 3 (atlas)"],
    built:
      "A Versa 3 clock face: hours/minutes/seconds, date, weekday, live heart rate, and step count, with a settings companion and an optional haptic pulse. Built with @fitbit/sdk ~6.1 against the atlas target.",
    status: "github",
    links: [
      { label: "GitHub", href: "https://github.com/IamFishR/mindfulminutes" },
    ],
  },
  {
    slug: "digital-matrix",
    name: "digital_matrix",
    kind: "Fitbit",
    blurb: "A matrix-style clock face for Fitbit Versa 3.",
    stack: ["JavaScript", "Fitbit SDK 6.1", "atlas / vulcan"],
    built:
      "Analog-style hands on a matrix-looking face, plus date, weekday, heart rate, and steps. Same Fitbit SDK 6.1 toolchain as mindfulminutes; build targets atlas (Versa 3) and vulcan (Sense 2).",
    status: "github",
    links: [
      { label: "GitHub", href: "https://github.com/IamFishR/digital_matrix" },
    ],
  },
  {
    slug: "timerjs",
    name: "timerjs",
    kind: "Library",
    blurb:
      "A small JavaScript timer class: start, pause, stop, reset, and callbacks when the clock changes state.",
    stack: ["Vanilla JavaScript"],
    built:
      "A single-file IIFE Timer: countdown via setInterval, hh:mm:ss on a target element, and onStart / onPause / onStop / onReset / onFinish hooks. No build step, no dependencies.",
    status: "github",
    links: [{ label: "GitHub", href: "https://github.com/IamFishR/timerjs" }],
  },
];
