import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, CalendarCheck, Globe2, HeartPulse, ShieldCheck, Sparkles, Stethoscope, Syringe, Scissors, Waves, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BeforeAfterCard } from "@/components/before-after-card";
import { ResultsMarquee } from "@/components/results-marquee";
import { featuredResults } from "@/lib/media";

const procedures = [
  { name: "Lipo 360", type: "Body contouring", href: "/procedures#lipo", icon: Waves },
  { name: "BBL", type: "Body contouring", href: "/procedures#bbl", icon: HeartPulse },
  { name: "J-Plasma", type: "Skin tightening", href: "/procedures#jplasma", icon: Sparkles },
  { name: "Chin Liposuction", type: "Facial contouring", href: "/procedures#chin", icon: Stethoscope },
  { name: "Injectables", type: "Non-surgical aesthetics", href: "/procedures#injectables", icon: Syringe },
  { name: "FUE Hair Transplant", type: "Hair restoration", href: "/hair-restoration", icon: Scissors },
];

const stats = [
  ["4", "Countries of medical & surgical training"],
  ["9+", "Surgical, aesthetic & wellness services"],
  ["1:1", "Individualized consultation & planning"],
  ["FUE", "Hair restoration offered in-clinic"],
];

const headline = ["The", "art", "of"];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ivory via-cream to-sand pt-20">
        <div className="texture pointer-events-none absolute inset-0 opacity-60" />
        <div className="hero-orb pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-sage/35 blur-3xl" />
        <div className="hero-orb pointer-events-none absolute -right-24 -top-10 h-[28rem] w-[28rem] rounded-full bg-gold-light/25 blur-3xl" style={{ "--d": "-7s" } as React.CSSProperties} />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 pb-16 pt-12 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-24 lg:pt-16">
          <div className="hero-copy">
            <h1 className="serif text-6xl leading-[.95] text-ink md:text-8xl">
              {headline.map((w, i) => (
                <span key={w} className="hero-word mr-[.25em]" style={{ "--i": i } as React.CSSProperties}>{w}</span>
              ))}
              <br />
              <em className="hero-word font-normal text-accent" style={{ "--i": 3 } as React.CSSProperties}>refined confidence.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-ink/70">
              Thoughtful surgical and non-surgical care designed around your anatomy, goals, and individual journey.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/contact">Schedule Consultation <ArrowUpRight size={16} /></Link></Button>
              <Button asChild size="lg" variant="outline" className="bg-surface/60"><Link href="/about">Meet Dr. Ladipo</Link></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-ink/70">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-accent" /> Individualized treatment plans</span>
              <span className="flex items-center gap-2"><Globe2 size={16} className="text-accent" /> Trained on four continents</span>
              <span className="flex items-center gap-2"><CalendarCheck size={16} className="text-accent" /> Roswell, GA clinic</span>
            </div>
          </div>
          <div className="hero-visual relative">
            <Photo
              src="/images/dr-ladipo-portrait.png"
              alt="Dr. Olanrewaju Ladipo smiling in the clinic"
              preload
              className="aspect-[4/5] rounded-panel shadow-hero md:aspect-[5/5] lg:aspect-[4/5]"
              imgClassName="object-cover object-[55%_center]"
            />
            <div className="float absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl border border-white/60 bg-surface/90 p-4 shadow-xl backdrop-blur md:left-auto md:right-6 md:max-w-xs">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white"><Stethoscope size={22} /></span>
              <span>
                <span className="block text-sm font-semibold text-ink">Olanrewaju Ladipo, MD</span>
                <span className="mt-1 block text-xs text-ink/60">Atlantic Cosmetic Surgery & MedSpa</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand px-5 py-10 text-white md:px-8">
        <div className="container-xl grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 80} className="border-l border-white/25 pl-5">
              <div className="serif text-4xl md:text-5xl">{n}</div>
              <p className="mt-2 text-xs leading-5 text-white/75">{l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Results strip */}
      <section className="texture-warm relative overflow-hidden border-y border-gold-light/30 bg-cream py-12 md:py-16">
        <div className="container-xl px-5 md:px-8">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow inline-flex items-center gap-3 text-gold"><span className="h-px w-8 bg-gold/50" />Real results</p>
              <p className="serif mt-3 text-3xl text-ink md:text-4xl">Outcomes from the practice.</p>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-gold transition-all hover:gap-3">Open the gallery <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
        <div className="mt-8">
          <ResultsMarquee />
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-pad">
        <div className="container-xl grid gap-14 md:grid-cols-[1fr_1.3fr] md:items-end">
          <Reveal>
            <p className="eyebrow text-accent">The Ladipo Effect</p>
            <h2 className="serif mt-5 text-5xl leading-none text-ink md:text-7xl">Precision.<br />Proportion.<br /><i className="text-accent">Personalization.</i></h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-8 text-ink/75">Every treatment begins with understanding the person, not simply the procedure. Dr. Ladipo combines surgical training, aesthetic judgment, and individualized planning to create a considered treatment experience.</p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-accent transition-all hover:gap-3">Discover the philosophy <ArrowDownRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-pad bg-cream">
        <div className="container-xl">
          <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Featured treatments" title="Surgical & non-surgical options" description="Explore a focused range of body contouring, facial aesthetics, skin tightening, hair restoration, and wellness services." />
            <Button asChild variant="outline" className="shrink-0 bg-surface"><Link href="/procedures">View all procedures</Link></Button>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <Link href={p.href} className="interactive-card group block rounded-card border border-brand/10 bg-surface p-6 transition hover:border-brand/30 hover:shadow-brand sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-accent transition group-hover:bg-brand group-hover:text-white"><p.icon size={22} /></span>
                    <ArrowUpRight size={18} className="text-ink/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                  <h3 className="serif mt-14 text-3xl text-ink">{p.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[.13em] text-ink/50">{p.type}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet */}
      <section className="section-pad">
        <div className="container-xl grid gap-16 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <Reveal className="relative pb-10 pr-10">
            <Photo src="/images/dr-ladipo-clinic.png" alt="Dr. Ladipo in surgical scrubs at the clinic" className="aspect-[4/5] rounded-panel" />
            <Photo src="/images/dr-ladipo-conference.png" alt="Dr. Ladipo at a plastic surgery conference" sizes="240px" className="absolute bottom-0 right-0 aspect-square w-[45%] rounded-2xl border-[6px] border-ivory shadow-xl" />
          </Reveal>
          <Reveal delay={120} className="md:pl-6">
            <p className="eyebrow text-accent">Meet Dr. Ladipo</p>
            <h2 className="serif mt-5 text-5xl text-ink md:text-6xl">A global surgical perspective, grounded in individualized care.</h2>
            <p className="mt-7 text-sm leading-7 text-ink/65">Olanrewaju Ladipo, MD, has pursued medical and surgical training across multiple continents, with experience spanning internal medicine, reconstructive microsurgery, and plastic surgery.</p>
            <p className="mt-5 text-sm leading-7 text-ink/65">His practice focuses on body and facial procedures, aesthetic medicine, hair restoration, and regenerative approaches.</p>
            <ul className="mt-8 grid gap-3 text-sm text-ink/80 sm:grid-cols-2">
              {["Internal Medicine — Newark, NJ", "Microsurgery — London, UK", "Plastic Surgery — São Paulo, BR", "Medical missions in burn care"].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3"><Leaf size={15} className="shrink-0 text-accent" />{t}</li>
              ))}
            </ul>
            <Button asChild className="mt-8"><Link href="/about">Read Dr. Ladipo&apos;s story</Link></Button>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="texture-warm section-pad bg-cream">
        <div className="container-xl">
          <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Before & after" title="Real patients. Real results." description="A selection of patient outcomes. Individual results vary and depend on anatomy, health, and adherence to aftercare." accent="gold" />
            <Button asChild variant="outline" className="shrink-0 border-gold/40 hover:border-gold hover:bg-gold hover:text-white"><Link href="/gallery">View full gallery</Link></Button>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {featuredResults.map((r, i) => (
              <Reveal key={r.src} delay={i * 90}>
                <BeforeAfterCard result={r} tone="ivory" sizes="(min-width:768px) 33vw, 100vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hair & regenerative */}
      <section className="relative overflow-hidden bg-deep px-5 py-20 text-white md:px-8 md:py-28">
        <div className="hero-orb pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-moss/40 blur-3xl" />
        <div className="container-xl relative grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <p className="eyebrow text-sage">Hair & regenerative medicine</p>
            <h2 className="serif mt-4 max-w-3xl text-5xl leading-tight md:text-7xl">New pathways to restoration, with a personalized plan.</h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-deep hover:bg-sage"><Link href="/hair-restoration">Hair restoration</Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:border-white hover:bg-white hover:text-deep"><Link href="/regenerative-medicine">Regenerative <Sparkles size={16} /></Link></Button>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="section-pad">
        <div className="container-xl">
          <Reveal><SectionHeading eyebrow="Your journey" title="From consultation to care" align="center" /></Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[["01", "Consultation", "Discuss your goals, anatomy, history, and options."], ["02", "Plan", "Build a treatment approach tailored to you."], ["03", "Care", "Receive attentive care throughout your procedure or treatment."], ["04", "Follow-up", "Track healing and progress with appropriate follow-up."]].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 80} className="interactive-card rounded-card border border-ink/10 bg-surface p-6 sm:p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-xs font-semibold text-white">{n}</span>
                <h3 className="serif mt-8 text-2xl text-ink">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8">
        <Reveal className="container-xl relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand to-deep px-6 py-20 text-center text-white md:py-24">
          <div className="texture pointer-events-none absolute inset-0 opacity-20" />
          <div className="hero-orb pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold-light/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <p className="eyebrow text-white/70">Begin with a conversation</p>
            <h2 className="serif mt-5 text-5xl md:text-7xl">Your aesthetic journey starts here.</h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75">Schedule a consultation to discuss your goals and learn which options may be appropriate for you.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-deep hover:bg-sage"><Link href="/contact">Schedule Consultation</Link></Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
