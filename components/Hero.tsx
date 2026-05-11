export default function Hero() {
  return (
    <section className="bg-[var(--color-primary)] text-white py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block bg-[var(--color-secondary-dark)] text-white text-sm font-semibold px-3 py-1.5 rounded-full mb-6">Dental emergency? Call us now</span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">Manchester&apos;s trusted family dentist</h1>
          <p className="text-white/80 text-lg mb-8">NHS and private patients welcome · GDC registered · CQC rated Good · Didsbury, Manchester</p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:01610000001" className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] hover:bg-[var(--color-surface)] font-bold px-6 py-3.5 rounded-md transition-colors">Book an appointment</a>
            <a href="/services" className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-6 py-3.5 rounded-md transition-colors">Our treatments</a>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <span className="text-white text-xl font-bold">4.9★</span>
            <span className="text-white/70 text-sm">from 68 Google reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
