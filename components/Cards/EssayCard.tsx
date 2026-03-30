import React from "react";
import Image from "next/image";
import { entries } from "@/types/types";

export default function EssayCard({ card }: { card: entries }) {
  if (card.cardConfig?.variant === "simple") {
    return (
      <div className="bg-white py-3 flex flex-col gap-3 border-2 border-border shadow-brutal mb-8 break-inside-avoid">
        <div
          className={`text-black py-[2px] px-[8px] font-bold flex items-center justify-center w-fit font-mono text-[10px] mx-3 bg-white border border-border`}
        >
          <p>{card.tag.toUpperCase()}</p>
        </div>
        <h2 className="text-3xl mx-3 font-serif font-bold">{card.title}</h2>
        <hr className="" />
        <div className="text-[10px] font-mono mx-3">
          <span className="bg-accent py-[4px] px-[8px]">
            BY {card.author?.name ?? "Unknown Author"}
          </span>{" "}
          {card.meta?.readingTime ?? 0} MIN READ
        </div>
        <div className="flex flex-col gap-3 mx-3">
          <p className="text-sm font-heading">{card.subtitle}</p>
          <a href="#" className="font-mono text-[10px] font-bold underline">
            READ FULL THESIS
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-white p-[32px] flex flex-col gap-3 border-2 border-border shadow-brutal mb-8 break-inside-avoid">
        <div
          className={`text-black py-[2px] px-[8px] font-bold flex items-center justify-center w-fit font-mono text-[10px] bg-white border border-border`}
        >
          <p>{card.tag.toUpperCase()}</p>
        </div>

        <div className="relative w-full h-44 border-2 border-border">
          <Image
            src={card.cardImage.src}
            alt={card.cardImage.alt}
            fill
            sizes="(max-width: 96px) 100vw, 96px"
            className="object-cover"
          />
        </div>
        <h2 className="font-serif font-bold text-3xl">{card.title}</h2>
        <div className="font-mono text-[10px] flex justify-between items-center">
          <span>BY. {card.author?.name ?? "Unknown Author"}</span>
          <span className="text-secondary">READ MORE</span>
        </div>
      </div>
    );
  }
}
