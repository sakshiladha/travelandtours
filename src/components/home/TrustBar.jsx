import { Car, Compass, Headphones, MapPin, ShieldCheck } from "lucide-react";
import { trustItems } from "../../data/destinations";

const icons = [Car, Compass, MapPin, ShieldCheck, Headphones];

export default function TrustBar() {
  return (
    <section className="bg-white py-5">
      <div className="container-pad grid grid-cols-2 gap-3 md:grid-cols-5">
        {trustItems.map((label, index) => {
          const Icon = icons[index];
          return (
            <div key={label} className="flex items-center justify-center gap-2 rounded-2xl bg-ivory px-3 py-4 text-sm font-bold text-navy">
              <Icon className="text-saffron" size={18} /> {label}
            </div>
          );
        })}
      </div>
    </section>
  );
}
