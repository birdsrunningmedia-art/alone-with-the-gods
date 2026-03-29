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
      <Image
        src={content.images[0].src}
        alt={content.images[0].alt}
        width={1000}
        height={600}
      />
    );
  } else {
    return (
      <Image
        src={content.images[0].src}
        alt={content.images[0].alt}
        width={1000}
        height={600}
      />
    );
  }
}