"use client";

import { useMemo, useState } from "react";
import data from "@/data/guidelines.json";
import { applyFilters, type Guideline } from "@/lib/filter";
import SearchBar from "@/components/SearchBar";
import FilterPills from "@/components/FilterPills";
import Pagination from "@/components/Pagination";
import Card from "@/components/Card";
import Split from "@/components/Split";
import listImg from "@/public/screenshots/cover-list.png";

export default function GuidelinesPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [severity, setSeverity] = useState<"All" | "High" | "Medium" | "Low">(
    "All"
  );
  const [sort, setSort] = useState<"severity" | "title">("severity");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const { items, total } = useMemo(
    () =>
      applyFilters(data as Guideline[], {
        q,
        category,
        severity,
        sort,
        page,
        perPage,
      }),
    [q, category, severity, sort, page]
  );

  // reset to first page when criteria change
  function resetPaging() {
    setPage(1);
  }

  return (
    <Split
        image={{ src: listImg, alt: "Guidelines list", priority: true }}
        fullHeight
      >
        <div className="relative h-full min-h-0 w-full overflow-auto px-4 py-8 md:pt-30 md:pl-30 md:pr-8">          
          <h1 className="text-2xl font-semibold">Guidelines</h1>
          <p className="mt-2 text-slate-700">Browse, search, and filter UX guidelines.</p>
          <div className="grid gap-4 sm:grid-cols-2">
              <SearchBar
                value={q}
                onChange={(v) => {
                  setQ(v);
                  resetPaging();
                }}
              />
              <FilterPills
                category={category}
                setCategory={(c) => {
                  setCategory(c);
                  resetPaging();
                }}
                severity={severity}
                setSeverity={(s) => {
                  setSeverity(s);
                  resetPaging();
                }}
                sort={sort}
                setSort={(s) => {
                  setSort(s);
                  resetPaging();
                }}
              />
            </div>

            <p aria-live="polite" className="text-sm text-gray-700">
              Showing {total} guideline{total === 1 ? "" : "s"}
            </p>

            {total === 0 ? (
              <div className="rounded border p-6 text-center">
                <p>No guidelines found. Try clearing filters or broadening your search.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((g) => (
                    <Card key={g.id} g={g} />
                  ))}
                </div>

                <Pagination
                  page={page}
                  perPage={perPage}
                  total={total}
                  onPageChange={setPage}
                />
              </>
            )}
        </div>

      </Split> 
  );
}
