import Link from "next/link";
import { Photo } from "@/components/photo";
import { results } from "@/lib/media";

/**
 * Slow, pause-on-hover strip of before/after thumbnails.
 * Falls back to a static wrapped grid under prefers-reduced-motion (globals.css).
 */
export function ResultsMarquee() {
  const strip = [...results, ...results];
  return (
    <div className="marquee-wrap marquee-mask overflow-hidden py-2" aria-label="Before and after results">
      <div className="marquee">
        {strip.map((r, i) => (
          <Link
            key={`${r.src}-${i}`}
            href="/gallery"
            aria-hidden={i >= results.length}
            tabIndex={i >= results.length ? -1 : undefined}
            className="group relative block h-36 w-56 shrink-0 overflow-hidden rounded-2xl border border-gold-light/40 bg-surface shadow-sm md:h-44 md:w-72"
          >
            <Photo src={r.src} alt={`Before and after: ${r.title}`} sizes="288px" className="h-full w-full" imgClassName="object-cover object-top transition duration-700 group-hover:scale-105" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-3 pb-2.5 pt-8 text-[10px] font-semibold uppercase tracking-[.14em] text-white">{r.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
