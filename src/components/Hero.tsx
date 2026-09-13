"use client";

import { AGREEMENT_META } from "@/lib/agreement-data";

export default function Hero() {
  const handlePrint = () => {
    window.print();
  };

  const handleScrollToAgreement = () => {
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
    <section className="border-b border-slate-200 bg-white py-8 sm:py-12 no-print">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          {/* Document label */}
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded">
            {AGREEMENT_META.documentLabel}
          </span>

          {/* Main Title */}
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl font-serif max-w-3xl mx-auto leading-tight">
            {AGREEMENT_META.title}
          </h1>

          {/* Short description */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {AGREEMENT_META.description}
          </p>
        </div>

        {/* Clean Metadata Grid */}
        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 sm:grid-cols-5 text-left">
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                O‘qituvchi
              </span>
              <p className="mt-0.5 text-sm font-semibold text-slate-900">
                {AGREEMENT_META.teacherName}
              </p>
            </div>

            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Kurs
              </span>
              <p className="mt-0.5 text-sm font-semibold text-slate-900">
                {AGREEMENT_META.courseName}
              </p>
            </div>

            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Yo‘nalish
              </span>
              <p className="mt-0.5 text-sm font-semibold text-slate-900">
                {AGREEMENT_META.courseField}
              </p>
            </div>

            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Darslar
              </span>
              <p className="mt-0.5 text-sm font-semibold text-slate-900">
                {AGREEMENT_META.schedule}
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                To‘lov
              </span>
              <p className="mt-0.5 text-sm font-semibold text-slate-900">
                {AGREEMENT_META.monthlyPrice}
              </p>
            </div>
          </div>
        </div>

        {/* Compact Actions */}
        <div id="intro-actions" className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleScrollToAgreement}
            className="rounded-md bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Kelishuvni o‘qish
          </button>
          <button
            onClick={handlePrint}
            className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer"
          >
            PDF / Chop etish
          </button>
        </div>
      </div>
    </section>
  );
}
