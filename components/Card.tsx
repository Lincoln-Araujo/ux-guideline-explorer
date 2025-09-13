import Link from "next/link";
import Badge from "./Badge";
import type { Guideline } from "@/lib/filter";

export default function Card({ g }: { g: Guideline }) {
  return (
    <article className="rounded-[15] border border-[e9e9e9]/35 p-4 shadow-sm bg-white">
      <div className="flex items-center gap-2">
        <Badge>{g.category}</Badge>
        <Badge>{g.severity}</Badge>
      </div>
      <h3 className="mt-2 text-lg font-semibold text-slate-700">
        <Link href={`/guidelines/${g.id}`} className="hover:underline">
          {g.title}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-slate-700">{g.summary}</p>
    </article>
  );
}
