import { Bus, Car, MapPin, Plane, Sparkles } from "lucide-react";

const rentals = [
  [Car, "Sedan Rental", "Comfortable city and outstation rides for couples and small families."],
  [Car, "SUV Rental", "Spacious cars for hill roads, families and longer India journeys."],
  [Bus, "Tempo Traveller", "Group-friendly vehicles with luggage space and experienced drivers."],
  [Plane, "Airport Transfer", "Reliable pickup and drop service with clear coordination."],
  [MapPin, "Outstation Taxi", "Flexible one-way and round-trip taxi plans across India."],
  [Sparkles, "Luxury Cars", "Premium cars for special occasions, VIP guests and luxury tours."]
];

export default function CarRentalSection() {
  return (
    <section id="car-rental" className="bg-navy py-24 text-white">
      <div className="container-pad">
        <p className="eyebrow">Car Rental Services</p>
        <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-white md:text-5xl">Private car rental across India</h2>
        <p className="mt-4 max-w-3xl leading-7 text-white/68">Book clean, comfortable cars with professional drivers for airport transfers, city sightseeing, outstation trips and multi-day holidays.</p>
        <div className="mt-9 flex flex-wrap gap-2">
          {["Transparent pricing", "Sanitized cars", "Local routes", "Custom pickup", "Hill drivers"].map((tag) => <span key={tag} className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/65">{tag}</span>)}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rentals.map(([Icon, title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-saffron text-white"><Icon size={21} /></span>
              <h3 className="mt-5 font-display text-2xl font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/62">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
