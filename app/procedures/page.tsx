import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PlaceholderImage } from "@/components/placeholder-image";
const items=[
{id:"lipo",cat:"Body",name:"Lipo 360",desc:"Body-contouring treatment focused on circumferential areas of the torso, evaluated according to individual anatomy and goals."},
{id:"bbl",cat:"Body",name:"BBL",desc:"A body-contouring procedure involving fat transfer, with candidacy, technique, risks, and expected results discussed during consultation."},
{id:"jplasma",cat:"Skin",name:"J-Plasma",desc:"Laser/plasma-assisted skin tightening used in selected cases, often alongside liposuction where appropriate."},
{id:"chin",cat:"Face",name:"Chin Liposuction",desc:"A contouring option for selected patients seeking improvement in the appearance of the submental area."},
{id:"cellulite",cat:"Body",name:"Cellulite Treatment",desc:"Treatment planning for the appearance of cellulite based on the location, skin quality, and individual goals."},
{id:"kybella",cat:"Aesthetics",name:"Kybella",desc:"An injectable treatment option for selected adults concerned about submental fullness; suitability is assessed individually."},
{id:"injectables",cat:"Aesthetics",name:"Injectable Treatments",desc:"Personalized aesthetic injectable treatments designed around facial anatomy, proportions, and patient goals."},
{id:"wellness",cat:"Wellness",name:"Weight Loss & Wellness",desc:"Wellness-focused consultations designed to discuss goals, health context, and appropriate options."},
{id:"hydration",cat:"Wellness",name:"IV Hydration",desc:"IV hydration services offered as part of the practice's wellness offering, subject to clinical assessment."}
];
export const metadata={title:"Procedures"};
export default function Procedures(){return <main className="pt-20"><section className="section-pad pb-12"><div className="container-xl"><p className="eyebrow text-[#7d6d60]">Treatment menu</p><h1 className="serif mt-5 max-w-4xl text-6xl leading-none md:text-8xl">Surgical precision.<br/><i>Aesthetic refinement.</i></h1><p className="mt-7 max-w-2xl text-sm leading-7 text-[#302821]/65">Explore the practice's core surgical, aesthetic, skin, and wellness offerings. Individual candidacy and treatment plans are determined during consultation.</p></div></section><section className="px-5 pb-24 md:px-8"><div className="container-xl grid gap-12 md:grid-cols-[.7fr_1.3fr]"><PlaceholderImage className="aspect-[4/5] md:sticky md:top-28 md:h-[620px]" label="Approved procedure photography placeholder"/><div className="grid gap-px bg-[#302821]/15">{items.map((x,i)=><Link id={x.id} href="/contact" key={x.id} className="group bg-[#f7f3ee] p-7 transition hover:bg-[#e8ded3] md:p-9"><div className="flex justify-between"><span className="eyebrow text-[#9a8879]">{x.cat} · 0{i+1}</span><ArrowUpRight size={18} className="opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1"/></div><h2 className="serif mt-12 text-3xl md:text-4xl">{x.name}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#302821]/60">{x.desc}</p></Link>)}</div></div></section></main>}
