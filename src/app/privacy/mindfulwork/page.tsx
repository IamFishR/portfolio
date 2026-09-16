import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "MindfulWork privacy policy",
  description:
    "Privacy policy for MindfulWork (com.app.mindfulwork), a local-first Android launcher by Rakesh Jadhav. Usage and settings stay on your device.",
};

const PLAY =
  "https://play.google.com/store/apps/details?id=com.app.mindfulwork";

export default function MindfulWorkPrivacyPage() {
  return (
    <article className="mx-auto max-w-5xl px-5 sm:px-8">
      <header className="pb-12 pt-16 sm:pb-16 sm:pt-24">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
          MindfulWork · Android
        </p>
        <h1 className="font-serif mt-5 max-w-3xl text-4xl leading-[1.1] text-[var(--foreground)] sm:text-6xl">
          Privacy policy
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)]">
          Last updated 16 September 2026. This page covers the MindfulWork
          Android app (<span className="text-[var(--foreground)]">com.app.mindfulwork</span>
          ), not the rest of this site.
        </p>
      </header>

      <div className="max-w-xl space-y-12 border-t border-[var(--border)] py-16 text-base leading-relaxed text-[var(--muted)] sm:space-y-14 sm:py-20">
        <section>
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
            Short version
          </h2>
          <p className="mt-4">
            MindfulWork is a launcher you run on your phone. App lists, usage
            insights, limits, and the settings you pick are meant to stay on
            the device. I do not run a MindfulWork account, cloud, or analytics
            backend, and I do not sell this data.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
            What the app is
          </h2>
          <p className="mt-4">
            MindfulWork is a free Android launcher by {SITE.name}. It replaces
            the usual icon grid with a list-based home, and it can show usage
            insights and per-app limits so the screen stays quieter. The{" "}
            <a
              href={PLAY}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--foreground)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              Play listing
            </a>{" "}
            last updated on 13 September 2023.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
            What stays on your phone
          </h2>
          <p className="mt-4">
            Typical data for this kind of app lives in app storage on the
            device, for example:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Which apps appear in your list, and any names or order you set</li>
            <li>Usage insights drawn from Android usage access, if you grant it</li>
            <li>Limits, reminders, and other preferences you configure</li>
          </ul>
          <p className="mt-4">
            Uninstalling MindfulWork removes that app data, the way Android
            usually does. I do not keep a copy on a server of mine.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
            What I don&apos;t do
          </h2>
          <p className="mt-4">
            The Play Data safety form for this package says no data is collected
            by the app and none is shared with third parties. In plain terms:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>No MindfulWork account or sign-in</li>
            <li>No MindfulWork cloud backup or sync</li>
            <li>No ads in the app, and no analytics product wired up by me</li>
            <li>I do not sell, rent, or trade what you do in the app</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
            Permissions
          </h2>
          <p className="mt-4">
            A launcher has to see installed apps to list them. Usage insights
            and limits need Android usage access if you turn those features on.
            Those APIs stay on the device; they are not a pipeline to me. You
            can revoke usage access in system settings. If a permission is only
            there to run a feature you never enable, don&apos;t grant it.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
            Google Play and Android
          </h2>
          <p className="mt-4">
            Installing from Play means Google may process install, crash, and
            review data under Google&apos;s own policies. Android itself keeps
            system logs and usage stats for the OS. That is the platform, not a
            MindfulWork server.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
            Children
          </h2>
          <p className="mt-4">
            The listing is rated Everyone. The app is not aimed at children and
            does not ask for an account. Don&apos;t use it to collect information
            about a child.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
            Changes
          </h2>
          <p className="mt-4">
            If how the app handles data changes, I will update this page and
            the date at the top. There is no email list; check back here if you
            need the current text.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
            Contact
          </h2>
          <p className="mt-4">
            Developer: {SITE.name}. Questions about this policy:{" "}
            <a
              href={SITE.links.email}
              className="text-[var(--foreground)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              {SITE.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
