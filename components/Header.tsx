"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import arrowRight from "@/public/arrow-right.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <a href="#main" className="sr-only focus:not-sr-only focus:p-2">
        Skip to content
      </a>
      <nav
        className="mx-auto flex items-center justify-between bg-[#B45253] md:bg-transparent"
        aria-label="Primary"
      >
        <Link href="/" 
          className="md:bg-[#B45253] text-white font-medium tracking-tight 
                    px-[40px] py-[30px] rounded-br-[78px] text-xl whitespace-nowrap"
        >
          UX Guidelines Explorer
        </Link>
        <div 
          className="
            hidden md:flex md:items-center
            md:divide-x gap-8 md:divide-[#e9e9e9]/35
            px-[30px] md:border-l md:border-r md:mx-8 md:border-[#e9e9e9]/35
          ">
          <Link href="/guidelines" className="pr-8 hover:underline">
            Explore
          </Link>
          <Link href="/scan" className="pr-8 hover:underline">
            Scan
          </Link>
          <a
            href="https://github.com/lincoln-araujo/ux-guideline-explorer"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md px-8 py-2 focus-visible:ring"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >      
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-4 w-5">      
            <span
              className={[
                "absolute left-0 block h-0.5 w-6 bg-white transition-transform duration-200 ease-out origin-center",
                open ? "translate-y-[7px] rotate-45" : "translate-y-0 rotate-0",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-white transition-opacity duration-150 ease-out",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 bottom-0 block h-0.5 w-6 bg-white transition-transform duration-200 ease-out origin-center",
                open ? "-translate-y-[7px] -rotate-45" : "translate-y-0 rotate-0",
              ].join(" ")}
            />
          </div>
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={`
          md:hidden overflow-hidden 
          ${open ? "max-h-64" : "max-h-0"}
          transition-[max-height] duration-300 ease-in-out
          bg-primary-light border-b border-[#e9e9e9]/35 shadow-2xl
        `}
      >
        <div className="flex flex-col">
          <Link
            href="/guidelines"
            className="px-6 py-3 hover:underline border-b border-[#e9e9e9]/35 flex justify-between items-center arrow-right"
            onClick={() => setOpen(false)}
          >
            Explore
          </Link>
          <Link
            href="/scan"
            className="px-6 py-3 hover:underline border-b border-[#e9e9e9]/35 flex justify-between items-center arrow-right"
            onClick={() => setOpen(false)}
          >
            Scan
          </Link>
          <a
            href="https://github.com/lincoln-araujo/ux-guideline-explorer"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 hover:underline flex justify-between items-center arrow-right"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
