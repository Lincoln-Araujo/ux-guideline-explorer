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
    <div className="flex flex-col items-start flex-wrap items-center gap-3">
      <fieldset>
        <legend className="text-sm font-regular">Category</legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-sm border border-[#ddd] px-3 py-1 text-sm focus-visible:ring ${
                category === c ? "relative z-1 w-fit flex bg-secondary px-4 py-1 font-semibold text-[#121214] shadow-md hover:bg-secondary-light active:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light border border-secondary-light" : "bg-white text-slate-700"
              }`}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col md:flex-row gap-4">
        <fieldset>
          <legend className="text-sm font-regular">Severity</legend>
          <div className="mt-1 flex flex-wrap gap-2">
            {severities.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSeverity(s)}
                className={`rounded-sm border-[#ddd] px-3 py-1 text-sm focus-visible:ring ${
                  severity === s ? "relative z-1 w-fit flex bg-secondary px-4 py-1 font-semibold text-[#121214] shadow-md hover:bg-secondary-light active:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light border border-secondary-light" : "bg-white text-slate-700"
                }`}
                aria-pressed={severity === s}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="flex flex-col gap-1 md:ml-auto text-sm">
          Sort by{" "}
          <select
            className="rounded border border-[#ddd] bg-white px-2 py-1 focus-visible:ring text-slate-700"
            value={sort}
            onChange={(e) => setSort(e.target.value as "severity" | "title")}
          >
            <option value="severity">Severity (High → Low)</option>
            <option value="title">Title (A → Z)</option>
          </select>
        </label>
      </div>
    </div>
  );
}
