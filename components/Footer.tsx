import { FaWhatsapp } from "react-icons/fa6";
import { danceProgrammes, fitnessProgrammes, navLinks, site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-charcoal">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[4fr_2fr_2fr_3fr] lg:gap-10">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="A ICON Dance Academy"
            width={245}
            height={414}
            className="h-28 w-auto"
            loading="lazy"
          />
          <p className="font-display mt-6 text-xl text-ivory">{site.tagline}</p>
          <p className="font-display mt-1 text-gold italic">
            {site.taglineSecondary}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold tracking-[0.16em] text-stone uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-block py-0.5 text-ivory/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-stone uppercase">
            Programmes
          </p>
          <ul className="mt-4 space-y-2.5">
            {danceProgrammes.map((p) => (
              <li key={p.slug}>
                <a
                  href="#classes"
                  className="inline-block py-0.5 text-ivory/80 transition-colors hover:text-gold"
                >
                  {p.name}
                </a>
              </li>
            ))}
            {fitnessProgrammes.map((f) => (
              <li key={f.slug}>
                <a
                  href="#fitness"
                  className="inline-block py-0.5 text-ivory/80 transition-colors hover:text-gold"
                >
                  {f.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-stone uppercase">
            Contact
          </p>
          <address className="mt-4 not-italic leading-relaxed text-ivory/80">
            {site.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <ul className="mt-4 space-y-2">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a
                  href={`tel:${p.tel}`}
                  className="inline-block py-0.5 font-semibold text-ivory transition-colors hover:text-gold"
                >
                  {p.display}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-gold transition-colors hover:text-ivory"
          >
            <FaWhatsapp size={18} aria-hidden />
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 pb-24 text-sm text-stone sm:px-8 md:flex-row md:items-center md:justify-between md:pb-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Near Ganesha Temple, Hejjala Gate, Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
