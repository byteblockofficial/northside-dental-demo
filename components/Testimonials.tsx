const testimonials = [
  { quote: "Incredible care from start to finish. My daughter was nervous but the team put her completely at ease. No pain, great result.", author: "S.P.", location: "Didsbury" },
  { quote: "Got an emergency same-day appointment when a crown fell out. Fixed within 90 minutes. Absolutely brilliant.", author: "M.A.", location: "Withington" },
  { quote: "Switched from another practice after years and wish I'd done it sooner. Clean, modern, and the hygienist is fantastic.", author: "R.K.", location: "Chorlton" },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">Patient feedback</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="bg-white border-t-4 border-[var(--color-secondary)] p-6 rounded-lg shadow-sm">
              <p className="text-[var(--color-text)] leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <footer className="text-sm font-semibold text-[var(--color-text-muted)]">{t.author} · {t.location}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
