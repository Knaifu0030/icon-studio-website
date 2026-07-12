import { experienceImage, journey, photo, photoSrcSet } from "@/lib/site";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate scroll-mt-20 overflow-hidden py-[clamp(6rem,12vw,11rem)]"
    >
      <div className="parallax-img absolute inset-0 -z-10" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo(experienceImage.id, 1600, 60)}
          srcSet={photoSrcSet(experienceImage.id, [900, 1600], 60)}
          sizes="100vw"
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-obsidian/82" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,var(--color-obsidian),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,var(--color-obsidian),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="reveal font-display max-w-[18ch] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.06] text-ivory">
          The A ICON <em className="text-gold">experience</em>
        </h2>
        <p className="reveal mt-5 max-w-[54ch] text-lg text-ivory/75">
          A learner&rsquo;s journey at the academy, from the first step to the
          first stage.
        </p>

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((j) => (
            <li key={j.step} className="reveal relative border-t border-gold/30 pt-6">
              <span
                className="font-display absolute -top-5 right-0 text-[4.5rem] leading-none text-gold/25"
                aria-hidden
              >
                {j.step}
              </span>
              <h3 className="font-display text-2xl text-ivory">
                <span className="sr-only">{j.step} — </span>
                {j.name}
              </h3>
              <p className="mt-3 max-w-[36ch] text-ivory/70">{j.copy}</p>
            </li>
          ))}
        </ol>

        <blockquote className="reveal mx-auto mt-24 max-w-4xl text-center">
          <p className="font-display text-[clamp(1.625rem,3.6vw,2.75rem)] leading-[1.3] text-ivory italic">
            &ldquo;Every move is an opportunity to discover what you are
            capable&nbsp;of.&rdquo;
          </p>
          <footer className="kicker mt-8 before:hidden">
            <span className="mx-auto inline-flex items-center gap-3.5">
              <span className="h-px w-10 bg-gold/70" aria-hidden />
              A ICON Dance Academy
              <span className="h-px w-10 bg-gold/70" aria-hidden />
            </span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
