export type Ratio = "1/1" | "5/4" | "3/2" | "2/1";

export type Result = {
  src: string;
  title: string;
  category: string;
  /** Procedure the result relates to */
  href: string;
  /** Intrinsic ratio of the before/after composite */
  ratio: Ratio;
  /** Shown on the home page strip */
  featured?: boolean;
};

export const ratioClass: Record<Ratio, string> = {
  "1/1": "aspect-square",
  "5/4": "aspect-[5/4]",
  "3/2": "aspect-[3/2]",
  "2/1": "aspect-[2/1]",
};

export const results: Result[] = [
  // Ordered so the gallery mosaic fills rows: 3 single-column cards, then a wide card + a square, repeated.
  { src: "/images/result-lipo360-bbl.avif", title: "Lipo 360 + BBL", category: "Body contouring", href: "/procedures#lipo", ratio: "5/4", featured: true },
  { src: "/images/result-chin-neck.avif", title: "Chin & neck contouring", category: "Facial contouring", href: "/procedures#chin", ratio: "3/2", featured: true },
  { src: "/images/result-abdomen-thighs.png", title: "Abdomen & thighs", category: "Body contouring", href: "/procedures#lipo", ratio: "1/1" },
  { src: "/images/result-lip-filler.avif", title: "Lip enhancement", category: "Injectables", href: "/procedures#injectables", ratio: "2/1", featured: true },
  { src: "/images/result-bbl.png", title: "Waist & buttocks", category: "Body contouring", href: "/procedures#bbl", ratio: "1/1" },
  { src: "/images/result-buttock-augmentation.avif", title: "Non-surgical buttock augmentation", category: "Body contouring", href: "/procedures#buttock", ratio: "2/1" },
  { src: "/images/result-jawline-1.png", title: "Jawline profile", category: "Facial contouring", href: "/procedures#chin", ratio: "1/1" },
  { src: "/images/result-arms-back.png", title: "Back & arms", category: "Body contouring", href: "/procedures#lipo", ratio: "1/1" },
  { src: "/images/result-jawline-2.png", title: "Jawline & chin", category: "Facial contouring", href: "/procedures#chin", ratio: "1/1" },
];

export const featuredResults = results.filter((r) => r.featured);

export const practicePhotos = [
  { src: "/images/patient-visit-1.png", alt: "Dr. Ladipo with a patient at the clinic", caption: "Patient visit" },
  { src: "/images/clinic-team.png", alt: "Dr. Ladipo with members of the clinical team", caption: "The care team" },
  { src: "/images/dr-ladipo-conference.png", alt: "Dr. Ladipo at PlasticCon Miami", caption: "PlasticCon Miami" },
  { src: "/images/patient-visit-2.png", alt: "Dr. Ladipo with a patient at Atlantic Cosmetic Surgery & MedSpa", caption: "Patient visit" },
  { src: "/images/dr-ladipo-medspa.png", alt: "Dr. Ladipo presenting skincare products at the medspa", caption: "MedSpa & skincare" },
  { src: "/images/dr-ladipo-coolsculpting.png", alt: "Dr. Ladipo beside a CoolSculpting display", caption: "CoolSculpting" },
];
