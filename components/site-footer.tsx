import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0a2540] text-[#f5faff]">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#0a6cc2]/25 blur-3xl" />
      <div className="container-xl relative grid gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
            A modern surgical and aesthetic practice centered on individualized planning, thoughtful care, and natural-looking refinement.
          </p>
          <a href="https://www.instagram.com/realdratl/" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[.14em] text-white/80 transition hover:border-white hover:text-white">
            Follow on Instagram ↗
          </a>
        </div>
        <div>
          <p className="eyebrow text-[#7fb8e8]">Explore</p>
          <div className="mt-5 grid gap-3 text-sm text-white/75">
            <Link className="hover:text-white" href="/about">About Dr. Ladipo</Link>
            <Link className="hover:text-white" href="/procedures">Procedures</Link>
            <Link className="hover:text-white" href="/hair-restoration">Hair Restoration</Link>
            <Link className="hover:text-white" href="/gallery">Results Gallery</Link>
            <Link className="hover:text-white" href="/faq">FAQs</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-[#7fb8e8]">Clinic</p>
          <div className="mt-5 space-y-4 text-sm leading-6 text-white/75">
            <p className="flex gap-3"><MapPin size={16} className="mt-1 shrink-0 text-[#7fb8e8]" />1105 Upper Hembree Rd, Suite B<br />Roswell, GA 30076</p>
            <a href="tel:+16786498280" className="flex items-center gap-3 hover:text-white"><Phone size={16} className="text-[#7fb8e8]" />(678) 649-8280</a>
            <a href="mailto:info@drladipo.com" className="flex items-center gap-3 hover:text-white"><Mail size={16} className="text-[#7fb8e8]" />info@drladipo.com</a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-5 py-5 text-xs text-white/45 md:px-8">
        <div className="container-xl flex flex-col justify-between gap-2 md:flex-row">
          <span>© {new Date().getFullYear()} Dr. Ladipo. All rights reserved.</span>
          <span>Medical information is for educational purposes and does not replace a consultation.</span>
        </div>
      </div>
    </footer>
  );
}
