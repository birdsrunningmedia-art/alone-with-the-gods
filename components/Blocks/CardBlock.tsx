import React from "react";
import { CardBlockType } from "@/types/types";

export default function CardBlock({ content, config }: CardBlockType) {
  return (
    <div>
      {content.cards.map((card) => (
        <div key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
}
