export default function TrustBar() {
  return (
    <section className="py-10 border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-6">
        <div className="flex flex-wrap gap-8">
          {[{ stat: "4.9★", label: "Google rating" }, { stat: "68", label: "verified reviews" }, { stat: "3", label: "experienced dentists" }, { stat: "NHS+", label: "& private" }].map((i) => (
            <div key={i.label}><p className="text-2xl font-bold text-[var(--color-primary)]">{i.stat}</p><p className="text-xs text-[var(--color-text-muted)]">{i.label}</p></div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["GDC Registered", "CQC Rated Good", "NHS & Private", "Emergency appointments"].map((b) => (
            <span key={b} className="bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1.5 rounded-full">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
