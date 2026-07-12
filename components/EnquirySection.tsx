import { PiPhone } from "react-icons/pi";
import { site } from "@/lib/site";
import EnquiryForm from "@/components/EnquiryForm";

export default function EnquirySection() {
  return (
    <section
      id="enquire"
      className="scroll-mt-20 border-y border-hairline bg-charcoal py-[clamp(5rem,10vw,8.5rem)]"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div className="reveal">
          <p className="kicker">Enrolments open</p>
          <h2 className="font-display mt-6 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.08] text-ivory">
            Find your rhythm at <span className="text-gold">A&nbsp;ICON</span>
          </h2>
          <p className="mt-6 max-w-[50ch] text-lg text-stone">
            Tell us what you are interested in and continue your enquiry
            directly through WhatsApp — your message opens in your own chat,
            ready to send.
          </p>

          <div className="mt-10 space-y-4 border-t border-hairline pt-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-stone uppercase">
              Prefer to talk?
            </p>
            {site.phones.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="group flex min-h-11 w-fit items-center gap-3 text-lg font-semibold text-ivory transition-colors hover:text-gold"
              >
                <PiPhone size={20} aria-hidden className="text-gold" />
                {p.display}
              </a>
            ))}
            <p className="max-w-[46ch] pt-2 text-sm leading-relaxed text-stone">
              Contact the academy for current batch timings, age-group
              availability and fee details.
            </p>
          </div>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}
