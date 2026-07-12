import { FaWhatsapp } from "react-icons/fa6";
import { PiMapPinLine, PiPhone } from "react-icons/pi";
import { site, waLink } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-[clamp(5rem,10vw,8.5rem)]">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.08] text-ivory">
            Come find us in{" "}
            <em className="text-gold">Hejjala&nbsp;Gate</em>
          </h2>
          <address className="mt-8 flex items-start gap-4 not-italic">
            <PiMapPinLine size={24} aria-hidden className="mt-1 shrink-0 text-gold" />
            <p className="text-lg leading-relaxed text-ivory/85">
              {site.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </address>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-line mt-8"
          >
            Get Directions
          </a>
          <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-stone">
            Contact the academy for current batch timings and programme
            availability.
          </p>
        </div>

        <div className="reveal flex flex-col justify-center gap-8 border-t border-hairline pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-stone uppercase">
              Call us now
            </p>
            <div className="mt-4 space-y-3">
              {site.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="font-display flex min-h-11 w-fit items-center gap-4 text-[clamp(1.5rem,3vw,2.125rem)] text-ivory transition-colors hover:text-gold"
                >
                  <PiPhone size={24} aria-hidden className="text-gold" />
                  {p.display}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-stone uppercase">
              Or message the academy
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-4"
            >
              <FaWhatsapp size={19} aria-hidden />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
