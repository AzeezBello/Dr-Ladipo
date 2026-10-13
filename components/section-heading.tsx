export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  accent = "brand",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: "brand" | "gold";
}) {
  const accentText = accent === "gold" ? "text-gold" : "text-accent";
  const accentLine = accent === "gold" ? "bg-gold/50" : "bg-brand/50";
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className={`eyebrow inline-flex items-center gap-3 ${accentText} ${align === "center" ? "justify-center" : ""}`}>
        <span className={`h-px w-8 ${accentLine}`} />
        {eyebrow}
      </p>
      <h2 className="serif mt-4 text-4xl leading-[1.02] text-ink md:text-6xl">{title}</h2>
      {description && <p className={`mt-6 max-w-2xl text-sm leading-7 text-ink/65 md:text-base ${align === "center" ? "mx-auto" : ""}`}>{description}</p>}
    </div>
  );
}
