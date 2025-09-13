import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded bg-[#ddd]/30 border border-[#ccc] px-2 py-0.5 text-xs text-slate-700">
      {children}
    </span>
  );
}
