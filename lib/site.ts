/**
 * Central business data for A ICON Dance Academy.
 * Every phone number, address line, programme and image source used on the
 * site comes from this file — change it here and the whole site updates.
 */

export const site = {
  name: "A ICON Dance Academy",
  tagline: "Discover. Learn. Transform.",
  taglineSecondary: "Where Moves Create Memories.",
  promo: "Classes Start Soon",
  urgency: "Limited Seats",

  address: {
    lines: ["Near Ganesha Temple", "Hejjala Gate", "Bangalore – 562109"],
    full: "Near Ganesha Temple, Hejjala Gate, Bangalore – 562109",
  },

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Near+Ganesha+Temple%2C+Hejjala+Gate%2C+Bengaluru+562109",

  phones: [
    { display: "99803 40996", tel: "+919980340996" },
    { display: "81230 33707", tel: "+918123033707" },
  ],

  /** Default WhatsApp number (change here if the other line is registered). */
  whatsappNumber: "919980340996",

  whatsappDefaultMessage:
    "Hello A ICON Dance Academy, I would like to know more about your dance and fitness classes. Please share the current batch timings and fee details.",
} as const;

export function waLink(message: string = site.whatsappDefaultMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Unsplash source helper — one place to swap in the academy's own photos later. */
export function photo(id: string, w: number, q = 70): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export function photoSrcSet(id: string, widths: number[], q = 70): string {
  return widths.map((w) => `${photo(id, w, q)} ${w}w`).join(", ");
}

export const heroImage = {
  id: "1518834107812-67b0b7c58434",
  alt: "A dancer mid-turn on a dark stage, her dress flaring like a wave of light",
};

export type Programme = {
  slug: string;
  name: string;
  tagline: string;
  copy: string;
  image: { id: string; alt: string };
  /** grid span hint for the editorial layout (desktop) */
  wide: boolean;
};

export const danceProgrammes: Programme[] = [
  {
    slug: "bollywood",
    name: "Bollywood",
    tagline: "Feel the beat. Live the moment.",
    copy: "Expressive choreography inspired by the energy, emotion and storytelling of Indian cinema.",
    image: {
      id: "1547153760-18fc86324498",
      alt: "A dancer arched mid-move under warm and cool stage light",
    },
    wide: true,
  },
  {
    slug: "hip-hop",
    name: "Hip Hop",
    tagline: "Move freely. Stay original.",
    copy: "Rhythm, attitude and dynamic movement designed to develop individuality and confidence.",
    image: {
      id: "1520367445093-50dc08a59d9d",
      alt: "A dancer striking a sharp pose against a bold orange door",
    },
    wide: false,
  },
  {
    slug: "contemporary",
    name: "Contemporary",
    tagline: "Express beyond boundaries.",
    copy: "Fluid movement, emotion and creative expression brought together through contemporary technique.",
    image: {
      id: "1533106958148-daaeab8b83fe",
      alt: "An ensemble in motion on a dark stage, their movement blurring into trails",
    },
    wide: false,
  },
  {
    slug: "freestyle",
    name: "Freestyle",
    tagline: "Your style. Your stage.",
    copy: "A flexible, expressive format that helps dancers build versatility and discover their own movement language.",
    image: {
      id: "1535525153412-5a42439a210d",
      alt: "A dancer balancing on one leg on a city street at night",
    },
    wide: true,
  },
  {
    slug: "filmy-folk",
    name: "Filmy Folk",
    tagline: "Tradition in motion.",
    copy: "A vibrant combination of folk-inspired energy, cinematic music and expressive group choreography.",
    image: {
      id: "1504609813442-a8924e83f76e",
      alt: "Dancers circling together at a festive open-air gathering, seen from above",
    },
    wide: true,
  },
  {
    slug: "salsa",
    name: "Salsa",
    tagline: "Feel the rhythm. Dance with passion.",
    copy: "Rhythmic partner-dance movement focused on timing, coordination, confidence and enjoyment.",
    image: {
      id: "1545959570-a94084071b5d",
      alt: "A Latin dance troupe performing in matching floral costumes",
    },
    wide: false,
  },
];

export const moreStyles = {
  name: "And More",
  tagline: "Many styles. One passion.",
  copy: "Contact the academy to learn about additional styles and current batches.",
};

export const fitnessProgrammes = [
  {
    slug: "zumba",
    name: "Zumba",
    tagline: "Dance. Sweat. Have fun.",
    copy: "An energetic dance-fitness experience that makes movement enjoyable and engaging.",
    image: {
      id: "1524594152303-9fd13543fe6e",
      alt: "A dance-fitness class moving together in a mirrored studio",
    },
  },
  {
    slug: "aerobics",
    name: "Aerobics",
    tagline: "Stay active. Stay strong.",
    copy: "Structured movement sessions designed to support stamina, coordination and overall fitness.",
    image: {
      id: "1518310383802-640c2de311b2",
      alt: "A group holding light weights in step during an aerobics session",
    },
  },
  {
    slug: "yoga",
    name: "Yoga",
    tagline: "Balance mind. Strengthen body.",
    copy: "Mindful movement focused on balance, flexibility, strength and calm.",
    image: {
      id: "1544367567-0f2fcb009e0b",
      alt: "A silhouetted yoga pose held against a soft dusk sky by the sea",
    },
  },
];

export const benefits = [
  {
    name: "Expert Trainers",
    copy: "Guided learning with focused instruction and attention to technique.",
  },
  {
    name: "Personal Attention",
    copy: "A supportive environment where learners receive individual encouragement.",
  },
  {
    name: "Stage Opportunities",
    copy: "Opportunities to experience performance, expression and stage confidence.",
  },
  {
    name: "Confidence",
    copy: "Movement experiences designed to encourage self-belief and expression.",
  },
  {
    name: "Discipline",
    copy: "Consistent practice that develops focus, commitment and responsibility.",
  },
];

export const journey = [
  {
    step: "01",
    name: "Begin",
    copy: "Choose a style and connect with the academy to find the right batch.",
  },
  {
    step: "02",
    name: "Build",
    copy: "Learn rhythm, movement, technique and coordination through guided practice.",
  },
  {
    step: "03",
    name: "Express",
    copy: "Develop individuality, confidence and performance presence.",
  },
  {
    step: "04",
    name: "Perform",
    copy: "Bring movement to life through memorable stage and studio experiences.",
  },
];

export const experienceImage = {
  id: "1495791185843-c73f2269f669",
  alt: "A ballerina poised on pointe in a single pool of stage light",
};

export const galleryImages = [
  {
    id: "1508807526345-15e9b5f4eaff",
    alt: "A corps of ballet dancers in white tutus mid-performance",
    caption: "Stage performances",
    tall: true,
  },
  {
    id: "1537365587684-f490102e1225",
    alt: "A group rehearsing choreography together under a single spotlight",
    caption: "Group choreography",
    tall: false,
  },
  {
    id: "1519925610903-381054cc2a1c",
    alt: "A dancer's silhouette holding an arabesque against a golden sky",
    caption: "Expression & stage presence",
    tall: false,
  },
  {
    id: "1506126613408-eca07ce68773",
    alt: "A seated meditation bathed in warm morning light",
    caption: "Mindful movement",
    tall: true,
  },
  {
    id: "1571019613454-1cb2f99b2d8b",
    alt: "A focused core-strength session on a studio floor",
    caption: "Fitness sessions",
    tall: false,
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#classes", label: "Dance Classes" },
  { href: "#fitness", label: "Fitness" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const programmeOptions = [
  "Bollywood",
  "Hip Hop",
  "Contemporary",
  "Freestyle",
  "Filmy Folk",
  "Salsa",
  "Zumba",
  "Aerobics",
  "Yoga",
  "Other",
];

export const experienceLevels = [
  "Complete Beginner",
  "Some Experience",
  "Intermediate",
  "Advanced",
  "Not Sure",
];

export const ageGroups = [
  "Under 8",
  "8 – 12",
  "13 – 17",
  "18 – 30",
  "31 – 45",
  "45+",
];

export const preferredTimes = [
  "Weekday mornings",
  "Weekday evenings",
  "Weekend mornings",
  "Weekend evenings",
  "Flexible",
];
