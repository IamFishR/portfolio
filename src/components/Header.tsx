import { SITE } from "@/data/site";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_86%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="/#top"
          className="flex items-center gap-2.5 text-sm tracking-tight text-[var(--foreground)]"
        >
          <img
            src={SITE.avatar}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border border-[var(--border)] object-cover object-[center_18%]"
          />
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
