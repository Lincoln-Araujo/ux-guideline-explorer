"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <a href="#main" className="sr-only focus:not-sr-only focus:p-2">
        Skip to content
      </a>
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3"
        aria-label="Primary"
      >
        <Link href="/" className="font-semibold">
          UX Guidelines Explorer
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/guidelines" className="hover:underline">
            Explore
          </Link>
          <Link href="/scan" className="hover:underline">
            Scan
          </Link>
          <a
            href="https://github.com/lincoln-araujo"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
