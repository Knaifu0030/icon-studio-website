import { PiPhone } from "react-icons/pi";
import { site } from "@/lib/site";

/**
 * Sticky enquiry bar for small screens. WhatsApp deliberately lives only in
 * the floating button above it, so the two never duplicate each other.
 */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-(--z-header) grid grid-cols-2 border-t border-hairline bg-obsidian/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <a
        href={`tel:${site.phones[0].tel}`}
        className="flex min-h-14 items-center justify-center gap-2 text-[0.8125rem] font-bold tracking-[0.14em] text-ivory uppercase"
      >
        <PiPhone size={18} aria-hidden className="text-gold" />
        Call
      </a>
      <a
        href="#enquire"
        className="flex min-h-14 items-center justify-center bg-gold text-[0.8125rem] font-bold tracking-[0.14em] text-obsidian uppercase"
      >
        Enrol Now
      </a>
    </div>
  );
}
