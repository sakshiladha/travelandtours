import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { pexels } from "../../data/destinations";

export default function HeroSection() {
  return (
    <section id="home" className="bg-ivory px-4 py-5 sm:px-5 lg:py-6">
      <div className="mx-auto grid max-w-[1600px] gap-5 lg:grid-cols-[52fr_48fr]">
        <article className="hero-card group relative h-[560px] overflow-hidden rounded-[28px] bg-navy opacity-0 shadow-navy md:h-[640px] lg:h-[720px]">
          <Image
            src={pexels(3881104, 1500, 1100)}
            alt="Luxury Indian architecture hero placeholder"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="scale-100 object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_36%,rgba(249,115,22,0.22),transparent_24rem)]" />
          <div className="relative z-10 flex h-full flex-col justify-center px-8 py-12 font-body text-white sm:px-12 lg:px-14 xl:px-16">
            <div className="mb-8 flex w-fit items-center rounded-full bg-white/16 p-1.5 backdrop-blur-sm">
              <span className="rounded-full bg-white px-3 py-1 text-lg font-medium leading-none text-ink">#01</span>
              <span className="px-3 text-base font-semibold text-white">Travel Agency</span>
            </div>

            <h1 className="max-w-[780px] font-body text-[42px] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[64px] xl:text-[72px]">
              Explore <span className="font-medium italic text-[#F0C84B]">Incredible India</span> with the Best India Tour Packages
            </h1>

            <p className="mt-7 max-w-[710px] text-base font-medium leading-8 text-white/88 sm:text-lg lg:text-[19px]">
              Discover the beauty, culture, heritage, spirituality, and adventure of India through carefully curated tours and personalized travel experiences. Explore Rajasthan, Kashmir, Kerala, Ladakh, Varanasi, Goa, and more with expert planning and private transportation.
            </p>

            <div className="mt-9">
              <a href="#packages" className="inline-flex items-center gap-8 rounded-full bg-white px-8 py-5 text-lg font-medium text-saffron shadow-premium transition duration-300 hover:-translate-y-1 hover:bg-saffron hover:text-white sm:text-xl">
                Explore Tours <ArrowRight size={22} />
              </a>
            </div>
          </div>
        </article>

        <article className="hero-card group relative h-[560px] overflow-hidden rounded-[28px] bg-navy opacity-0 shadow-navy md:h-[640px] lg:h-[720px]">
          <Image
            src={pexels(3881092, 1450, 1100)}
            alt="Premium Rajasthan desert camel safari hero placeholder"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="scale-100 object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/82 via-navy/28 to-transparent" />
          <div className="absolute bottom-9 left-8 right-8 z-10 flex flex-col gap-7 font-body text-white sm:left-12 sm:right-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[470px]">
              <h2 className="text-[28px] font-semibold italic leading-tight sm:text-[34px]">Discover Incredible India</h2>
              <p className="mt-4 text-base font-medium leading-7 text-white/88 sm:text-lg">
                Explore unforgettable journeys across India&apos;s most beautiful destinations.
              </p>
            </div>
            <a href="#about" className="inline-flex shrink-0 items-center justify-center gap-5 rounded-full bg-white px-8 py-5 text-lg font-medium text-ink shadow-premium transition duration-300 hover:-translate-y-1 hover:bg-saffron hover:text-white sm:text-xl">
              About Us <ArrowRight size={24} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
