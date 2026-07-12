import { FaWhatsapp } from "react-icons/fa6";
import { PiPhone } from "react-icons/pi";
import { site, waLink } from "@/lib/site";

const enquiryPoints = [
  "Current batch timings",
  "Age-group availability",
  "Programme selection",
  "Fee details",
];

export default function EnrolCta() {
  return (
    <section id="enrol" className="texture scroll-mt-20 bg-burgundy py-[clamp(5rem,10vw,8.5rem)]">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-[0.8125rem] font-bold tracking-[0.22em] text-gold uppercase">
          {site.urgency} available
        </p>
        <h2 className="font-display mt-5 text-[clamp(2.75rem,7vw,5rem)] leading-[1.04] text-ivory">
          Classes start <em className="text-gold">soon</em>
        </h2>
        <p className="mx-auto mt-6 max-w-[50ch] text-lg text-ivory/85">
          Dance and fitness batches for different interests and age groups.
          Contact the academy for:
        </p>

        <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-x-2 gap-y-3 text-[0.9375rem] text-ivory/80">
          {enquiryPoints.map((point, i) => (
            <li key={point} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 text-gold/70" aria-hidden>
                  ·
                </span>
              )}
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <FaWhatsapp size={19} aria-hidden />
            Enquire on WhatsApp
          </a>
          <a href={`tel:${site.phones[0].tel}`} className="btn btn-line">
            <PiPhone size={18} aria-hidden />
            Call the Academy
          </a>
        </div>
      </div>
    </section>
  );
}
