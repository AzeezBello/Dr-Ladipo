import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";

export const metadata = { title: "Regenerative Medicine" };

export default function Regenerative() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-gradient-to-b from-[#e4f1fc] to-[#f5faff]">
        <div className="container-xl grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div>
            <p className="eyebrow text-[#0a6cc2]">Regenerative aesthetics</p>
            <h1 className="serif mt-5 text-6xl leading-[.95] text-[#0a2540] md:text-8xl">Regenerative<br /><i className="text-[#0a6cc2]">approaches.</i></h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-[#0a2540]/65">Regenerative treatments are an evolving area of aesthetic and wellness medicine. The specific material, source, processing method, intended use, and regulatory status should be explained clearly before treatment.</p>
            <Button asChild className="mt-8"><Link href="/contact">Request a consultation</Link></Button>
          </div>
          <Photo src="/images/patient-visit-2.png" alt="Dr. Ladipo with a patient at Atlantic Cosmetic Surgery & MedSpa" priority className="aspect-[4/5] rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(10,37,64,.45)]" imgClassName="object-cover object-[center_40%]" />
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#0b3c73] px-5 py-20 text-[#f5faff] md:px-8 md:py-28">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[#3b8fd6]/40 blur-3xl" />
        <div className="container-xl relative max-w-4xl">
          <p className="eyebrow text-[#7fb8e8]">Personalized treatment planning</p>
          <h2 className="serif mt-5 text-5xl md:text-7xl">Your goals, medical history, tissue concerns, and treatment options all matter.</h2>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65">Results vary and no regenerative treatment can guarantee a particular cosmetic outcome. Consultation is used to determine whether a specific approach is appropriate.</p>
        </div>
      </section>
    </main>
  );
}
