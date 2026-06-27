import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function MegaMenu({ open, regions, activeRegion, onRegionChange, onMouseEnter }) {
  const region = regions.find((item) => item.key === activeRegion) || regions[0];

  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`absolute left-0 top-full hidden w-full origin-top border-t border-navy/5 bg-[#FFFCF6] shadow-[0_28px_70px_rgba(7,23,47,0.18)] transition duration-300 lg:block ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
      }`}
    >
      <div className="grid grid-cols-[300px_1fr_360px] gap-10 px-[110px] py-12">
        <aside className="rounded-[20px] bg-white/80 p-2 shadow-sm ring-1 ring-navy/5">
          {regions.map((item) => {
            const active = item.key === activeRegion;
            return (
              <button
                key={item.key}
                onMouseEnter={() => onRegionChange(item.key)}
                className={`flex w-full items-center justify-between rounded-2xl border-l-4 px-5 py-5 text-left text-[18px] font-semibold transition ${
                  active ? "border-saffron bg-ivory text-saffron" : "border-transparent text-navy hover:border-saffron/60 hover:bg-ivory/70 hover:text-saffron"
                }`}
              >
                {item.label}
                <ChevronRight size={18} />
              </button>
            );
          })}
        </aside>

        <div className="grid auto-rows-max grid-cols-3 gap-x-10 gap-y-8">
          {region.groups.map((group) => (
            <div key={group.title}>
              <div className="mb-3 flex items-center gap-3">
                <h3 className="whitespace-nowrap text-[15px] font-extrabold uppercase tracking-[0.18em] text-saffron">{group.title}</h3>
                <span className="h-px min-w-10 flex-1 bg-navy/12" />
              </div>
              <div className="grid gap-2.5">
                {group.links.map((link) => (
                  <a key={link} href="#destinations" className="text-[15px] font-medium leading-6 text-navy transition hover:translate-x-1 hover:text-saffron">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <article className="group relative h-[352px] overflow-hidden rounded-[22px] bg-navy shadow-navy">
          <Image key={region.card.title} src={region.card.image} alt={region.card.title} fill sizes="360px" className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/42 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.28em] text-saffron">{region.card.badge}</p>
            <h3 className="mt-3 font-display text-[31px] font-medium leading-none">{region.card.title}</h3>
            <p className="mt-4 text-[17px] font-semibold text-white/78">{region.card.price}</p>
            <a href="#destinations" className="mt-5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.22em] text-saffron transition hover:text-white">
              EXPLORE REGION →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
