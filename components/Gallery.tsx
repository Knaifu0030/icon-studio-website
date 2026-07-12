import { galleryImages, photo, photoSrcSet, site } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 py-[clamp(5rem,10vw,8.5rem)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-[14ch] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.06] text-ivory">
            Moments in <em className="text-gold">motion</em>
          </h2>
          <p className="max-w-[44ch] text-stone md:text-right">
            Studio sessions, choreography, fitness and stage light — a glimpse
            of the world the academy is built around.
          </p>
        </div>

        <div className="mt-14 columns-2 gap-4 md:columns-3 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
          {galleryImages.slice(0, 3).map((g) => (
            <figure key={g.id} className="reveal-soft break-inside-avoid">
              <div className={`img-frame img-zoom ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo(g.id, 700)}
                  srcSet={photoSrcSet(g.id, [450, 700, 1000])}
                  sizes="(min-width: 768px) 31vw, 47vw"
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-2.5 text-sm tracking-wide text-stone">
                {g.caption}
              </figcaption>
            </figure>
          ))}

          <div className="reveal-soft flex break-inside-avoid flex-col justify-center gap-4 border border-hairline bg-charcoal p-8">
            <p className="font-display text-2xl leading-snug text-gold italic">
              {site.taglineSecondary}
            </p>
            <p className="text-sm leading-relaxed text-stone">
              New batches, performances and studio moments from the academy
              will fill this space soon.
            </p>
          </div>

          {galleryImages.slice(3).map((g) => (
            <figure key={g.id} className="reveal-soft break-inside-avoid">
              <div className={`img-frame img-zoom ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo(g.id, 700)}
                  srcSet={photoSrcSet(g.id, [450, 700, 1000])}
                  sizes="(min-width: 768px) 31vw, 47vw"
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-2.5 text-sm tracking-wide text-stone">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
