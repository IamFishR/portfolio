/**
 * Product cards on the homepage.
 * To add a product later: append an object to PRODUCTS and rebuild.
 * status: "live" | "open-testing" | "wip" | "github"
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
      "Browser recording studio — camera, mic, and screen with picture-in-picture. Recordings stay in a local gallery.",
    status: "live",
    links: [
      { label: "Site", href: "https://webcrecorder.vercel.app" },
      { label: "GitHub", href: "https://github.com/IamFishR/webcrecorder" },
    ],
  },
  {
    slug: "waterintake",
    name: "waterintake",
    kind: "Android",
    blurb:
      "Kotlin / Jetpack Compose tracker for daily water intake — goals, reminders, charts. Still being built.",
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
    status: "github",
    links: [{ label: "GitHub", href: "https://github.com/IamFishR/timerjs" }],
  },
];
