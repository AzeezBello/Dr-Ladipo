import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { ratioClass } from "@/lib/media";
import { procedures } from "@/lib/procedures";

const items = procedures;

export const metadata = { title: "Procedures" };

export default function Procedures() {
  return (
    <main className="pt-20">
      <section className="section-pad pb-12 bg-gradient-to-b from-cream to-ivory">
        <div className="container-xl">
          <p className="eyebrow text-accent">Treatment menu</p>
          <h1 className="serif mt-5 max-w-4xl text-6xl leading-none text-ink md:text-8xl">Surgical precision.<br /><i className="text-accent">Aesthetic refinement.</i></h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-ink/65">Explore the practice&apos;s core surgical, aesthetic, skin, and wellness offerings. Individual candidacy and treatment plans are determined during consultation.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {items.map((x) => (
              <a key={x.id} href={`#${x.id}`} className="rounded-full border border-brand/20 bg-surface px-4 py-2 text-xs text-ink/75 transition hover:border-brand hover:text-accent">{x.name}</a>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 md:px-8">
        <div className="container-xl grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <Photo src="/images/dr-ladipo-coolsculpting.png" alt="Dr. Ladipo beside a CoolSculpting body-contouring display" className="aspect-[4/5] rounded-panel" imgClassName="object-cover object-center" />
            <div className="mt-5 rounded-card bg-deep p-7 text-white">
              <p className="serif text-2xl">Not sure which treatment fits?</p>
              <p className="mt-3 text-sm leading-6 text-white/70">A consultation helps match your goals with appropriate options.</p>
              <Button asChild className="mt-5 bg-white text-deep hover:bg-sage"><Link href="/contact">Book a consultation</Link></Button>
            </div>
          </div>
          <div className="grid gap-4">
            {items.map((x, i) => (
              <Reveal key={x.id} as="article" delay={40}>
                <Link id={x.id} href="/contact" className="group block scroll-mt-28 overflow-hidden rounded-card border border-ink/10 bg-surface transition hover:border-brand/30 hover:shadow-brand">
                  <div className={x.image ? "grid md:grid-cols-[1fr_320px] md:items-center" : ""}>
                    <div className="p-7 md:p-9">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-brand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.16em] text-accent">{x.cat}</span>
                        <span className="flex items-center gap-3 text-xs text-ink/40">{String(i + 1).padStart(2, "0")}<ArrowUpRight size={18} className="transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" /></span>
                      </div>
                      <h2 className="serif mt-8 text-3xl text-ink md:text-4xl">{x.name}</h2>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-ink/60">{x.desc}</p>
                    </div>
                    {x.image && (
                      <div className="relative mx-4 mb-4 md:my-4 md:ml-0 md:mr-4">
                        <Photo src={x.image.src} alt={x.image.alt} sizes="(min-width:768px) 300px, 100vw" className={`${ratioClass[x.image.ratio]} rounded-2xl bg-ivory`} imgClassName="object-cover transition duration-700 group-hover:scale-[1.03]" />
                        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/80 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[.16em] text-white backdrop-blur">Before</span>
                        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[.16em] text-white">After</span>
                      </div>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
