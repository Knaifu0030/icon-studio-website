import {
  PiChalkboardTeacher,
  PiHandHeart,
  PiMaskHappy,
  PiMetronome,
  PiSparkle,
} from "react-icons/pi";
import { benefits } from "@/lib/site";

const icons = [PiChalkboardTeacher, PiHandHeart, PiMaskHappy, PiSparkle, PiMetronome];

export default function WhyAIcon() {
  return (
    <section className="border-b border-hairline bg-charcoal py-[clamp(5rem,10vw,8rem)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-[16ch] text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] text-ivory">
            More than a <em className="text-gold">dance class</em>
          </h2>
          <p className="max-w-[44ch] text-stone md:text-right">
            Every session is built around the things that outlast the music —
            the habits, confidence and presence a learner carries home.
          </p>
        </div>

        <ul className="reveal mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b, i) => {
            const Icon = icons[i];
            return (
              <li
                key={b.name}
                className="group flex flex-col gap-5 bg-obsidian p-7 transition-colors duration-500 hover:bg-raised"
              >
                <Icon
                  size={30}
                  aria-hidden
                  className="text-gold transition-transform duration-500 group-hover:-translate-y-1"
                />
                <div>
                  <h3 className="font-semibold tracking-wide text-ivory">
                    {b.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {b.copy}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
