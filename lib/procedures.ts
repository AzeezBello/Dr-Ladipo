import type { Ratio } from "@/lib/media";

export type Procedure = {
  id: string;
  cat: "Body" | "Face" | "Skin" | "Aesthetics" | "Wellness";
  name: string;
  desc: string;
  image?: { src: string; alt: string; ratio: Ratio };
};

export const procedures: Procedure[] = [
  { id: "lipo", cat: "Body", name: "Lipo 360", desc: "Body-contouring treatment focused on circumferential areas of the torso, evaluated according to individual anatomy and goals.", image: { src: "/images/result-lipo360-bbl.avif", alt: "Before and after: Lipo 360 with BBL", ratio: "5/4" } },
  { id: "bbl", cat: "Body", name: "BBL", desc: "A body-contouring procedure involving fat transfer, with candidacy, technique, risks, and expected results discussed during consultation.", image: { src: "/images/result-bbl.png", alt: "Before and after: waist and buttocks", ratio: "1/1" } },
  { id: "buttock", cat: "Body", name: "Non-Surgical Buttock Augmentation", desc: "A non-surgical option for selected patients seeking added volume or shape, planned around anatomy, skin quality, and realistic expectations.", image: { src: "/images/result-buttock-augmentation.avif", alt: "Before and after: non-surgical buttock augmentation", ratio: "2/1" } },
  { id: "jplasma", cat: "Skin", name: "J-Plasma", desc: "Laser/plasma-assisted skin tightening used in selected cases, often alongside liposuction where appropriate." },
  { id: "chin", cat: "Face", name: "Chin Liposuction", desc: "A contouring option for selected patients seeking improvement in the appearance of the submental area.", image: { src: "/images/result-chin-neck.avif", alt: "Before and after: chin and neck contouring", ratio: "3/2" } },
  { id: "cellulite", cat: "Body", name: "Cellulite Treatment", desc: "Treatment planning for the appearance of cellulite based on the location, skin quality, and individual goals." },
  { id: "kybella", cat: "Aesthetics", name: "Kybella", desc: "An injectable treatment option for selected adults concerned about submental fullness; suitability is assessed individually." },
  { id: "injectables", cat: "Aesthetics", name: "Injectable Treatments", desc: "Personalized aesthetic injectable treatments designed around facial anatomy, proportions, and patient goals.", image: { src: "/images/result-lip-filler.avif", alt: "Before and after: lip enhancement with injectables", ratio: "2/1" } },
  { id: "wellness", cat: "Wellness", name: "Weight Loss & Wellness", desc: "Wellness-focused consultations designed to discuss goals, health context, and appropriate options." },
  { id: "hydration", cat: "Wellness", name: "IV Hydration", desc: "IV hydration services offered as part of the practice's wellness offering, subject to clinical assessment." },
];

export const procedureCategories = ["Body", "Face", "Skin", "Aesthetics", "Wellness"] as const;

/** Navigation groups for the Procedures dropdown. Hair and regenerative have their own pages. */
export const procedureNav = [
  ...procedureCategories.map((cat) => ({
    label: cat,
    links: procedures.filter((p) => p.cat === cat).map((p) => ({ label: p.name, href: `/procedures#${p.id}` })),
  })),
  { label: "More", links: [{ label: "FUE Hair Transplant", href: "/hair-restoration" }, { label: "Regenerative Medicine", href: "/regenerative-medicine" }] },
];
