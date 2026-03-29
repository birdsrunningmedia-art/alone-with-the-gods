import Image from "next/image";
import { FigBlockType } from "@/types/types";

export function FigBlock({ id, content, config }: FigBlockType) {
  if (config?.variant === "simple") {
    return (
      <div>
        <div className="relative">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            className="w-full"
          />

          <h3 className="absolute z-10 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2">
            FIG{id}:{content.title}
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {/* image */}
        <div className="relative">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            className="w-full"
          />
        </div>
        <div>
          <p>{content.shadeText}</p>
          <div>
            <h2>
              FIG_{id}:{content.title}
            </h2>
            <p>{content.caption}</p>
          </div>
        </div>
      </div>
    );
  }
}
