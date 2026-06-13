export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-ivory pb-20">
      <div className="container-pad">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-navy via-[#102A54] to-[#6B3A27] p-8 text-white shadow-navy md:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-saffron/25 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="eyebrow">Custom Trip Planning</p>
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">Not sure where to travel in India?</h2>
            <p className="mt-4 leading-7 text-white/72">Tell us your travel month, budget, and interests. We&apos;ll suggest the best destinations and create a custom India trip plan.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="orange-btn" href="mailto:hello@indiatours.example">Plan My Trip Now</a>
              <a className="outline-btn" href="tel:+919876543210">Talk to Travel Expert</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
