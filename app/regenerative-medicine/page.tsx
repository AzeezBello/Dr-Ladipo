import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";

export const metadata = { title: "Regenerative Medicine" };

export default function Regenerative() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-gradient-to-b from-cream to-ivory">
        <div className="container-xl grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div>
            <p className="eyebrow text-accent">Regenerative aesthetics</p>
            <h1 className="serif mt-5 text-6xl leading-[.95] text-ink md:text-8xl">Regenerative<br /><i className="text-accent">approaches.</i></h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-ink/65">Regenerative treatments are an evolving area of aesthetic and wellness medicine. The specific material, source, processing method, intended use, and regulatory status should be explained clearly before treatment.</p>
            <Button asChild className="mt-8"><Link href="/contact">Request a consultation</Link></Button>
          </div>
          <Photo src="/images/patient-visit-2.png" alt="Dr. Ladipo with a patient at Atlantic Cosmetic Surgery & MedSpa" preload className="aspect-[4/5] rounded-panel shadow-hero" imgClassName="object-cover object-[center_40%]" />
        </div>
      </section>
      <section className="relative overflow-hidden bg-deep px-5 py-20 text-white md:px-8 md:py-28">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-moss/40 blur-3xl" />
        <div className="container-xl relative max-w-4xl">
          <p className="eyebrow text-sage">Personalized treatment planning</p>
          <h2 className="serif mt-5 text-5xl md:text-7xl">Your goals, medical history, tissue concerns, and treatment options all matter.</h2>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65">Results vary and no regenerative treatment can guarantee a particular cosmetic outcome. Consultation is used to determine whether a specific approach is appropriate.</p>
        </div>
      </section>
    </main>
  );
}
