import Image from "next/image";
import { Quote } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F7F7F6] py-[110px]">
      <div className="container-pad grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative h-[430px] overflow-hidden rounded-[22px] shadow-[0_20px_50px_rgba(7,23,47,0.12)] sm:h-[520px] lg:h-[560px]">
          <Image
            src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop"
            alt="Travellers exploring a city with a map"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />

          <div className="absolute bottom-6 left-6 right-6 flex min-h-[105px] items-center gap-6 rounded-[14px] bg-white px-6 py-5 shadow-[0_18px_45px_rgba(7,23,47,0.18)] sm:bottom-9 sm:left-9 sm:right-9 sm:px-9">
            <Quote className="shrink-0 text-[#1677C8]" size={34} strokeWidth={2.4} />
            <p className="text-lg font-bold leading-snug text-navy sm:text-[22px]">
              Your trusted partner for unforgettable India travel experiences
            </p>
          </div>
        </div>

        <div className="lg:pl-2">
          <h2 className="max-w-[760px] font-display text-[36px] font-medium leading-[1.1] tracking-[-1px] text-[#073B66] sm:text-[44px] lg:text-[52px]">
            Your Trusted India Travel Partner
          </h2>

          <div className="mt-8 max-w-[720px] space-y-7 font-body text-base font-normal leading-[1.8] text-[#30343B] sm:text-[19px]">
            <p>
              India Tours & Travels is a leading travel company offering customized India tour packages, pilgrimage tours, festival tours, family holidays, honeymoon packages, group tours, and car rental services across India.
            </p>
            <p>
              Our mission is to help travelers discover the true essence of India through carefully planned journeys covering famous tourist destinations, historical monuments, spiritual sites, cultural festivals, wildlife experiences, and hidden gems.
            </p>
            <p>
              Whether you want to explore the Himalayas, visit sacred temples, experience colorful festivals, or enjoy a relaxing beach vacation, we create unforgettable travel experiences tailored to your preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
