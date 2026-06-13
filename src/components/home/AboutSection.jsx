import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { pexels } from "../../data/destinations";

export default function AboutSection() {
  return (
    <section id="about" className="bg-ivory py-20">
      <div className="container-pad grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="soft-card group relative overflow-hidden p-3 reveal">
          <div className="relative h-[390px] overflow-hidden rounded-[16px]">
            <Image src={pexels(3183197)} alt="Travellers planning India tour" fill sizes="(min-width: 1024px) 45vw, 100vw" className="image-zoom object-cover" />
          </div>
          <div className="absolute bottom-8 left-8 rounded-2xl bg-white px-5 py-4 shadow-premium">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-saffron">Trip concierge</p>
            <p className="font-display text-lg font-medium text-navy">Your Private Chauffeur & Consultant</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">About India Tours & Travels</p>
          <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-navy md:text-5xl">Your Trusted India Travel Partner</h2>
          <p className="mt-4 leading-7 text-ink/70">We create thoughtfully planned India tour packages with private car rental, local drivers, safe routing and flexible day-wise itineraries. From Kashmir valleys to Kerala backwaters, our team helps families, couples, groups and international travellers experience India with comfort and confidence.</p>
          <div className="mt-8 grid gap-4">
            {["Custom trips for every traveller", "Private cars with experienced drivers", "Local support from planning to return"].map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <BadgeCheck className="text-forest" /> <span className="font-semibold text-navy">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
