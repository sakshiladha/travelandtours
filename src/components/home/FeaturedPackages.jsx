import Image from "next/image";
import { Clock, Star } from "lucide-react";
import { packages } from "../../data/packages";

export default function FeaturedPackages() {
  return (
    <section id="packages" className="bg-navy py-24 text-white">
      <div className="container-pad">
        <p className="eyebrow">Featured Packages</p>
        <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-white md:text-5xl">Tours that read like <span className="italic text-gold">stories.</span></h2>
        <p className="mt-4 max-w-3xl leading-7 text-white/68">Premium India tour packages with private transfers, smart routing and trusted local support.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map(([badge, title, route, days, rating, price, image]) => (
            <article key={title} className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.06] shadow-navy transition duration-300 hover:-translate-y-2 hover:bg-white/[0.09]">
              <div className="relative h-56 overflow-hidden">
                <Image src={image} alt={title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="image-zoom object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-saffron px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">{badge}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/60">{route}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-white/70">
                  <span className="flex items-center gap-2"><Clock size={16} /> {days}</span>
                  <span className="flex items-center gap-1 text-gold"><Star size={16} fill="currentColor" /> {rating}</span>
                </div>
                <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/45">Starting from</span>
                  <span className="font-display text-2xl font-medium text-saffron">{price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
