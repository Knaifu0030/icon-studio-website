import { FaWhatsapp } from "react-icons/fa6";
import { waLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire with A ICON Dance Academy on WhatsApp"
      className="group fab-pulse fixed right-4 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-(--z-fab) flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105 md:right-7 md:bottom-7"
    >
      <FaWhatsapp size={27} aria-hidden />
      <span
        className="pointer-events-none absolute right-full mr-4 hidden rounded-sm whitespace-nowrap border border-hairline bg-raised px-3.5 py-2 text-xs font-semibold tracking-wide text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
        aria-hidden
      >
        Enquire on WhatsApp
      </span>
    </a>
  );
}
