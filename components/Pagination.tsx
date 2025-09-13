"use client";

type Props = {
  page: number;
  perPage: number;
  total: number;
  onPageChange: (p: number) => void;
};

export default function Pagination({ page, perPage, total, onPageChange }: Props) {
  const pageCount = Math.max(1, Math.ceil(total / perPage));

  return (
    <nav
      className="flex items-center justify-between mt-2"
      aria-label="Pagination"
    >
      <p aria-live="polite" className="text-sm">
        Page {page} of {pageCount} • {total} result{total === 1 ? "" : "s"}
      </p>

      <div className="hidden md:flex md:items-center d:divide-x md:divide-[#e9e9e9]">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="rounded px-3 py-1 text-lg disabled:opacity-50 focus-visible:ring text-white"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => onPageChange(Math.min(pageCount, page + 1))}
          disabled={page === pageCount}
          className="rounded px-3 py-1 text-lg disabled:opacity-50 focus-visible:ring text-white"
        >
          Next
        </button>
      </div>
    </nav>
  );
}
