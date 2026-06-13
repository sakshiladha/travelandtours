export default function Footer() {
  return (
    <footer className="bg-navy py-14 text-white">
      <div className="container-pad grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-saffron text-sm font-black">IT</span>
            <div>
              <p className="font-display text-xl font-medium">India Tours & Travels</p>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">Luxury India journeys</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">Premium India tour packages, private car rentals and custom travel plans for families, couples, groups and international guests.</p>
          <div className="mt-5 flex gap-3">
            {["f", "in", "ig", "yt"].map((item) => <span key={item} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs font-bold">{item}</span>)}
          </div>
        </div>

        {[
          ["Packages", ["Golden Triangle", "Rajasthan Heritage", "Kerala Escape", "Kashmir Tour"]],
          ["Destinations", ["Kashmir", "Ladakh", "Rajasthan", "Varanasi"]],
          ["Car Rental", ["Sedan Rental", "SUV Rental", "Tempo Traveller", "Airport Transfer"]]
        ].map(([title, links]) => (
          <div key={title}>
            <h3 className="font-bold text-gold">{title}</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/60">
              {links.map((link) => <a key={link} href="#" className="hover:text-white">{link}</a>)}
            </div>
          </div>
        ))}

        <div>
          <h3 className="font-bold text-gold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/62">
            <span>+91 98765 43210</span>
            <span>hello@indiatours.example</span>
            <span>New Delhi, India</span>
          </div>
          <div className="mt-5 flex overflow-hidden rounded-full bg-white p-1">
            <input className="min-w-0 flex-1 px-4 text-sm text-navy outline-none" placeholder="Email address" />
            <button className="rounded-full bg-saffron px-4 py-2 text-sm font-bold">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container-pad mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row">
        <span>© 2026 India Tours & Travels. All rights reserved.</span>
        <span>Privacy Policy · Terms · Responsible Travel</span>
      </div>
    </footer>
  );
}
