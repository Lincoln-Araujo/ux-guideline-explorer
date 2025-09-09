import Link from "next/link";

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <h1 className="text-3xl font-semibold">UX Guidelines Explorer</h1>
      <p className="mt-3 text-gray-700">
        A tiny catalog demo with search, filters, sorting, pagination, and accessible UI patterns.
      </p>
      <div className="mt-6">
        <Link
          href="/guidelines"
          className="inline-block rounded border px-4 py-2 font-medium hover:bg-gray-50 focus-visible:ring"
        >
          Explore Guidelines
        </Link>
      </div>
    </section>
  );
}
