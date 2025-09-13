import Split from "@/components/Split";
import heroImg from "@/public/screenshots/cover-landing.png";
import Link from "next/link";

export default function Page() {
  return (
    <Split
      image={{ src: heroImg, alt: "Hero", priority: true }}
      imageLeft
      fullHeight
    >
      <div className="h-full flex flex-col p-8  md:justify-center relative">
        <h1 className="relative z-1 text-[32px] md:text-[64px] font-bold">UX Guidelines Explorer</h1>
        <p className="relative z-1 mt-3 text-[20px] font-light text-white">
          A tiny catalog demo with search, filters, sorting, pagination, and accessible UI patterns.
        </p>

        {/* CTA Button */}
        <Link
          href="/guidelines"
          className=" relative z-1 w-fit mt-6 flex rounded-[15] bg-secondary px-6 py-3 font-semibold text-[#121214] shadow-md hover:bg-secondary-light active:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light border border-secondary-light"
        >
          Explore Guidelines
        </Link>

        <span className="absolute bottom-0 right-0 md:left-0 w-[264px] h-[264px] bg-[#7ADAA5] z-0 rounded-tl-full md:rounded-none md:rounded-tr-full"></span>        
      </div>
      
    </Split>
  );
}
