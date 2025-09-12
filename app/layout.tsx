import "../styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UX Guidelines Explorer",
  description: "A tiny Next.js + Tailwind demo focused on a11y and discoverability.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-primary text-white min-h-dvh`}>
        <Header />
        <main id="main" className="w-dvw h-dvh p-0 m-0">
          {children}
        </main>
      </body>
    </html>
  );
}
