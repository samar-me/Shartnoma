"use client";

import Link from "next/link";

export default function Header() {
  const handlePrint = () => {
    window.print();
  };

  const handleScrollToAgreement = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("kelishuv");
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm no-print">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Brand name & subtitle */}
        <Link href="/" className="flex flex-col">
          <span className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            0 dan dasturgacha
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Rasmiy ta’lim kelishuvi
          </span>
        </Link>

        {/* Right: Actions */}
        <nav className="flex items-center gap-3 sm:gap-6">
          <a
            href="#kelishuv"
            onClick={handleScrollToAgreement}
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Kelishuv
          </a>
          <button
            onClick={handlePrint}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
          >
            PDF / Chop etish
          </button>
        </nav>
      </div>
    </header>
  );
}
