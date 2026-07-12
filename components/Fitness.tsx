import { fitnessProgrammes, photo, photoSrcSet } from "@/lib/site";

export default function Fitness() {
  return (
    <section
      id="fitness"
      className="scroll-mt-20 bg-ivory py-[clamp(5rem,10vw,8.5rem)] text-obsidian"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Vertical editorial label */}
          <div className="hidden lg:col-span-1 lg:flex lg:justify-center">
            <p
              className="text-[0.75rem] font-bold tracking-[0.3em] text-burgundy uppercase"
              style={{ writingMode: "vertical-rl" }}
              aria-hidden
            >
              Fitness classes for a better you
            </p>
          </div>

          <div className="lg:col-span-11">
            <div className="reveal max-w-3xl">
              <p className="text-[0.8125rem] font-bold tracking-[0.2em] text-burgundy uppercase lg:sr-only">
                Fitness classes for a better you
              </p>
              <h2 className="font-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.06] lg:mt-0">
                Move stronger.{" "}
                <em className="text-burgundy">Feel better.</em>
              </h2>
              <p className="mt-6 max-w-[58ch] text-lg text-[#4b463c]">
                Movement is for every body. Alongside its dance programmes,
                the academy runs fitness sessions that build strength, stamina
                and calm — one class at a time.
              </p>
            </div>

            <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
              {fitnessProgrammes.map((f, i) => (
                <article key={f.slug} className={`reveal ${i === 1 ? "md:mt-10" : ""}`}>
                  <div className="img-frame img-zoom aspect-[4/5]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo(f.image.id, 700)}
                      srcSet={photoSrcSet(f.image.id, [450, 700, 1000])}
                      sizes="(min-width: 768px) 30vw, 100vw"
                      alt={f.image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-5 border-t-2 border-obsidian/80 pt-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                      <h3 className="font-display text-2xl">{f.name}</h3>
                      <p className="font-display text-burgundy italic">
                        {f.tagline}
                      </p>
                    </div>
                    <p className="mt-2 text-[#4b463c]">{f.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
