"use client";
import Link from "next/link";
import { Search } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="container-max flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo.svg" alt="AwarexOne" className="h-7 w-7" />
          <span>AwarexOne</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 ml-6 text-sm">
          <Link href="/lost">Lost Items</Link>
          <Link href="/found">Found Items</Link>
          <Link href="/scams">Scam Reports</Link>
          <Link href="/education">Education</Link>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white">
            <Search className="h-4 w-4" />
            <input className="outline-none text-sm" placeholder="Search…" />
          </div>
          <Link className="text-sm" href="/auth/sign-in">Sign in</Link>
        </div>
      </div>
    </header>
  );
}
