import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL (e.g. https://aicondanceacademy.in) once the
// academy's domain is live so canonical/OG URLs resolve to it.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "A ICON Dance Academy | Dance & Fitness Classes in Hejjala Gate, Bengaluru",
  description:
    "Join Bollywood, Hip Hop, Contemporary, Freestyle, Filmy Folk, Salsa, Zumba, Aerobics and Yoga classes at A ICON Dance Academy near Ganesha Temple, Hejjala Gate, Bengaluru. Dance classes for all ages — enrol now.",
  keywords: [
    "dance academy in Hejjala Gate",
    "dance classes in Hejjala",
    "dance academy near Ganesha Temple",
    "Bollywood dance classes",
    "Hip Hop classes",
    "Contemporary dance classes",
    "Salsa classes",
    "Zumba classes",
    "Aerobics classes",
    "Yoga classes",
    "dance classes for all ages",
    "dance academy in Bengaluru",
  ],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "256x256" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "A ICON Dance Academy — Discover. Learn. Transform.",
    description:
      "Dance and fitness classes for all ages near Ganesha Temple, Hejjala Gate, Bengaluru. Classes start soon — limited seats.",
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "A ICON Dance Academy" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  slogan: site.tagline,
  description:
    "Dance and fitness academy offering Bollywood, Hip Hop, Contemporary, Freestyle, Filmy Folk, Salsa, Zumba, Aerobics and Yoga classes for all ages in Hejjala Gate, Bengaluru.",
  telephone: site.phones[0].tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Ganesha Temple, Hejjala Gate",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "562109",
    addressCountry: "IN",
  },
  image: "/logo.png",
  contactPoint: site.phones.map((p) => ({
    "@type": "ContactPoint",
    telephone: p.tel,
    contactType: "enquiries",
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dance & Fitness Programmes",
    itemListElement: [
      "Bollywood",
      "Hip Hop",
      "Contemporary",
      "Freestyle",
      "Filmy Folk",
      "Salsa",
      "Zumba",
      "Aerobics",
      "Yoga",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${name} classes` },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${bodoni.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
