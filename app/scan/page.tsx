"use client";

import { useState } from "react";
import data from "@/data/guidelines.json";
import type { Guideline } from "@/lib/filter";

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
    // simulate network/processing delay
    await new Promise((r) => setTimeout(r, 700));
    setResults(mockScan(url, items));
    setLoading(false);
  }

  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Scan a URL</h1>
        <p className="text-gray-700">
          Paste a URL and get mock findings mapped to relevant UX guidelines.
        </p>
      </div>

      <form onSubmit={onScan} className="space-y-3">
        <label htmlFor="scan-url" className="block text-sm font-medium">
          Website URL
        </label>
        <input
          id="scan-url"
          type="url"
          required
          placeholder="https://example.com/checkout"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full rounded border px-3 py-2 outline-none focus-visible:ring"
        />
        <button
          type="submit"
          className="rounded border px-4 py-2 font-medium hover:bg-gray-50 focus-visible:ring"
          disabled={loading}
        >
          {loading ? "Scanning…" : "Scan"}
        </button>
      </form>

      <div aria-live="polite">
        {loading && (
          <div className="rounded border p-4">
            <p>Analyzing {url || "…"} …</p>
          </div>
        )}
        {!loading && results && (
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Findings</h2>
            <ul className="space-y-3">
              {results.map((g) => (
                <li key={g.id} className="rounded border p-3">
                  <p className="text-sm text-gray-700">
                    Category: <b>{g.category}</b> • Severity: <b>{g.severity}</b>
                  </p>
                  <h3 className="mt-1 text-base font-semibold">{g.title}</h3>
                  <p className="text-sm text-gray-700">{g.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-500">
        Note: This is a mock scanner for demo purposes only. Results are heuristic.
      </p>
    </section>
  );
}