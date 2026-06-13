import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { travelStyles } from "../../data/destinations";

export default function TravelStyles() {
  return (
    <>
      <section className="bg-white py-14">
        <div className="container-pad grid grid-cols-2 gap-6 text-center md:grid-cols-5">
          {["9,800+ Happy Travellers", "35+ Indian Destinations", "4.8/5 Guest Rating", "24/7 Travel Support", "100% Custom Plans"].map((stat) => (
            <div key={stat}>
              <p className="font-display text-3xl font-medium text-navy">{stat.split(" ")[0]}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-ink/55">{stat.substring(stat.indexOf(" ") + 1)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-ivory py-20">
        <div className="container-pad grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow">Choose Your Journey</p>
            <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-navy md:text-5xl">Travel Your Way</h2>
            <p className="mt-4 leading-7 text-ink/70">Whether you want mountain air, ocean days, cultural depth or luxury downtime, we shape the route around your style.</p>
            <a href="#final-cta" className="orange-btn mt-7">Customize My Trip <ArrowRight size={17} /></a>
          </div>
          <div className="grid auto-rows-[210px] grid-cols-2 gap-4">
            {travelStyles.map(([title, image], index) => (
              <div key={title} className={`group relative overflow-hidden rounded-[22px] shadow-premium ${index === 0 ? "row-span-2" : ""}`}>
                <Image src={image} alt={title} fill sizes="(min-width: 1024px) 30vw, 50vw" className="image-zoom object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 to-transparent" />
                <h3 className="absolute bottom-5 left-5 font-display text-2xl font-medium text-white">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
