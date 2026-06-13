"use client";

import { useState } from "react";
import Image from "next/image";
import { seasonalTours } from "../../data/seasonalTours";

export default function SeasonalDestinations() {
  const [season, setSeason] = useState("Winter");

  return (
    <section id="seasonal-tours" className="bg-ivory py-20">
      <div className="container-pad">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Seasonal Destinations</p>
            <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-navy md:text-5xl">When India <span className="italic text-saffron">comes alive.</span></h2>
          </div>
          <div className="flex flex-wrap gap-2 rounded-full bg-white p-2 shadow-sm">
            {Object.keys(seasonalTours).map((tab) => (
              <button key={tab} onClick={() => setSeason(tab)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${season === tab ? "bg-navy text-white" : "text-navy hover:bg-ivory"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {seasonalTours[season].map(([name, tag, price, image]) => (
            <article key={name} className="group relative h-80 overflow-hidden rounded-[22px] shadow-premium">
              <Image src={image} alt={name} fill sizes="(min-width: 768px) 33vw, 100vw" className="image-zoom object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/88 via-navy/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-forest">{tag}</span>
                <div className="mt-4 flex items-end justify-between">
                  <h3 className="font-display text-3xl font-medium">{name}</h3>
                  <p className="font-bold text-gold">{price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
