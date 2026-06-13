"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["Can I customize my India tour package?", "Yes. Every itinerary can be adjusted by month, budget, hotel style, pace, interests and traveller type."],
  ["Do you provide private car with driver?", "Yes. We arrange private sedans, SUVs, tempo travellers and luxury cars with experienced local drivers."],
  ["Which destinations are best for family trips?", "Kashmir, Rajasthan, Kerala, Himachal, Goa and the Golden Triangle are excellent family-friendly choices."],
  ["Can I book only car rental?", "Yes. You can book only airport transfers, outstation taxis, local sightseeing cars or multi-city rentals."],
  ["Do you arrange hotels and sightseeing?", "Yes. We can support hotels, sightseeing routes, local guides, transfers and complete day-wise planning."],
  ["How do I start planning my trip?", "Share your travel dates, number of travellers, budget and interests. We will suggest destinations and a custom plan."]
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="contact" className="bg-ivory py-20">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Frequently Asked</p>
          <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-navy md:text-5xl">Everything you wanted to ask before booking</h2>
          <p className="mt-4 leading-7 text-ink/70">Clear travel planning answers for custom India holidays and private car rental.</p>
        </div>
        <div className="rounded-3xl bg-white p-3 shadow-premium">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="border-b border-navy/8 last:border-0">
              <button className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left font-semibold text-navy" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                {question}
                <ChevronDown className={`shrink-0 transition ${openFaq === index ? "rotate-180 text-saffron" : ""}`} size={18} />
              </button>
              <div className={`grid transition-all duration-300 ${openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-4 pb-5 leading-7 text-ink/65">{answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
