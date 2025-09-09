"use client";

type Props = {
  category: string;
  setCategory: (c: string) => void;
  severity: "All" | "High" | "Medium" | "Low";
  setSeverity: (s: "All" | "High" | "Medium" | "Low") => void;
  sort: "severity" | "title";
  setSort: (s: "severity" | "title") => void;
};

const categories = ["All", "Checkout", "Search", "Navigation"] as const;
const severities = ["All", "High", "Medium", "Low"] as const;

export default function FilterPills({
  category,
  setCategory,
  severity,
  setSeverity,
  sort,
  setSort,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <fieldset>
        <legend className="text-sm font-medium">Category</legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full border px-3 py-1 text-sm focus-visible:ring ${
                category === c ? "bg-gray-900 text-white" : "bg-white"
              }`}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium">Severity</legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {severities.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSeverity(s)}
              className={`rounded-full border px-3 py-1 text-sm focus-visible:ring ${
                severity === s ? "bg-gray-900 text-white" : "bg-white"
              }`}
              aria-pressed={severity === s}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="ml-auto text-sm">
        Sort by{" "}
        <select
          className="rounded border px-2 py-1 focus-visible:ring"
          value={sort}
          onChange={(e) => setSort(e.target.value as "severity" | "title")}
        >
          <option value="severity">Severity (High → Low)</option>
          <option value="title">Title (A → Z)</option>
        </select>
      </label>
    </div>
  );
}
