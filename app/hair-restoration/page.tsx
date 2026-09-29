import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { SectionHeading } from "@/components/section-heading";

export const metadata = { title: "Hair Restoration" };

const steps = [
  ["01", "Assessment", "Review hair-loss pattern, donor hair, scalp condition, history, and expectations."],
  ["02", "Design", "Plan follicle placement and hairline direction to complement the individual."],
  ["03", "Restoration", "Harvest and place individual follicular units, followed by individualized aftercare."],
];

export default function Hair() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-gradient-to-b from-[#e4f1fc] to-[#f5faff]">
        <div className="container-xl grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="eyebrow text-[#0a6cc2]">Hair restoration</p>
            <h1 className="serif mt-5 text-6xl leading-[.95] text-[#0a2540] md:text-8xl">FUE hair<br /><i className="text-[#0a6cc2]">transplant.</i></h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-[#0a2540]/65">Follicular Unit Extraction relocates individual hair follicles from a donor area to selected areas of thinning or hair loss. Planning is individualized to the patient&apos;s pattern, donor availability, scalp condition, and goals.</p>
            <Button asChild className="mt-8"><Link href="/contact">Discuss your options</Link></Button>
          </div>
          <Photo src="/images/patient-visit-1.png" alt="Dr. Ladipo in surgical cap with a patient at the clinic" priority className="aspect-[4/5] rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(10,37,64,.45)]" imgClassName="object-cover object-[center_60%]" />
        </div>
      </section>
      <section className="section-pad bg-[#e4f1fc]">
        <div className="container-xl">
          <SectionHeading eyebrow="The approach" title="Natural-looking placement starts with thoughtful planning." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map(([n, t, d]) => (
              <div key={n} className="rounded-3xl bg-white p-8">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0a6cc2] text-xs font-semibold text-white">{n}</span>
                <h3 className="serif mt-10 text-3xl text-[#0a2540]">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-[#0a2540]/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
