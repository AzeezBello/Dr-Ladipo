import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { SectionHeading } from "@/components/section-heading";

export const metadata = { title: "About Dr. Ladipo" };

const journey = [
  ["Lagos, Nigeria", "MD, Lagos State University College of Medicine"],
  ["Newark, New Jersey", "Internal Medicine, Newark Beth Israel Medical Center"],
  ["London, United Kingdom", "Reconstructive Microsurgery, Queen Mary University"],
  ["São Paulo, Brazil", "Plastic Surgery residency, Universidade Brasil"],
];

export default function About() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-gradient-to-b from-[#e4f1fc] to-[#f5faff]">
        <div className="container-xl grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-end">
          <div>
            <p className="eyebrow text-[#0a6cc2]">About the doctor</p>
            <h1 className="serif mt-5 text-6xl leading-[.95] text-[#0a2540] md:text-8xl">Olanrewaju<br /><i className="text-[#0a6cc2]">Ladipo, MD.</i></h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#0a2540]/65">A multidisciplinary medical journey spanning Nigeria, the United States, the United Kingdom, and Brazil.</p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="container-xl grid gap-5 md:grid-cols-[1.4fr_1fr]">
          <Photo src="/images/dr-ladipo-portrait.png" alt="Dr. Ladipo smiling in his clinic" priority sizes="(min-width:768px) 60vw, 100vw" className="aspect-[3/2] rounded-[2rem] md:aspect-auto md:h-full" />
          <div className="grid gap-5">
            <Photo src="/images/clinic-team.png" alt="Dr. Ladipo with members of the clinical team" sizes="(min-width:768px) 40vw, 100vw" className="aspect-[4/3] rounded-[2rem]" imgClassName="object-cover object-[center_30%]" />
            <Photo src="/images/dr-ladipo-medspa.png" alt="Dr. Ladipo presenting skincare products at the medspa" sizes="(min-width:768px) 40vw, 100vw" className="aspect-[4/3] rounded-[2rem]" imgClassName="object-cover object-top" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#e4f1fc]">
        <div className="container-xl grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <SectionHeading eyebrow="The journey" title="A global foundation in medicine and surgery." />
          <div className="space-y-6 text-sm leading-7 text-[#0a2540]/70">
            <p>Dr. Ladipo was born in Lagos, Nigeria, and earned his MD from Lagos State University College of Medicine. He subsequently trained in Internal Medicine at Newark Beth Israel Medical Center in Newark, New Jersey.</p>
            <p>His surgical path includes specialized training in Reconstructive Microsurgery at Queen Mary University in London, United Kingdom, followed by residency training in Plastic Surgery at Universidade Brasil in São Paulo, Brazil.</p>
            <p>He practices primarily at Atlantic Cosmetic Surgery & MedSpa and has experience in body and facial procedures, reconstructive microsurgery, hair restoration, and aesthetic medicine.</p>
            <p>He also participates in international medical missions supporting burn care, reflecting a continuing commitment to reconstructive medicine and service.</p>
            <ol className="relative mt-10 space-y-4 border-l-2 border-[#0a6cc2]/25 pl-8">
              {journey.map(([place, detail], i) => (
                <li key={place} className="relative rounded-2xl bg-white p-5 shadow-sm">
                  <span className="absolute -left-[45px] top-5 grid h-7 w-7 place-items-center rounded-full bg-[#0a6cc2] text-[10px] font-semibold text-white">{i + 1}</span>
                  <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#0a6cc2]">{place}</p>
                  <p className="mt-1 text-sm text-[#0a2540]">{detail}</p>
                </li>
              ))}
            </ol>
            <Button asChild className="mt-4"><Link href="/contact">Schedule a consultation</Link></Button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid gap-12 md:grid-cols-2 md:items-center">
          <Photo src="/images/dr-ladipo-conference.png" alt="Dr. Ladipo at PlasticCon Miami" className="aspect-square rounded-[2rem]" />
          <div>
            <SectionHeading eyebrow="Continuing education" title="Learning alongside the specialty." description="Dr. Ladipo stays engaged with the wider plastic and aesthetic surgery community through conferences and professional events, bringing evolving techniques and perspectives back to patient care." />
            <Button asChild variant="outline" className="mt-8"><Link href="/gallery">See the practice</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
}
