import data from "@/data/guidelines.json";
import type { Guideline } from "@/lib/filter";
import ExampleBlock from "@/components/ExampleBlock";
import Badge from "@/components/Badge";
import Link from "next/link";

export default function DetailPage({ params }: { params: { id: string } }) {
  const g = (data as Guideline[]).find((x) => x.id === params.id);
  if (!g) {
    return (
      <section>
        <p>Not found.</p>
        <Link href="/guidelines" className="mt-3 inline-block underline">
          Back to list
        </Link>
      </section>
    );
  }

  return (
    <article className="space-y-6">
      <div className="flex items-center gap-2">
        <Badge>{g.category}</Badge>
        <Badge>{g.severity}</Badge>
      </div>

      <h1 className="text-2xl font-semibold">{g.title}</h1>
      <p className="text-gray-700">{g.summary}</p>

      <section aria-labelledby="dos">
        <h2 id="dos" className="mt-4 text-lg font-medium">Do / Don’t</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <ul className="list-disc pl-6">
            {g.dos.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <ul className="list-disc pl-6">
            {g.donts.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="examples">
        <h2 id="examples" className="mt-4 text-lg font-medium">Examples</h2>
        <ExampleBlock good={g.examples.good} bad={g.examples.bad} />
      </section>

      <Link href="/guidelines" className="inline-block underline">
        ← Back to list
      </Link>
    </article>
  );
}
