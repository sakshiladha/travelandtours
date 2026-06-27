import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex h-10 w-full items-center justify-center bg-[#E7B600] px-4 text-navy">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-bold sm:text-[15px]">
        <a href="tel:0000000000" className="flex items-center gap-2 transition hover:text-saffron">
          <Phone size={16} strokeWidth={2.4} />
          <span>0000000000</span>
        </a>
        <span className="hidden h-5 w-px bg-navy/70 sm:block" />
        <a href="mailto:indiatoursandtravels@gmail.com" className="flex items-center gap-2 transition hover:text-saffron">
          <Mail size={16} strokeWidth={2.4} />
          <span>indiatoursandtravels@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
