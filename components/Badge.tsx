import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded bg-gray-100 px-2 py-0.5 text-xs">
      {children}
    </span>
  );
}
