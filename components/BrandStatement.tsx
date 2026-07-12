import { site } from "@/lib/site";

const pillars = [
  {
    word: "Discover",
    copy: "Explore rhythm, movement and personal expression.",
    indent: "lg:pl-0",
  },
  {
    word: "Learn",
    copy: "Develop technique through focused professional guidance.",
    indent: "lg:pl-[12%]",
  },
  {
    word: "Transform",
    copy: "Build confidence, discipline, fitness and stage presence.",
    indent: "lg:pl-[24%]",
  },
];

export default function BrandStatement() {
  return (
    <section id="about" className="scroll-mt-20 py-[clamp(5.5rem,12vw,10rem)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="reveal max-w-[46ch] text-[clamp(1.25rem,2.2vw,1.625rem)] leading-[1.6] text-ivory/90">
          Dance begins with a step, but grows into confidence, discipline and
          self-expression. At A ICON Dance Academy, every learner is
          encouraged to{" "}
          <span className="text-gold">discover their rhythm</span>, strengthen
          their technique and transform their movement into something
          memorable.
        </p>

        <div className="mt-20 flex flex-col">
          {pillars.map((p) => (
            <div
              key={p.word}
              className={`reveal border-t border-hairline py-10 last:border-b lg:py-12 ${p.indent}`}
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-baseline lg:gap-12">
                <h2 className="font-display text-[clamp(2.75rem,7vw,5.25rem)] leading-none tracking-[-0.01em] text-ivory">
                  {p.word}
                  <span className="text-gold">.</span>
                </h2>
                <p className="max-w-[38ch] text-base text-stone lg:text-lg">
                  {p.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal font-display mt-16 text-right text-[clamp(1.5rem,3vw,2.25rem)] text-gold italic">
          {site.taglineSecondary}
        </p>
      </div>
    </section>
  );
}
