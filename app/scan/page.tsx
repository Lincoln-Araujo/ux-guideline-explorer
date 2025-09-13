"use client";

import { useState } from "react";
import data from "@/data/guidelines.json";
import type { Guideline } from "@/lib/filter";
import Split from "@/components/Split";
import scanImg from "@/public/screenshots/cover-scan.png"; // swap for a dedicated scan cover if you add one

function mockScan(url: string, all: Guideline[]) {
  // super simple heuristic: pick guidelines by keywords in URL
  const picks: Guideline[] = [];
  const u = url.toLowerCase();
  if (u.includes("checkout")) {
    const g = all.find((x) => x.category === "Checkout");
    if (g) picks.push(g);
  }
  if (u.includes("search")) {
    const g = all.find((x) => x.category === "Search");
    if (g) picks.push(g);
  }
  if (u.includes("nav") || u.includes("product")) {
    const g = all.find((x) => x.category === "Navigation");
    if (g) picks.push(g);
  }
  // fallback: return top 2 by severity
  if (picks.length === 0) {
    const rank = { High: 0, Medium: 1, Low: 2 } as const;
    const sorted = [...all].sort((a, b) => rank[a.severity] - rank[b.severity]);
    return sorted.slice(0, 2);
  }
  return picks.slice(0, 3);
}

export default function ScanPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Guideline[] | null>(null);
  const items = data as Guideline[];

  async function onScan(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResults(null);
    await new Promise((r) => setTimeout(r, 700)); // simulate work
    setResults(mockScan(url, items));
    setLoading(false);
  }

  return (
    <Split
      image={{ src: scanImg, alt: "Scan a URL", priority: true }}
      fullHeight
      // omit imageLeft -> image on RIGHT (desktop), stacked on mobile
    >
      {/* Content column fills and can scroll */}
      <section className="relative min-h-0 md:overflow-auto bg-ghost">
        <header className="border-b border-[#e9e9e9]/35 pb-8">
          <h1 className="text-[28px] md:text-[40px] font-bold">Scan a URL</h1>
          <p className="mt-2 text-white">
            Paste a URL and get mock findings mapped to relevant UX guidelines.
          </p>
        </header>

        <form onSubmit={onScan} className="mt-6 md:flex gap-8 border-b border-[#e9e9e9]/35 pb-8 " role="search" aria-label="Scan website for UX findings">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="scan-url" className="block text-sm text-white font-regular">
              Website URL
            </label>
            <input
              id="scan-url"
              type="url"
              required
              placeholder="https://example.com/checkout"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full rounded-md border border-white/30 bg-white/90 text-slate-900 px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            />
          </div>
          <button
            type="submit"
            className="relative flex justify-center z-1 w-full md:w-fit mt-6 flex rounded-[15] bg-secondary px-6 py-3 font-semibold text-[#121214] shadow-md hover:bg-secondary-light active:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light border border-secondary-light"
            disabled={loading}
          >
            {loading ? "Scanning…" : "Scan"}
          </button>
        </form>

        <div aria-live="polite" className="mt-6">
          {loading && (
            <div className="rounded border border-slate-200 bg-white/80 p-4 text-slate-800">
              <p>Analyzing {url || "…"} …</p>
            </div>
          )}

          {!loading && results && (
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Findings</h2>
              <ul className="space-y-8">
                {results.map((g) => (
                  <li key={g.id} className="flex flex-col gap-2 rounded border border-slate-200 rounded-[15] bg-white/90 p-4">
                    <p className="text-sm text-slate-700">
                      Category: <b>{g.category}</b> • Severity: <b>{g.severity}</b>
                    </p>
                    <h3 className="mt-1 text-slate-700 text-xl font-semibold">{g.title}</h3>
                    <p className="text-sm text-slate-700">{g.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p className="mt-8 text-xm text-white">
          Note: This is a mock scanner for demo purposes only. Results are heuristic.
        </p>

        {/* Optional decorative circle, mobile/desktop swap like your other pages */}
        {/* <span className="pointer-events-none absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#7ADAA5] rounded-tr-full md:rounded-none md:rounded-tl-full md:left-auto md:right-0 opacity-30" /> */}
      </section>
    </Split>
  );
}
