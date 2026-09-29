import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { SectionHeading } from "@/components/section-heading";
import { practicePhotos, results } from "@/lib/media";

export const metadata = { title: "Gallery" };

export default function Gallery() {
  return (
    <main className="pt-20">
      <section className="section-pad pb-12 bg-gradient-to-b from-[#e4f1fc] to-[#f5faff]">
        <div className="container-xl">
          <p className="eyebrow text-[#0a6cc2]">Results & gallery</p>
          <h1 className="serif mt-5 text-6xl text-[#0a2540] md:text-8xl">Real patients.<br /><i className="text-[#0a6cc2]">Real results.</i></h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#0a2540]/65">A selection of before-and-after outcomes from the practice. Individual results vary and depend on anatomy, health, lifestyle, and adherence to aftercare.</p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="container-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((r) => (
            <figure key={r.src} className="overflow-hidden rounded-3xl border border-[#0a2540]/10 bg-white">
              <Photo src={r.src} alt={`Before and after: ${r.title}`} sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="aspect-square" />
              <figcaption className="p-5">
                <p className="text-[10px] uppercase tracking-[.16em] text-[#0a6cc2]">{r.category}</p>
                <p className="serif mt-1 text-xl text-[#0a2540]">{r.title}</p>
              </figcaption>
            </figure>
          ))}
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#0a6cc2] to-[#0b3c73] p-8 text-white">
            <p className="eyebrow text-white/70">Your consultation</p>
            <div>
              <p className="serif text-3xl leading-tight">Wondering what may be possible for you?</p>
              <Button asChild className="mt-6 bg-white text-[#0a2540] hover:bg-[#e4f1fc]"><Link href="/contact">Ask about a consultation</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#e4f1fc]">
        <div className="container-xl">
          <SectionHeading eyebrow="Inside the practice" title="Care, community & continued learning." />
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {practicePhotos.map((p, i) => (
              <figure key={p.src} className="mb-5 break-inside-avoid overflow-hidden rounded-3xl bg-white">
                <Photo src={p.src} alt={p.alt} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className={i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"} imgClassName="object-cover object-top" />
                <figcaption className="px-5 py-4 text-xs uppercase tracking-[.14em] text-[#0a2540]/60">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
