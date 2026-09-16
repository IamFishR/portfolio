import { ArrowUpRight } from "lucide-react";
import {
  STATUS_LABEL,
  type Product,
  type ProductStatus,
} from "@/data/products";

const statusClass: Record<ProductStatus, string> = {
  live: "border-[color-mix(in_srgb,var(--accent)_45%,var(--border))] text-[var(--accent)]",
  "open-testing": "border-[var(--border)] text-[var(--foreground)]",
  wip: "border-[var(--border)] text-[var(--muted)]",
  github: "border-[var(--border)] text-[var(--muted)]",
};

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <article className="group flex flex-col border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <p className="font-serif text-sm tabular-nums text-[var(--accent)]">
          {n}
        </p>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-[11px] tracking-wide uppercase ${statusClass[product.status]}`}
        >
          {STATUS_LABEL[product.status]}
        </span>
      </div>
      <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        {product.kind}
      </p>
      <h3 className="mt-2 font-serif text-2xl leading-tight text-[var(--foreground)]">
        {product.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
        {product.blurb}
      </p>
      <div className="mt-5">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
          Stack
        </p>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {product.stack.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] px-2 py-0.5 text-[11px] text-[var(--foreground)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex-1">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
          What I built
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          {product.built}
        </p>
      </div>
      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
        {product.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--foreground)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
