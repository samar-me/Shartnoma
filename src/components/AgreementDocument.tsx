import { AGREEMENT_META, AGREEMENT_SECTIONS } from "@/lib/agreement-data";

export default function AgreementDocument() {
  return (
    <article
      id="kelishuv"
      className="document-container mx-auto w-full max-w-[880px] rounded-lg border border-slate-200 bg-white p-6 sm:p-10 md:p-14 shadow-sm"
    >
      {/* Official Document Top Heading */}
      <header className="border-b-2 border-slate-900 pb-6 mb-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-900 font-serif leading-snug">
          {AGREEMENT_META.fullTitle}
        </h2>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 text-left text-xs sm:text-sm text-slate-700 max-w-xl mx-auto border-t border-slate-200 pt-3">
          <div>
            <strong>O‘qituvchi:</strong> {AGREEMENT_META.teacherName}
          </div>
          <div>
            <strong>Ta’lim kursi:</strong> «{AGREEMENT_META.courseName}»
          </div>
          <div>
            <strong>Yo‘nalish:</strong> {AGREEMENT_META.courseField}
          </div>
          <div>
            <strong>Dars kunlari:</strong> {AGREEMENT_META.schedule}
          </div>
          <div className="sm:col-span-2">
            <strong>Oylik to‘lov:</strong> {AGREEMENT_META.monthlyPriceRaw} ({AGREEMENT_META.monthlyPriceWords}) so‘m
          </div>
        </div>
      </header>

      {/* Sections 1 to 21 */}
      <div className="space-y-8 legal-body">
        {AGREEMENT_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="agreement-section border-b border-slate-200/80 pb-6 last:border-b-0 last:pb-0"
          >
            {/* Section Heading */}
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 uppercase mb-3 font-serif">
              {section.number}. {section.title}
            </h3>

            {/* Content Lead */}
            {section.contentLead && (
              <p className="text-sm font-medium text-slate-700 italic mb-2.5">
                {section.contentLead}
              </p>
            )}

            {/* Clauses */}
            {section.clauses && section.clauses.length > 0 && (
              <div className="space-y-3">
                {section.clauses.map((clause) => (
                  <div
                    key={clause.id}
                    className="agreement-clause flex items-start gap-2.5 text-sm sm:text-[15px] leading-relaxed text-slate-800"
                  >
                    <span className="font-semibold text-slate-900 select-none min-w-[28px] pt-0.5">
                      {clause.number}.
                    </span>
                    <p className="flex-1 text-justify sm:text-left">{clause.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Bullets */}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc pl-8 space-y-1.5 text-sm sm:text-[15px] text-slate-800 leading-relaxed my-2">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx} className="agreement-clause pl-1">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {/* Notes */}
            {section.notes && section.notes.length > 0 && (
              <div className="mt-3 space-y-2 text-sm sm:text-[15px] text-slate-800 leading-relaxed">
                {section.notes.map((note, idx) => (
                  <p key={idx}>{note}</p>
                ))}
              </div>
            )}

            {/* Section 21: Official Signatures */}
            {section.signees && section.signees.length > 0 && (
              <div className="signatures-container mt-8 pt-6 border-t border-slate-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                  {section.signees.map((signee, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded p-4 bg-slate-50/50 space-y-3"
                    >
                      <h4 className="font-bold uppercase text-xs text-slate-900 border-b border-slate-200 pb-1.5">
                        {signee.role}
                      </h4>
                      <div className="space-y-2.5">
                        {signee.fields.map((field, fIdx) => (
                          <div key={fIdx}>
                            <span className="font-semibold text-slate-700 block">
                              {field.label}:
                            </span>
                            <span className="text-slate-900 font-mono text-xs block truncate">
                              {field.placeholder}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center text-xs sm:text-sm text-slate-700">
                  <strong>Sana:</strong> «____» ______________ {AGREEMENT_META.year}-yil
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
