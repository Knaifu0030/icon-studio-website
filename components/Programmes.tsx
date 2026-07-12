import { FaWhatsapp } from "react-icons/fa6";
import { PiArrowRight } from "react-icons/pi";
import {
  danceProgrammes,
  moreStyles,
  photo,
  photoSrcSet,
  waLink,
} from "@/lib/site";

function programmeMessage(name: string) {
  return `Hello A ICON Dance Academy, I would like to enquire about your ${name} classes. Please share the available batch timings and fee details.`;
}

export default function Programmes() {
  return (
    <section id="classes" className="scroll-mt-20 pb-[clamp(5rem,10vw,8.5rem)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-3xl">
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.06] text-ivory">
            Dance classes for{" "}
            <em className="text-gold">all ages</em>
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg text-stone">
            From cinematic expression to energetic street movement, explore
            programmes designed to help every learner find a style that feels
            like their own.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-16 lg:grid-cols-12">
          {danceProgrammes.map((p) => (
            <article
              key={p.slug}
              className={`reveal group ${p.wide ? "lg:col-span-7" : "lg:col-span-5"}`}
            >
              <div
                className={`img-frame img-zoom ${p.wide ? "aspect-[16/10]" : "aspect-[4/3]"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo(p.image.id, 900)}
                  srcSet={photoSrcSet(p.image.id, [500, 900, 1300])}
                  sizes={
                    p.wide
                      ? "(min-width: 1024px) 56vw, 100vw"
                      : "(min-width: 1024px) 40vw, 100vw"
                  }
                  alt={p.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-6 flex flex-col gap-1 border-t border-hairline pt-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-display text-3xl text-ivory">{p.name}</h3>
                <p className="font-display text-base text-gold italic sm:shrink-0 sm:text-lg">
                  {p.tagline}
                </p>
              </div>
              <p className="mt-3 max-w-[52ch] text-stone">{p.copy}</p>
              <a
                href={waLink(programmeMessage(p.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-[0.8125rem] font-bold tracking-[0.14em] text-gold uppercase transition-colors hover:text-ivory"
              >
                Enquire about {p.name}
                <PiArrowRight aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>

        <div className="reveal mt-20 flex flex-col gap-6 border-y border-hairline py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-3xl text-ivory">
              {moreStyles.name}
              <span className="text-gold"> — </span>
              <em className="text-gold">{moreStyles.tagline}</em>
            </h3>
            <p className="mt-2 max-w-[52ch] text-stone">{moreStyles.copy}</p>
          </div>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-line shrink-0"
          >
            <FaWhatsapp size={18} aria-hidden />
            Ask about styles
          </a>
        </div>
      </div>
    </section>
  );
}
