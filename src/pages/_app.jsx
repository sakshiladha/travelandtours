import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fraunces",
  display: "swap"
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap"
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${fraunces.variable} ${plusJakarta.variable} font-body`}>
      <Component {...pageProps} />
    </main>
  );
}
