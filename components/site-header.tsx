"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "About", href: "/about" },
  { label: "Procedures", href: "/procedures" },
  { label: "Hair", href: "/hair-restoration" },
  { label: "Regenerative", href: "/regenerative-medicine" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3 leading-none">
      <span className={`grid h-10 w-10 place-items-center rounded-xl ${light ? "bg-white/10 text-white" : "bg-[#0a6cc2] text-white"}`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M12 4v16M4 12h16" />
        </svg>
      </span>
      <span>
        <span className="serif block text-xl tracking-[.08em]">DR. LADIPO</span>
        <span className={`mt-1 block text-[8px] tracking-[.3em] ${light ? "text-white/60" : "text-[#0a6cc2]"}`}>PLASTIC & AESTHETIC SURGERY</span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${scrolled || open ? "border-b border-[#0a2540]/10 bg-white/85 shadow-[0_8px_30px_-12px_rgba(10,37,64,.18)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Dr. Ladipo home" className="text-[#0a2540]">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-full px-3.5 py-2 text-xs uppercase tracking-[.12em] transition ${isActive(n.href) ? "bg-[#0a6cc2]/10 text-[#0a6cc2]" : "text-[#0a2540]/70 hover:bg-[#0a6cc2]/5 hover:text-[#0a2540]"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+16786498280" className="flex items-center gap-2 text-xs font-semibold text-[#0a2540]/80 hover:text-[#0a6cc2]">
            <Phone size={14} /> (678) 649-8280
          </a>
          <Button asChild size="sm">
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full text-[#0a2540] hover:bg-[#0a6cc2]/10 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#0a2540]/10 bg-white px-5 py-5 lg:hidden">
          <nav className="grid gap-1">
            {nav.map((n) => (
              <Link
                onClick={() => setOpen(false)}
                key={n.href}
                href={n.href}
                className={`rounded-xl px-3 py-3 text-sm uppercase tracking-[.12em] ${isActive(n.href) ? "bg-[#0a6cc2]/10 text-[#0a6cc2]" : "text-[#0a2540]"}`}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-3">
              <Link onClick={() => setOpen(false)} href="/contact">Book Consultation</Link>
            </Button>
            <a href="tel:+16786498280" className="mt-2 flex items-center justify-center gap-2 py-2 text-sm text-[#0a2540]/70">
              <Phone size={14} /> (678) 649-8280
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
