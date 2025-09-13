// app/guidelines/[id]/page.tsx  (Server Component)
import data from "@/data/guidelines.json";
import type { Guideline } from "@/lib/filter";
import ExampleBlock from "@/components/ExampleBlock";
import Badge from "@/components/Badge";
import Link from "next/link";
import Split from "@/components/Split";
import detailImg from "@/public/screenshots/cover-list.png";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;                 // ✅ unwrap params
  const g = (data as Guideline[]).find((x) => x.id === id);

  if (!g) {
    return (
      <section className="px-4 py-8">
        <p>Not found.</p>
        <Link href="/guidelines" className="mt-3 inline-block underline">
          Back to list
        </Link>
      </section>
    );
  }

  return (
    <Split image={{ src: detailImg, alt: `${g.title} cover`, priority: true }} fullHeight>
      <article className="relative min-h-0 md:overflow-auto bg-ghost">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{g.category}</Badge>
          <Badge>{g.severity}</Badge>
        </div>

        <header className="border-b border-[#e9e9e9]/35 pb-8">
          <h1 className="mt-3 text-2xl md:text-3xl font-semibold">{g.title}</h1>
          <p className="mt-2 text-white">{g.summary}</p>
        </header>

        <section aria-labelledby="dos" className="mt-6">
          <h2 id="dos" className="text-lg font-medium">Do / Don’t</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <ul className="list-disc pl-6 space-y-1">
              {g.dos.map((d) => <li key={d}>{d}</li>)}
            </ul>
            <ul className="list-disc pl-6 space-y-1">
              {g.donts.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </section>

        <section aria-labelledby="examples" className="mt-6">
          <h2 id="examples" className="text-lg font-medium">Examples</h2>
          <div className="mt-3">
            <ExampleBlock good={g.examples.good} bad={g.examples.bad} />
          </div>
        </section>

        <div className="mt-8">
          <Link href="/guidelines" className="inline-block underline">
            ← Back to list
          </Link>
        </div>
      </article>
    </Split>
  );
}
