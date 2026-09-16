import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { SITE } from "@/data/site";

const contact = [
  { label: "Email", href: SITE.links.email, text: SITE.email },
  { label: "GitHub", href: SITE.links.github, text: SITE.handle },
  { label: "LinkedIn", href: SITE.links.linkedin, text: "thisisfish" },
  { label: "X", href: SITE.links.x, text: "@after_myth" },
];

export default function HomePage() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-5 sm:px-8">
      <section className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-10">
          <img
            src={SITE.avatar}
            alt={SITE.name}
            width={160}
            height={160}
            className="h-28 w-28 shrink-0 rounded-full border border-[var(--border)] object-cover object-[center_18%] sm:h-36 sm:w-36"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
              {SITE.title} · {SITE.location}
            </p>
            <h1 className="font-serif mt-5 max-w-3xl text-5xl leading-[1.05] text-[var(--foreground)] sm:text-7xl">
              {SITE.name}
            </h1>
          </div>
        </div>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          {SITE.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a
            href="#work"
            className="text-[var(--foreground)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
          >
            See products
          </a>
          <a
            href={SITE.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
          <a
            href={SITE.links.email}
            className="text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            {SITE.email}
          </a>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-t border-[var(--border)] py-16 sm:py-20"
      >
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              About
            </h2>
            {SITE.about.map((para) => (
              <p
                key={para}
                className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]"
              >
                {para}
              </p>
            ))}
          </div>
          <dl className="grid grid-cols-1 gap-6 self-start sm:grid-cols-2 lg:grid-cols-1">
            {SITE.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[var(--foreground)]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="work"
        className="scroll-mt-24 border-t border-[var(--border)] py-16 sm:py-20"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              Products
            </h2>
            <p className="font-serif mt-3 text-3xl sm:text-4xl">
              Things I have shipped
            </p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            {PRODUCTS.length} cards. Status is honest: live store listings,
            open testing, GitHub, or still a WIP.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-[var(--border)] py-16 sm:py-24"
      >
        <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
          Contact
        </h2>
        <p className="font-serif mt-4 max-w-lg text-3xl leading-tight sm:text-4xl">
          Say hello.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {contact.map((item) => (
            <li key={item.label}>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                {item.label}
              </p>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="mt-1 inline-flex items-center gap-1 text-lg text-[var(--foreground)] hover:text-[var(--accent)]"
              >
                {item.text}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
