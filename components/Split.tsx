import Image, { StaticImageData } from "next/image";

type SplitProps = {
  image: { src: StaticImageData | string; alt: string; priority?: boolean };
  children: React.ReactNode;
  imageLeft?: boolean;   
  fullHeight?: boolean;  
  className?: string;
};

export default function Split({
  image,
  children,
  imageLeft = false,
  fullHeight = true,
  className = "",
}: SplitProps) {
  const desktopCols = imageLeft
    ? "md:grid-cols-[34%_66%]"
    : "md:grid-cols-[66%_34%]";

  return (
    <section
      className={[
        "w-full h-full",
        "grid grid-cols-1 grid-rows-[34vh_1fr]",
        "md:grid-rows-1",
        desktopCols,
        "items-stretch",
        fullHeight ? "h-dvh" : "",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "row-start-1 col-start-1",
          "md:row-start-1",
          imageLeft ? "md:col-start-1" : "md:col-start-2",
          "min-w-0 min-h-0", "md:p-0", "px-8", "pt-30"
        ].join(" ")}
      >
        <div className="relative w-full h-full overflow-hidden rounded-3xl md:rounded-none md:rounded-s-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={image.priority}
            className="object-cover"
            sizes="(min-width: 768px) 34vw, 100vw"
          />
        </div>
      </div>

      <div
        className={[
          "row-start-2 col-start-1",
          "md:row-start-1",
          imageLeft ? "md:col-start-2" : "md:col-start-1",
          "min-w-0 min-h-0", "md:pt-30", "px-8", 
        ].join(" ")}
      >
        
        <div className="h-full w-full overflow-auto ">
          {children}
        </div>
      </div>
    </section>
  );
}
