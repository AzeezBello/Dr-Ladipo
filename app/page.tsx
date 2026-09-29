import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, CalendarCheck, Globe2, HeartPulse, ShieldCheck, Sparkles, Stethoscope, Syringe, Scissors, Waves, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { SectionHeading } from "@/components/section-heading";
import { results } from "@/lib/media";

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

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5faff] via-[#e4f1fc] to-[#cfe6fa] pt-20">
        <div className="texture pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#7fb8e8]/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 pb-16 pt-12 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-24 lg:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0a6cc2]/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#0a6cc2] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#0a6cc2]" /> Plastic & Aesthetic Surgery · Atlanta
            </p>
            <h1 className="serif mt-7 text-6xl leading-[.95] text-[#0a2540] md:text-8xl">
              The art of<br /><em className="font-normal text-[#0a6cc2]">refined confidence.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#0a2540]/70">
              Thoughtful surgical and non-surgical care designed around your anatomy, goals, and individual journey.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/contact">Schedule Consultation <ArrowUpRight size={16} /></Link></Button>
              <Button asChild size="lg" variant="outline" className="bg-white/60"><Link href="/about">Meet Dr. Ladipo</Link></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-[#0a2540]/70">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#0a6cc2]" /> Individualized treatment plans</span>
              <span className="flex items-center gap-2"><Globe2 size={16} className="text-[#0a6cc2]" /> Trained on four continents</span>
              <span className="flex items-center gap-2"><CalendarCheck size={16} className="text-[#0a6cc2]" /> Roswell, GA clinic</span>
            </div>
          </div>
          <div className="relative">
            <Photo
              src="/images/dr-ladipo-portrait.png"
              alt="Dr. Olanrewaju Ladipo smiling in the clinic"
              priority
              className="aspect-[4/5] rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(10,37,64,.45)] md:aspect-[5/5] lg:aspect-[4/5]"
              imgClassName="object-cover object-[55%_center]"
            />
            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur md:left-auto md:right-6 md:max-w-xs">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0a6cc2] text-white"><Stethoscope size={22} /></span>
              <span>
                <span className="block text-sm font-semibold text-[#0a2540]">Olanrewaju Ladipo, MD</span>
                <span className="mt-1 block text-xs text-[#0a2540]/60">Atlantic Cosmetic Surgery & MedSpa</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0a6cc2] px-5 py-10 text-white md:px-8">
        <div className="container-xl grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="border-l border-white/25 pl-5">
              <div className="serif text-4xl md:text-5xl">{n}</div>
              <p className="mt-2 text-xs leading-5 text-white/75">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-pad">
        <div className="container-xl grid gap-14 md:grid-cols-[1fr_1.3fr] md:items-end">
          <div>
            <p className="eyebrow text-[#0a6cc2]">The Ladipo Effect</p>
            <h2 className="serif mt-5 text-5xl leading-none text-[#0a2540] md:text-7xl">Precision.<br />Proportion.<br /><i className="text-[#0a6cc2]">Personalization.</i></h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#0a2540]/75">Every treatment begins with understanding the person, not simply the procedure. Dr. Ladipo combines surgical training, aesthetic judgment, and individualized planning to create a considered treatment experience.</p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-[#0a6cc2] hover:gap-3 transition-all">Discover the philosophy <ArrowDownRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-pad bg-[#e4f1fc]">
        <div className="container-xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Featured treatments" title="Surgical & non-surgical options" description="Explore a focused range of body contouring, facial aesthetics, skin tightening, hair restoration, and wellness services." />
            <Button asChild variant="outline" className="shrink-0 bg-white"><Link href="/procedures">View all procedures</Link></Button>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((p) => (
              <Link href={p.href} key={p.name} className="group rounded-3xl border border-[#0a6cc2]/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#0a6cc2]/30 hover:shadow-[0_24px_50px_-24px_rgba(10,108,194,.45)]">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0a6cc2]/10 text-[#0a6cc2] transition group-hover:bg-[#0a6cc2] group-hover:text-white"><p.icon size={22} /></span>
                  <ArrowUpRight size={18} className="text-[#0a2540]/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0a6cc2]" />
                </div>
                <h3 className="serif mt-14 text-3xl text-[#0a2540]">{p.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[.13em] text-[#0a2540]/50">{p.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meet */}
      <section className="section-pad">
        <div className="container-xl grid gap-16 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div className="relative pb-10 pr-10">
            <Photo src="/images/dr-ladipo-clinic.png" alt="Dr. Ladipo in surgical scrubs at the clinic" className="aspect-[4/5] rounded-[2rem]" />
            <Photo src="/images/dr-ladipo-conference.png" alt="Dr. Ladipo at a plastic surgery conference" sizes="240px" className="absolute bottom-0 right-0 aspect-square w-[45%] rounded-2xl border-[6px] border-[#f5faff] shadow-xl" />
          </div>
          <div className="md:pl-6">
            <p className="eyebrow text-[#0a6cc2]">Meet Dr. Ladipo</p>
            <h2 className="serif mt-5 text-5xl text-[#0a2540] md:text-6xl">A global surgical perspective, grounded in individualized care.</h2>
            <p className="mt-7 text-sm leading-7 text-[#0a2540]/65">Olanrewaju Ladipo, MD, has pursued medical and surgical training across multiple continents, with experience spanning internal medicine, reconstructive microsurgery, and plastic surgery.</p>
            <p className="mt-5 text-sm leading-7 text-[#0a2540]/65">His practice focuses on body and facial procedures, aesthetic medicine, hair restoration, and regenerative approaches.</p>
            <ul className="mt-8 grid gap-3 text-sm text-[#0a2540]/80 sm:grid-cols-2">
              {["Internal Medicine — Newark, NJ", "Microsurgery — London, UK", "Plastic Surgery — São Paulo, BR", "Medical missions in burn care"].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-xl bg-[#e4f1fc] px-4 py-3"><Leaf size={15} className="shrink-0 text-[#0a6cc2]" />{t}</li>
              ))}
            </ul>
            <Button asChild className="mt-8"><Link href="/about">Read Dr. Ladipo&apos;s story</Link></Button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Real results" title="Before & after" description="A selection of patient outcomes. Individual results vary and depend on anatomy, health, and adherence to aftercare." />
            <Button asChild variant="outline" className="shrink-0"><Link href="/gallery">View full gallery</Link></Button>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {results.slice(0, 3).map((r) => (
              <Link key={r.src} href="/gallery" className="group overflow-hidden rounded-3xl border border-[#0a2540]/10 bg-[#f5faff]">
                <Photo src={r.src} alt={`Before and after: ${r.title}`} sizes="(min-width:768px) 33vw, 100vw" className="aspect-square" imgClassName="object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[.16em] text-[#0a6cc2]">{r.category}</p>
                    <p className="serif mt-1 text-xl text-[#0a2540]">{r.title}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-[#0a2540]/30 group-hover:text-[#0a6cc2]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hair & regenerative */}
      <section className="relative overflow-hidden bg-[#0b3c73] px-5 py-20 text-[#f5faff] md:px-8 md:py-28">
        <div className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[#3b8fd6]/40 blur-3xl" />
        <div className="container-xl relative grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-[#7fb8e8]">Hair & regenerative medicine</p>
            <h2 className="serif mt-4 max-w-3xl text-5xl leading-tight md:text-7xl">New pathways to restoration, with a personalized plan.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-[#0a2540] hover:bg-[#e4f1fc]"><Link href="/hair-restoration">Hair restoration</Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:border-white hover:bg-white hover:text-[#0a2540]"><Link href="/regenerative-medicine">Regenerative <Sparkles size={16} /></Link></Button>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-pad">
        <div className="container-xl">
          <SectionHeading eyebrow="Your journey" title="From consultation to care" align="center" />
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[["01", "Consultation", "Discuss your goals, anatomy, history, and options."], ["02", "Plan", "Build a treatment approach tailored to you."], ["03", "Care", "Receive attentive care throughout your procedure or treatment."], ["04", "Follow-up", "Track healing and progress with appropriate follow-up."]].map(([n, t, d]) => (
              <div key={n} className="rounded-3xl border border-[#0a2540]/10 bg-white p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0a6cc2] text-xs font-semibold text-white">{n}</span>
                <h3 className="serif mt-8 text-2xl text-[#0a2540]">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-[#0a2540]/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8">
        <div className="container-xl relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0a6cc2] to-[#0b3c73] px-6 py-20 text-center text-white md:py-24">
          <div className="texture pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-3xl">
            <p className="eyebrow text-white/70">Begin with a conversation</p>
            <h2 className="serif mt-5 text-5xl md:text-7xl">Your aesthetic journey starts here.</h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75">Schedule a consultation to discuss your goals and learn which options may be appropriate for you.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-[#0a2540] hover:bg-[#e4f1fc]"><Link href="/contact">Schedule Consultation</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:border-white hover:bg-white hover:text-[#0a2540]"><a href="tel:+16786498280">Call (678) 649-8280</a></Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
