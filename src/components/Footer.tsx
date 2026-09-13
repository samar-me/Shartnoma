import { AGREEMENT_META } from "@/lib/agreement-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500 no-print">
      <div className="mx-auto max-w-4xl px-4 space-y-2">
        <p className="font-semibold text-slate-800">
          «{AGREEMENT_META.courseName}» — {AGREEMENT_META.courseField} kursi
        </p>
        <p>
          O‘qituvchi: {AGREEMENT_META.teacherName} • Darslar: {AGREEMENT_META.schedule}
        </p>
        <p className="text-slate-400 pt-2 border-t border-slate-100 max-w-sm mx-auto">
          © {AGREEMENT_META.year} 0 dan dasturgacha. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}
