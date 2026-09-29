import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
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
export default function Procedures() {
  return (
    <main className="pt-20">
      <section className="section-pad pb-12 bg-gradient-to-b from-[#e4f1fc] to-[#f5faff]">
        <div className="container-xl">
          <p className="eyebrow text-[#0a6cc2]">Treatment menu</p>
          <h1 className="serif mt-5 max-w-4xl text-6xl leading-none text-[#0a2540] md:text-8xl">Surgical precision.<br /><i className="text-[#0a6cc2]">Aesthetic refinement.</i></h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#0a2540]/65">Explore the practice&apos;s core surgical, aesthetic, skin, and wellness offerings. Individual candidacy and treatment plans are determined during consultation.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {items.map((x) => (
              <a key={x.id} href={`#${x.id}`} className="rounded-full border border-[#0a6cc2]/20 bg-white px-4 py-2 text-xs text-[#0a2540]/75 transition hover:border-[#0a6cc2] hover:text-[#0a6cc2]">{x.name}</a>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 md:px-8">
        <div className="container-xl grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <Photo src="/images/dr-ladipo-coolsculpting.png" alt="Dr. Ladipo beside a CoolSculpting body-contouring display" className="aspect-[4/5] rounded-[2rem]" imgClassName="object-cover object-center" />
            <div className="mt-5 rounded-3xl bg-[#0b3c73] p-7 text-white">
              <p className="serif text-2xl">Not sure which treatment fits?</p>
              <p className="mt-3 text-sm leading-6 text-white/70">A consultation helps match your goals with appropriate options.</p>
              <Button asChild className="mt-5 bg-white text-[#0a2540] hover:bg-[#e4f1fc]"><Link href="/contact">Book a consultation</Link></Button>
            </div>
          </div>
          <div className="grid gap-4">
            {items.map((x, i) => (
              <Link id={x.id} href="/contact" key={x.id} className="group scroll-mt-28 rounded-3xl border border-[#0a2540]/10 bg-white p-7 transition hover:border-[#0a6cc2]/30 hover:shadow-[0_24px_50px_-24px_rgba(10,108,194,.45)] md:p-9">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#0a6cc2]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.16em] text-[#0a6cc2]">{x.cat}</span>
                  <span className="flex items-center gap-3 text-xs text-[#0a2540]/40">0{i + 1}<ArrowUpRight size={18} className="transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0a6cc2]" /></span>
                </div>
                <h2 className="serif mt-8 text-3xl text-[#0a2540] md:text-4xl">{x.name}</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#0a2540]/60">{x.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
