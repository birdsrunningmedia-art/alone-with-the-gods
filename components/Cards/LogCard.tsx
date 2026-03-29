import React from "react";
import { LogType } from "@/types/types";
import Image from "next/image";

export default function LogCard({ card }: { card: LogType }) {
  if (card.cardConfig.variant === "column") {
    return (
      <div className="w-fit h-fit">
        <span>{card.tag}</span>
        <div className="relative w-full max-w-[337.33px] h-[180px]">
          <Image
            src={card.cardImage.src}
            alt={card.cardImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, 337px"
            className="object-cover"
          />
        </div>
        <h2>{card.title}</h2>
        <p>{card.createdAt}</p>
        <hr />
        {card.slug}
      </div>
    );
  } else {
    return (
      <div className="flex gap-2 p-4 w-full items-center">
        <div className="relative w-full max-w-[96px] h-[96px]">
          <Image
            src={card.cardImage.src}
            alt={card.cardImage.alt}
            fill
            sizes="(max-width: 96px) 100vw, 96px"
            className="object-cover"
          />
        </div>
        <div>
          <span>{card.tag}</span>
          <h2>{card.title}</h2>
          <p>{card.createdAt}</p>
        </div>
      </div>
    );
  }
}
