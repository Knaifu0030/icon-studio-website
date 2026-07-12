import { PiCaretDown, PiPhone } from "react-icons/pi";
import { heroImage, photo, photoSrcSet, site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden">
      {/* Cinematic backdrop */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo(heroImage.id, 1600)}
          srcSet={photoSrcSet(heroImage.id, [800, 1200, 1600, 2000])}
          sizes="100vw"
          alt={heroImage.alt}
          fetchPriority="high"
          className="enter-img h-full w-full object-cover object-[70%_18%] sepia-[0.25]"
        />
        {/* Theatre grade: warm the highlights, sink the edges into obsidian */}
        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" aria-hidden />
        <div
          className="absolute inset-0 bg-[linear-gradient(78deg,var(--color-obsidian)_20%,rgba(9,9,9,0.78)_46%,rgba(9,9,9,0.32)_74%,rgba(9,9,9,0.5)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_top,var(--color-obsidian),transparent)]"
          aria-hidden
        />
        {/* Scrim so the transparent header stays readable over bright image areas */}
        <div
          className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(to_bottom,rgba(9,9,9,0.8),transparent)]"
          aria-hidden
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pt-40 pb-24 sm:px-8 sm:pb-28">
        <p className="kicker enter enter-1">
          {site.promo} · Enrolments open
        </p>

        <h1 className="font-display mt-7 max-w-[19ch] text-[clamp(2.7rem,7.4vw,5.5rem)] leading-[1.04] tracking-[-0.015em] text-ivory [text-shadow:0_2px_30px_rgba(9,9,9,0.9),0_0_8px_rgba(9,9,9,0.55)]">
          Move with purpose.{" "}
          <span className="enter enter-2 block">
            Perform with{" "}
            <em className="text-gold">confidence.</em>
          </span>
        </h1>

        <p className="enter enter-3 mt-7 max-w-[52ch] text-lg leading-relaxed text-ivory/80">
          {site.name} brings dance, movement and fitness together in a
          professionally guided environment for learners of all ages in
          Hejjala Gate, Bengaluru.
        </p>

        <div className="enter enter-4 mt-10 flex flex-wrap items-center gap-4">
          <a href="#enquire" className="btn btn-gold">
            Enrol Now
          </a>
          <a href="#classes" className="btn btn-line">
            Explore Classes
          </a>
          <a
            href={`tel:${site.phones[0].tel}`}
            className="group ml-1 inline-flex min-h-12 items-center gap-2.5 text-sm font-semibold text-ivory/85 transition-colors hover:text-gold"
          >
            <PiPhone size={18} aria-hidden className="text-gold" />
            Call {site.phones[0].display}
          </a>
        </div>

        <p className="enter enter-5 mt-9 inline-flex items-center gap-3 text-[0.8125rem] font-semibold tracking-[0.18em] text-stone uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-rouge" aria-hidden />
          {site.urgency} — dance classes for all ages
        </p>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="scroll-cue absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-gold/80 transition-colors hover:text-gold md:block"
      >
        <PiCaretDown size={22} aria-hidden />
      </a>
    </section>
  );
}
