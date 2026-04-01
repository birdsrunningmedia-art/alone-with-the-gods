import Image from "next/image";
import { ImageBlockType } from "@/types/types";

export function ImageBlock({ content, config }: ImageBlockType) {
  if (config?.variant === "grid") {
    return (
      <div className="grid grid-cols-2 gap-4">
        {content.images.map((img, i) => (
          <Image key={i} src={img.src} alt="" width={500} height={500} />
        ))}
      </div>
    );
  } else if (config?.variant === "cover") {
    return (
      <div className="relative w-full h-[512px] shadow-hard border-2 border-border">
        <Image
          src={content.images[0].src}
          alt={content.images[0].alt}
          fill
          sizes="(max-width: 512px) 100vw, 512px"
          className="object-cover"
          loading="eager"
        />
      </div>
    );
  } else {
    return (
      <div>
        {content.images.map((image, i) => (
          <div className="relative w-full h-64" key={i}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 312px) 100vw, 256px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    );
  }
}
