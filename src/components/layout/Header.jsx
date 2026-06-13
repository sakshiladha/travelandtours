"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { destinations } from "../../data/destinations";
import { packages } from "../../data/packages";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = ["Home", "Packages", "Destinations", "Car Rental", "Seasonal Tours", "About", "Contact"];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white shadow-navy backdrop-blur-xl">
      <div className="container-pad flex h-16 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron text-sm font-black">IT</span>
          <span>
            <span className="block font-display text-lg font-medium leading-none">India Tours</span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-white/60">& Travels</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
          {nav.map((item) => (
            <div key={item} className="group relative py-6">
              <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="flex items-center gap-1 text-white/80 transition hover:text-white">
                {item}
                {(item === "Packages" || item === "Destinations") && <ChevronDown size={14} />}
              </a>
              {(item === "Packages" || item === "Destinations") && (
                <div className="invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 translate-y-3 rounded-2xl border border-white/10 bg-white p-5 text-navy opacity-0 shadow-premium transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-3">
                    {(item === "Packages" ? packages.slice(0, 4) : destinations.slice(0, 6)).map((entry) => (
                      <a key={entry[1]} href={item === "Packages" ? "#packages" : "#destinations"} className="rounded-xl p-3 transition hover:bg-ivory">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">{entry[0]}</span>
                        <span className="mt-1 block font-display text-lg font-medium">{entry[1]}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div className="text-right text-xs text-white/70">
            <div>+91 98765 43210</div>
            <div>hello@indiatours.example</div>
          </div>
          <a href="#final-cta" className="orange-btn px-4 py-2">Plan My Trip</a>
        </div>

        <button className="grid h-10 w-10 place-items-center rounded-full bg-white/10 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="container-pad pb-5 lg:hidden">
          <div className="grid gap-2 rounded-2xl bg-white p-3 text-navy">
            {nav.map((item) => (
              <a key={item} className="rounded-xl px-3 py-2 font-semibold hover:bg-ivory" href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
