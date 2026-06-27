import Image from "next/image";
import { MapPin, Star } from "lucide-react";

const destinations = [
  "Ladakh",
  "Himachal Pradesh",
  "Uttarakhand",
  "Delhi",
  "Uttar Pradesh",
  "Karnataka",
  "Kerala",
  "Rajasthan",
  "Goa",
  "Kashmir",
  "Varanasi",
  "Agra",
  "Jaipur",
  "Udaipur"
];

const avatars = [
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop"
];

function TickerTrack() {
  return (
    <div className="flex min-w-max items-center gap-16 pr-16">
      {destinations.map((name) => (
        <span key={name} className="flex items-center gap-3 whitespace-nowrap text-[20px] font-semibold text-navy">
          <MapPin className="text-navy" size={23} strokeWidth={2.4} />
          {name}
        </span>
      ))}
    </div>
  );
}

export default function DestinationTicker() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-[120px] max-w-[1600px] flex-col items-center gap-5 px-5 py-5 md:flex-row md:gap-10 md:py-0">
        <div className="flex shrink-0 items-center gap-4">
          <div className="flex -space-x-4 drop-shadow-[0_14px_22px_rgba(7,23,47,0.16)]">
            {avatars.map((avatar, index) => (
              <div key={avatar} className="relative h-12 w-12 overflow-hidden rounded-full border-[3px] border-white bg-ivory">
                <Image src={avatar} alt={`Traveller avatar ${index + 1}`} fill sizes="48px" className="object-cover" />
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 text-saffron">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={17} fill="currentColor" />
              ))}
            </div>
            <p className="mt-1 text-sm font-bold leading-none text-navy">4.9/5 rating</p>
            <p className="mt-1 text-xs font-semibold text-ink/55">Trusted by 1k+ travellers</p>
          </div>
        </div>

        <div className="group relative min-w-0 flex-1 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent" />
          <div className="ticker-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
            <TickerTrack />
            <TickerTrack />
          </div>
        </div>
      </div>
    </section>
  );
}
