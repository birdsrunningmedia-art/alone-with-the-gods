import React from "react";
import { LongFormType } from "@/types/types";
import Image from "next/image";

export default function EssayCard(card: LongFormType) {
  if (card.cardConfig?.variant === "simple") {
    return (
      <div>
        <div>
          <span>{card.tag}</span>
          <h2>{card.title}</h2>
          <span>{card.slug}</span>
        </div>
        <div>
          {card.keywords.map((keyword, i) => (
            <span key={i}>{keyword}</span>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>{card.tag}</span>
        <h2>{card.title}</h2>
        <span>CONCEPT: {card.slug}</span>

        <div>
          <Image src={card.cardImage.src} alt={card.cardImage.alt} />
        </div>
        <div>
          {card.keywords.map((keyword, i) => (
            <span key={i}>{keyword}</span>
          ))}
        </div>
      </div>
    );
  }
}
