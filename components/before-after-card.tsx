import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/photo";
import { ratioClass, type Result } from "@/lib/media";

/**
 * A before/after composite with labelled halves and a caption.
 * The source images are side-by-side composites: left = before, right = after.
 */
export function BeforeAfterCard({
  result,
  sizes = "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw",
  tone = "light",
  linkToProcedure = false,
}: {
  result: Result;
  sizes?: string;
  tone?: "light" | "ivory";
  linkToProcedure?: boolean;
}) {
  const href = linkToProcedure ? result.href : "/gallery";
  return (
    <Link
      href={href}
      className={`interactive-card group block overflow-hidden rounded-card border ${tone === "ivory" ? "border-gold-light/40 bg-ivory" : "border-ink/10 bg-surface"}`}
    >
      <div className="relative">
        <Photo src={result.src} alt={`Before and after: ${result.title}`} sizes={sizes} className={ratioClass[result.ratio]} imgClassName="object-cover transition duration-700 group-hover:scale-[1.03]" />
        <span className="ba-divider" aria-hidden="true" />
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.16em] text-white backdrop-blur">Before</span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.16em] text-white shadow-sm">After</span>
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <div>
          <p className={`text-[10px] uppercase tracking-[.16em] ${tone === "ivory" ? "text-gold" : "text-accent"}`}>{result.category}</p>
          <p className="serif mt-1 text-xl text-ink">{result.title}</p>
        </div>
        <ArrowUpRight size={18} className="shrink-0 text-ink/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
    </Link>
  );
}
