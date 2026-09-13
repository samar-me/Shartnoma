"use client";

import Link from "next/link";
import AgreementDocument from "@/components/AgreementDocument";

export default function PrintPage() {
  return (
    <div className="min-h-screen bg-white py-6 px-4">
      {/* Action Bar (hidden in print) */}
      <div className="no-print mx-auto max-w-[880px] mb-6 flex items-center justify-between border-b border-slate-200 pb-3">
        <Link
          href="/"
          className="text-xs font-semibold text-slate-600 hover:text-slate-900"
        >
          ← Asosiy sahifaga qaytish
        </Link>
        <button
          onClick={() => window.print()}
          className="rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Chop etish / PDF saqlash
        </button>
      </div>

      <AgreementDocument />
    </div>
  );
}
