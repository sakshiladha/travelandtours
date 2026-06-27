"use client";

import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { megaRegions, navItems } from "../../data/megaMenuData";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState("north");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);
  const [mobileRegion, setMobileRegion] = useState("north");

  const currentMobileRegion = megaRegions.find((region) => region.key === mobileRegion) || megaRegions[0];

  return (
    <div className="relative bg-[linear-gradient(105deg,#07172F_0%,#121D35_58%,#352320_100%)] text-white" onMouseLeave={() => setMegaOpen(false)}>
      <div className="mx-auto flex h-[86px] max-w-[1650px] items-center justify-between px-5 sm:px-8 lg:h-[100px]">
        <a href="#home" className="flex items-center gap-3">
          {/* <span className="grid h-12 w-12 place-items-center rounded-full bg-saffron font-display text-2xl font-medium text-navy">I</span>
          <span className="leading-none">
            <span className="block font-display text-[29px] font-medium tracking-[-0.03em]">Indus & Co.</span>
            <span className="mt-1 block text-[12px] font-medium uppercase tracking-[0.42em] text-saffron">Luxury India Travel</span>
          </span> */}
          <Image src="/images/Logo/logonewtravel.png" alt="Indus & Co. logo" width={220} height={64} priority className="hidden h-16 w-auto sm:block" />
        </a>

        <nav className="hidden items-center gap-9 text-[15px] font-bold text-white/72 lg:flex xl:gap-12">
          {navItems.map((item) => {
            const isMega = item.mega;
            return (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => {
                  if (isMega) {
                    setMegaOpen(true);
                    setActiveRegion("north");
                  }
                }}
                className={`flex items-center gap-1.5 py-10 transition hover:text-saffron ${isMega && megaOpen ? "text-saffron" : ""}`}
              >
                {item.label}
                {isMega && <ChevronDown size={16} />}
              </a>
            );
          })}
        </nav>

        <a href="#final-cta" className="hidden rounded-full bg-saffron px-6 py-4 text-[16px] font-extrabold text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500 lg:inline-flex">
          Plan My Trip
        </a>

        <button className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle navigation">
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <MegaMenu open={megaOpen} regions={megaRegions} activeRegion={activeRegion} onRegionChange={setActiveRegion} onMouseEnter={() => setMegaOpen(true)} />

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy px-4 pb-6 lg:hidden">
          <div className="grid gap-2 py-4">
            {navItems.map((item) => {
              if (item.mega) {
                return (
                  <div key={item.label} className="overflow-hidden rounded-2xl bg-white/6">
                    <button className="flex w-full items-center justify-between px-4 py-4 text-left text-base font-bold text-white" onClick={() => setMobileDestinationsOpen((value) => !value)}>
                      {item.label}
                      <ChevronDown className={`transition ${mobileDestinationsOpen ? "rotate-180 text-saffron" : ""}`} size={18} />
                    </button>
                    {mobileDestinationsOpen && (
                      <div className="grid gap-4 border-t border-white/10 bg-white px-4 py-5 text-navy">
                        <div className="grid gap-2">
                          {megaRegions.map((region) => (
                            <button key={region.key} onClick={() => setMobileRegion(region.key)} className={`rounded-xl border-l-4 px-3 py-3 text-left font-bold transition ${mobileRegion === region.key ? "border-saffron bg-ivory text-saffron" : "border-transparent bg-white text-navy"}`}>
                              {region.label}
                            </button>
                          ))}
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2">
                          {currentMobileRegion.groups.map((group) => (
                            <div key={group.title}>
                              <h3 className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-saffron">{group.title}</h3>
                              <div className="grid gap-1.5">
                                {group.links.map((link) => (
                                  <a key={link} href="#destinations" onClick={() => setMobileOpen(false)} className="font-medium text-navy hover:text-saffron">
                                    {link}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-2xl px-4 py-4 text-base font-bold text-white/85 hover:bg-white/10 hover:text-saffron">
                  {item.label}
                </a>
              );
            })}
            <a href="#final-cta" onClick={() => setMobileOpen(false)} className="mt-2 rounded-full bg-saffron px-5 py-4 text-center font-extrabold text-navy">
              Plan My Trip
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
