import Image from "next/image";

export function Photo({
  src,
  alt,
  className = "",
  imgClassName = "object-cover",
  sizes = "(min-width:768px) 50vw, 100vw",
  preload = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <div className={`photo-frame relative overflow-hidden bg-cream ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className={imgClassName} />
    </div>
  );
}
