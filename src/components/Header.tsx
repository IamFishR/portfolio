import { SITE } from "@/data/site";
import { Mark } from "./Mark";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_86%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm tracking-tight text-[var(--foreground)]"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)]">
            <Mark className="h-4 w-4" />
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
          <span className="sm:hidden">{SITE.shortName}</span>
        </a>
        <nav className="flex items-center gap-5 text-sm text-[var(--muted)]">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
