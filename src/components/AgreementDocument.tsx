import { AGREEMENT_META, NEW_AGREEMENT_SECTIONS, SIGNATURE_BLOCK } from "@/lib/agreement-data";

function renderFormattedText(text: string) {
  // Simple parser for bold **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function AgreementDocument() {
  return (
    <article
      id="kelishuv"
      className="document-container mx-auto w-full max-w-[880px] rounded-lg border border-slate-200 bg-white p-6 sm:p-10 md:p-14 shadow-sm"
    >
      {/* Official Header */}
      <header className="border-b-2 border-slate-900 pb-6 mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
          {AGREEMENT_META.documentLabel}
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900 font-serif leading-snug">
          “{AGREEMENT_META.courseName.toUpperCase()}”
        </h1>
        <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-slate-800 font-serif mt-1">
          {AGREEMENT_META.title}
        </h2>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 text-left text-xs sm:text-sm text-slate-700 max-w-xl mx-auto border-t border-slate-200 pt-3">
          <div>
            <strong>O‘qituvchi:</strong> {AGREEMENT_META.teacherName}
          </div>
          <div>
            <strong>Yo‘nalish:</strong> {AGREEMENT_META.courseField}
          </div>
          <div>
            <strong>Dars kunlari:</strong> {AGREEMENT_META.schedule}
          </div>
          <div>
            <strong>Oylik to‘lov:</strong> {AGREEMENT_META.monthlyPriceRaw}
          </div>
        </div>
      </header>

      {/* 18 Sections */}
      <div className="space-y-8 legal-body text-sm sm:text-[15px] leading-relaxed text-slate-800">
        {NEW_AGREEMENT_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="agreement-section border-b border-slate-200/80 pb-6 last:border-b-0 last:pb-0"
          >
            {/* Section Header */}
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 uppercase mb-3 font-serif">
              {section.number}. {section.title}
            </h3>

            {/* Paragraphs */}
            {section.paragraphs && (
              <div className="space-y-2 mb-3">
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-justify sm:text-left">
                    {renderFormattedText(p)}
                  </p>
                ))}
              </div>
            )}

            {/* Lead */}
            {section.lead && (
              <p className="font-medium text-slate-800 mb-2">
                {renderFormattedText(section.lead)}
              </p>
            )}

            {/* Bullets */}
            {section.bullets && (
              <ul className="list-disc pl-6 space-y-1.5 my-2">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx} className="agreement-clause pl-1">
                    {renderFormattedText(bullet)}
                  </li>
                ))}
              </ul>
            )}

            {/* Items */}
            {section.items && (
              <div className="space-y-2 my-2.5">
                {section.items.map((item, idx) => (
                  <div key={idx} className="agreement-clause flex items-start gap-2">
                    <p className="flex-1 text-justify sm:text-left">
                      {renderFormattedText(item)}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Subsections */}
            {section.subsections && (
              <div className="space-y-4 my-3 pl-1 sm:pl-2">
                {section.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-2 border-l-2 border-slate-200 pl-3 sm:pl-4">
                    {sub.title && (
                      <h4 className="text-sm font-bold text-slate-900">
                        {sub.title}
                      </h4>
                    )}
                    {sub.lead && (
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">
                        {renderFormattedText(sub.lead)}
                      </p>
                    )}
                    {sub.paragraphs && (
                      <div className="space-y-1.5 text-xs sm:text-sm">
                        {sub.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{renderFormattedText(p)}</p>
                        ))}
                      </div>
                    )}
                    {sub.items && (
                      <div className="space-y-1.5 text-xs sm:text-sm">
                        {sub.items.map((item, iIdx) => (
                          <p key={iIdx}>{renderFormattedText(item)}</p>
                        ))}
                      </div>
                    )}
                    {sub.callout && (
                      <div className="rounded border border-amber-200 bg-amber-50/70 p-3 text-xs sm:text-sm text-amber-950">
                        <strong>{renderFormattedText(sub.callout)}</strong>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Callout */}
            {section.callout && (
              <div className="my-3 rounded border border-slate-200 bg-slate-50/80 p-3 text-xs sm:text-sm text-slate-900">
                <strong>{renderFormattedText(section.callout)}</strong>
              </div>
            )}

            {/* Notes */}
            {section.notes && (
              <div className="mt-2 space-y-1 text-xs sm:text-sm text-slate-700 italic">
                {section.notes.map((note, idx) => (
                  <p key={idx}>{renderFormattedText(note)}</p>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Section: TOMONLARNING MA’LUMOTLARI */}
        <section className="signatures-container mt-10 pt-8 border-t-2 border-slate-900">
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 uppercase text-center mb-6 font-serif">
            TOMONLARNING MA’LUMOTLARI
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            {/* Teacher */}
            <div className="border border-slate-200 rounded p-4 bg-slate-50/60 space-y-3">
              <h4 className="font-bold uppercase text-xs text-slate-900 border-b border-slate-200 pb-1.5">
                {SIGNATURE_BLOCK.teacher.role}
              </h4>
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="font-semibold text-slate-700 block">F.I.Sh.:</span>
                  <span className="text-slate-900 font-medium block">
                    {SIGNATURE_BLOCK.teacher.name}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Telefon:</span>
                  <span className="text-slate-500 font-mono text-[11px] block">
                    {SIGNATURE_BLOCK.teacher.phonePlaceholder}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Imzo:</span>
                  <span className="text-slate-500 font-mono text-[11px] block">
                    {SIGNATURE_BLOCK.teacher.signPlaceholder}
                  </span>
                </div>
              </div>
            </div>

            {/* Student */}
            <div className="border border-slate-200 rounded p-4 bg-slate-50/60 space-y-3">
              <h4 className="font-bold uppercase text-xs text-slate-900 border-b border-slate-200 pb-1.5">
                {SIGNATURE_BLOCK.student.role}
              </h4>
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="font-semibold text-slate-700 block">F.I.Sh.:</span>
                  <span className="text-slate-500 font-mono text-[11px] block">
                    {SIGNATURE_BLOCK.student.namePlaceholder}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Tug‘ilgan sana:</span>
                  <span className="text-slate-500 font-mono text-[11px] block">
                    {SIGNATURE_BLOCK.student.birthPlaceholder}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Telefon:</span>
                  <span className="text-slate-500 font-mono text-[11px] block">
                    {SIGNATURE_BLOCK.student.phonePlaceholder}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Imzo:</span>
                  <span className="text-slate-500 font-mono text-[11px] block">
                    {SIGNATURE_BLOCK.student.signPlaceholder}
                  </span>
                </div>
              </div>
            </div>

            {/* Parent / Guardian */}
            <div className="border border-slate-200 rounded p-4 bg-slate-50/60 space-y-3">
              <div>
                <h4 className="font-bold uppercase text-xs text-slate-900">
                  {SIGNATURE_BLOCK.guardian.role}
                </h4>
                <span className="text-[11px] text-slate-500 italic block">
                  {SIGNATURE_BLOCK.guardian.subtitle}
                </span>
              </div>
              <div className="space-y-2.5 text-xs border-t border-slate-200 pt-1.5">
                <div>
                  <span className="font-semibold text-slate-700 block">F.I.Sh.:</span>
                  <span className="text-slate-500 font-mono text-[11px] block">
                    {SIGNATURE_BLOCK.guardian.namePlaceholder}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">O‘quvchiga munosabati:</span>
                  <span className="text-slate-500 font-mono text-[11px] block">
                    {SIGNATURE_BLOCK.guardian.relationPlaceholder}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Telefon:</span>
                  <span className="text-slate-500 font-mono text-[11px] block">
                    {SIGNATURE_BLOCK.guardian.phonePlaceholder}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Imzo:</span>
                  <span className="text-slate-500 font-mono text-[11px] block">
                    {SIGNATURE_BLOCK.guardian.signPlaceholder}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Contract Meta */}
          <div className="mt-8 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700 text-center sm:text-left">
            <div>
              <strong>Sana:</strong> {SIGNATURE_BLOCK.contractDate}
            </div>
            <div>
              <strong>Shartnoma №:</strong> <span className="font-mono">{SIGNATURE_BLOCK.contractNumber}</span>
            </div>
            <div className="sm:text-right">
              <strong>Versiya:</strong> {SIGNATURE_BLOCK.version}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
