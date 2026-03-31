import Image from "next/image";
import { FigBlockType } from "@/types/types";

export function FigBlock({ id, content, config }: FigBlockType) {
  if (config?.variant === "simple") {
    return (
      <div className="relative shadow-hard border border-border">
        <div className="relative w-full h-96">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(max-width: 96px) 100vw, 96px"
            className="object-cover"
          />
        </div>
        <div className="absolute z-20 left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 p-3 bg-accent shadow-hard">
          <h3 className="font-mono text-lg md:text-2xl text-center font-bold">{content.title}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 w-full mx-auto md:gap-6 gap-3">
        {/* image */}
        <div className="md:row-span-3 md:col-span-2 md:row-start-1 md:col-start-1 md:row-end-4 md:col-end-3">
          <div className="border-2 border-border p-1">
            <div className="relative w-full h-96 ">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(max-width: 384px) 100vw, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3">
          <p>{content.shadeText}</p>
        </div>

        <div className=" px-3 md:px-0 md:row-start-3 md:row-end-4 md:col-start-3 md:col-end-4 flex flex-col justify-end ">
          <div className="flex flex-col gap-1">
            <h2 className="font-serif font-bold text-2xl">{content.title}</h2>
            <p className="font-mono">{content.caption}</p>
          </div>
        </div>
      </div>
    );
  }
}
