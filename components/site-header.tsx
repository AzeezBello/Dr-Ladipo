"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { procedureNav } from "@/lib/procedures";

const nav = [
  { label: "About", href: "/about" },
  { label: "Procedures", href: "/procedures", menu: true },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="block leading-none">
      <span className="serif block text-xl tracking-[.08em]">DR. LADIPO</span>
      <span className={`mt-1 block text-[8px] tracking-[.3em] ${light ? "text-white/60" : "text-accent"}`}>PLASTIC & AESTHETIC SURGERY</span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (!open && !menu) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); setMenu(false); }
    };
    const onClick = (event: MouseEvent) => {
      if (menu && menuRef.current && !menuRef.current.contains(event.target as Node)) setMenu(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClick);
    return () => { window.removeEventListener("keydown", onKeyDown); window.removeEventListener("mousedown", onClick); };
  }, [open, menu]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const isProcedureArea = ["/procedures", "/hair-restoration", "/regenerative-medicine"].some(isActive);

  const openMenu = () => { if (closeTimer.current) window.clearTimeout(closeTimer.current); setMenu(true); };
  const closeMenuSoon = () => { closeTimer.current = window.setTimeout(() => setMenu(false), 140); };

  const linkClass = (active: boolean) =>
    `rounded-full px-3.5 py-2 text-xs uppercase tracking-[.12em] transition ${active ? "bg-brand/10 text-accent" : "text-ink/70 hover:bg-brand/5 hover:text-ink"}`;

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${scrolled || open || menu ? "border-b border-ink/10 bg-surface/85 shadow-card backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Dr. Ladipo home" className="text-ink">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((n) =>
            n.menu ? (
              <div key={n.href} ref={menuRef} className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenuSoon}>
                <button
                  type="button"
                  className={`${linkClass(isProcedureArea || menu)} inline-flex items-center gap-1.5`}
                  aria-haspopup="true"
                  aria-expanded={menu}
                  aria-controls="procedures-menu"
                  onClick={() => setMenu((m) => !m)}
                  onFocus={openMenu}
                >
                  {n.label} <ChevronDown size={14} className={`transition ${menu ? "rotate-180" : ""}`} />
                </button>
                {menu && (
                  <div
                    id="procedures-menu"
                    className="mobile-nav-panel absolute left-1/2 top-full z-50 mt-3 w-[760px] -translate-x-1/2 rounded-card border border-ink/10 bg-surface/95 p-6 shadow-card backdrop-blur-xl"
                    onFocus={openMenu}
                    onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) closeMenuSoon(); }}
                  >
                    <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                      {procedureNav.map((group) => (
                        <div key={group.label}>
                          <p className="eyebrow text-gold">{group.label}</p>
                          <ul className="mt-3 grid gap-1">
                            {group.links.map((l) => (
                              <li key={l.href}>
                                <Link href={l.href} onClick={() => setMenu(false)} className="block rounded-lg px-2 py-1.5 text-sm text-ink/80 transition hover:bg-brand/10 hover:text-accent">
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
                      <p className="text-xs leading-5 text-ink/55">Candidacy and treatment plans are determined during consultation.</p>
                      <div className="flex shrink-0 gap-2">
                        <Button asChild size="sm" variant="outline"><Link href="/procedures" onClick={() => setMenu(false)}>All procedures</Link></Button>
                        <Button asChild size="sm"><Link href="/contact" onClick={() => setMenu(false)}>Book consultation</Link></Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={n.href} href={n.href} className={linkClass(isActive(n.href))}>
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-brand/10" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="mobile-navigation" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="mobile-nav-panel max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-ink/10 bg-surface/95 px-5 py-5 shadow-card backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-xl gap-1">
            {nav.map((n) =>
              n.menu ? (
                <div key={n.href} className="rounded-xl">
                  <button
                    type="button"
                    className={`mobile-nav-link flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm uppercase tracking-[.12em] ${isProcedureArea ? "bg-brand/10 text-accent" : "text-ink"}`}
                    aria-expanded={mobileMenu}
                    aria-controls="mobile-procedures"
                    onClick={() => setMobileMenu((m) => !m)}
                  >
                    {n.label} <ChevronDown size={16} className={`transition ${mobileMenu ? "rotate-180" : ""}`} />
                  </button>
                  {mobileMenu && (
                    <div id="mobile-procedures" className="mb-2 grid gap-4 rounded-xl bg-cream/70 p-4 sm:grid-cols-2">
                      {procedureNav.map((group) => (
                        <div key={group.label}>
                          <p className="eyebrow text-gold">{group.label}</p>
                          <ul className="mt-2 grid gap-1">
                            {group.links.map((l) => (
                              <li key={l.href}>
                                <Link href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-1.5 text-sm text-ink/85 hover:bg-brand/10 hover:text-accent">{l.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link href="/procedures" onClick={() => setOpen(false)} className="text-xs font-semibold uppercase tracking-[.14em] text-accent sm:col-span-2">All procedures →</Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  onClick={() => setOpen(false)}
                  key={n.href}
                  href={n.href}
                  className={`mobile-nav-link rounded-xl px-3 py-3 text-sm uppercase tracking-[.12em] ${isActive(n.href) ? "bg-brand/10 text-accent" : "text-ink"}`}
                >
                  {n.label}
                </Link>
              )
            )}
            <Button asChild className="mt-3 min-h-12">
              <Link onClick={() => setOpen(false)} href="/contact">Book Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
