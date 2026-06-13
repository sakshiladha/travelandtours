import { BadgeCheck, Compass, Headphones, ShieldCheck, Users, WalletCards } from "lucide-react";

const reasons = [
  [Compass, "Custom Made Itineraries", "Trips shaped around your pace, budget and travel month."],
  [BadgeCheck, "Expert Local Drivers", "Verified chauffeurs who know routes, stops and local timing."],
  [Users, "Flexible Packages", "Family, couple, group and international traveller friendly plans."],
  [WalletCards, "Transparent Pricing", "Clear inclusions and no confusing last-minute surprises."],
  [ShieldCheck, "Safe & Comfortable Travel", "Clean vehicles, sensible routing and reliable support."],
  [Headphones, "24/7 Travel Support", "Planning help before departure and assistance until return."]
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ivory py-20">
      <div className="container-pad">
        <p className="eyebrow">Why Choose Us</p>
        <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-navy md:text-5xl">Trusted by travellers across India and abroad</h2>
        <p className="mt-4 max-w-3xl leading-7 text-ink/70">A travel team built around honest advice, safe ground handling and dependable local help.</p>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([Icon, title, text]) => (
            <div key={title} className="soft-card p-6 transition duration-300 hover:-translate-y-1">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-white"><Icon size={21} /></span>
              <h3 className="mt-5 font-display text-xl font-medium text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
