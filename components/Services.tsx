const treatments = [
  { name: "Check-ups & hygiene", desc: "Comprehensive oral health checks and professional clean. NHS and private options available." },
  { name: "Tooth whitening", desc: "Professional take-home whitening trays for natural, lasting results — no over-the-counter sensitivity." },
  { name: "Fillings & restorations", desc: "Tooth-coloured composite fillings that blend naturally. Replace old amalgam if preferred." },
  { name: "Crowns & bridges", desc: "Long-lasting porcelain crowns and bridges crafted to match your existing teeth precisely." },
  { name: "Orthodontics", desc: "Clear aligner options for adults. Discreet, removable, effective for mild-to-moderate corrections." },
  { name: "Emergency appointments", desc: "Same-day emergency slots for pain relief, lost crowns, and acute dental problems." },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">Our treatments</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((s) => (
            <div key={s.name} className="bg-[var(--color-surface)] border-t-4 border-[var(--color-secondary)] rounded-lg p-6">
              <h3 className="font-semibold text-[var(--color-primary)] mb-2">{s.name}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
