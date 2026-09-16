import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <p>
          {SITE.handle} · {SITE.location}
        </p>
      </div>
    </footer>
  );
}
