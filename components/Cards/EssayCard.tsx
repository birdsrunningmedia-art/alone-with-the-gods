import React from "react";
import { LongFormType } from "@/types/types";
import Image from "next/image";

export default function EssayCard(card: LongFormType) {
  if (card.cardConfig?.variant === "simple") {
    return (
      <div>
        <span>{card.tag}</span>
        <h2>{card.title}</h2>
        <hr />
        <div>
          <span>BY {card.author.name}</span> {card.meta.readingTime} MIN READ
        </div>
        <div>
          <p>{card.subtitle}</p>
          <a href="#">READ FULL THESIS</a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>{card.tag}</span>
        <div>
          <Image src={card.cardImage.src} alt={card.cardImage.alt} />
        </div>
        <h2>{card.title}</h2>
        <div>
          <span>BY. {card.author.name}</span>
          <span>READ MORE</span>
        </div>
      </div>
    );
  }
}
