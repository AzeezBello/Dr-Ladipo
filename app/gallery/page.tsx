import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BeforeAfterCard } from "@/components/before-after-card";
import { practicePhotos, results } from "@/lib/media";

export const metadata = { title: "Gallery" };

export default function Gallery() {
  return (
    <main className="pt-20">
      <section className="section-pad pb-12 bg-gradient-to-b from-cream to-ivory">
        <div className="container-xl">
          <p className="eyebrow text-accent">Results & gallery</p>
          <h1 className="serif mt-5 text-6xl text-ink md:text-8xl">Real patients.<br /><i className="text-accent">Real results.</i></h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-ink/65">A selection of before-and-after outcomes from the practice. Individual results vary and depend on anatomy, health, lifestyle, and adherence to aftercare.</p>
        </div>
      </section>

      <section className="texture-warm bg-cream px-5 py-16 md:px-8 md:py-24">
        <div className="container-xl grid grid-flow-dense gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={r.src} delay={(i % 3) * 80} className={r.ratio === "2/1" ? "md:col-span-2" : ""}>
              <BeforeAfterCard result={r} tone="ivory" linkToProcedure sizes={r.ratio === "2/1" ? "(min-width:1024px) 66vw, 100vw" : "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"} />
            </Reveal>
          ))}
          <Reveal className="flex flex-col justify-between rounded-card bg-gradient-to-br from-brand to-deep p-8 text-white">
            <p className="eyebrow text-white/70">Your consultation</p>
            <div>
              <p className="serif text-3xl leading-tight">Wondering what may be possible for you?</p>
              <Button asChild className="mt-6 bg-white text-deep hover:bg-sage"><Link href="/contact">Ask about a consultation</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-xl">
          <Reveal><SectionHeading eyebrow="Inside the practice" title="Care, community & continued learning." /></Reveal>
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {practicePhotos.map((p, i) => (
              <Reveal key={p.src} as="figure" delay={i * 60} className="mb-5 break-inside-avoid overflow-hidden rounded-card bg-surface">
                <Photo src={p.src} alt={p.alt} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className={i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"} imgClassName="object-cover object-top" />
                <figcaption className="px-5 py-4 text-xs uppercase tracking-[.14em] text-ink/60">{p.caption}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
