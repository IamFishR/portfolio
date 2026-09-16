import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/data/site";

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b0b0d" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rakesh-jadhav.vercel.app"),
  title: {
    default: `${SITE.name} — ${SITE.title}`,
    template: `%s · ${SITE.name}`,
  },
  description: `${SITE.title} in ${SITE.location}. ${SITE.tagline}`,
  authors: [{ name: SITE.name, url: SITE.links.github }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: `${SITE.name} — ${SITE.title}`,
    description: `${SITE.title} in ${SITE.location}. ${SITE.tagline}`,
    type: "website",
    locale: "en_IN",
    images: [{ url: SITE.avatar, alt: SITE.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="flex min-h-dvh flex-col bg-[var(--background)] text-[var(--foreground)] antialiased">
        <div className="grain" aria-hidden />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
