"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="w-full">
      <label htmlFor="search" className="block text-sm text-white font-regular">
        Search guidelines (title or summary)
      </label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded border border-[#ddd] bg-white text-slate-700 px-3 py-2 outline-none focus-visible:ring"
        placeholder="e.g. checkout, empty state…"
      />
    </div>
  );
}
