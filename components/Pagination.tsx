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
      className="flex items-center justify-between"
      aria-label="Pagination"
    >
      <p aria-live="polite" className="text-sm">
        Page {page} of {pageCount} • {total} result{total === 1 ? "" : "s"}
      </p>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="rounded border px-3 py-1 text-sm disabled:opacity-50 focus-visible:ring"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => onPageChange(Math.min(pageCount, page + 1))}
          disabled={page === pageCount}
          className="rounded border px-3 py-1 text-sm disabled:opacity-50 focus-visible:ring"
        >
          Next
        </button>
      </div>
    </nav>
  );
}
