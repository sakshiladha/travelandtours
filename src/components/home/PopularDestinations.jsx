import Image from "next/image";
import { destinations } from "../../data/destinations";

export default function PopularDestinations() {
  return (
    <section id="destinations" className="bg-ivory pb-20">
      <div className="container-pad">
        <p className="eyebrow">Popular Destinations</p>
        <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-navy md:text-5xl">Where India is calling you next</h2>
        <p className="mt-4 max-w-3xl leading-7 text-ink/70">Handpicked destinations with private transfers, curated hotels and local experiences.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([badge, title, text, price, image]) => (
            <article key={title} className="soft-card group overflow-hidden transition duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image src={image} alt={title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="image-zoom object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-forest">{badge}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl font-medium text-navy">{title}</h3>
                <p className="mt-2 min-h-14 text-sm leading-6 text-ink/65">{text}</p>
                <p className="mt-4 text-sm font-extrabold text-saffron">{price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
