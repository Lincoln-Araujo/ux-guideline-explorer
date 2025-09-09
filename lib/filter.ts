export type Guideline = {
  id: string;
  title: string;
  category: string;
  severity: "High" | "Medium" | "Low";
  summary: string;
  dos: string[];
  donts: string[];
  examples: { good: string; bad: string };
};

export type Filters = {
  q: string;
  category: string | "All";
  severity: "All" | "High" | "Medium" | "Low";
  sort: "severity" | "title";
  page: number;
  perPage: number;
};

const severityRank: Record<"High" | "Medium" | "Low", number> = {
  High: 0,
  Medium: 1,
  Low: 2,
};

export function applyFilters(
  data: Guideline[],
  { q, category, severity, sort, page, perPage }: Filters
) {
  const term = q.trim().toLowerCase();

  let filtered = data.filter((g) => {
    const matchesQ =
      !term ||
      g.title.toLowerCase().includes(term) ||
      g.summary.toLowerCase().includes(term);
    const matchesCategory = category === "All" || g.category === category;
    const matchesSeverity = severity === "All" || g.severity === severity;
    return matchesQ && matchesCategory && matchesSeverity;
  });

  if (sort === "severity") {
    filtered = filtered.sort(
      (a, b) => severityRank[a.severity] - severityRank[b.severity]
    );
  } else if (sort === "title") {
    filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  const total = filtered.length;
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  return { items: paginated, total };
}
