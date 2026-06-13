import { Star } from "lucide-react";

const reviews = [
  ["Our Kashmir trip was beautifully arranged. The driver was kind, hotels were warm, and the plan felt relaxed.", "Priya Shah", "Kashmir Family Tour"],
  ["Transparent pricing and excellent Rajasthan route planning. Every palace stop felt timed perfectly.", "James Walker", "Rajasthan Heritage Tour"],
  ["The Kerala houseboat and Munnar transfers were seamless. Support stayed available throughout.", "Neha & Arjun Mehta", "Kerala Backwater Escape"]
];

export default function Testimonials() {
  return (
    <section className="bg-navy py-24 text-white">
      <div className="container-pad">
        <p className="eyebrow">Testimonials</p>
        <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-white md:text-5xl">Real stories from real travellers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map(([review, name, trip]) => (
            <article key={name} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <div className="flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div>
              <p className="mt-5 leading-7 text-white/75">&ldquo;{review}&rdquo;</p>
              <p className="mt-6 font-display text-xl font-medium">{name}</p>
              <p className="text-sm text-saffron">{trip}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
