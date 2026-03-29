import React from "react";
import { LongFormType } from "@/types/types";

export default function InfoBlock(card: LongFormType) {
  if (card.tag === "essay") {
    return (
      <div>
        <div>
          <div>
            <span>AUTHOR</span>
            <span>{card.author.name}</span>
          </div>
          <div>
            <span>READING TIME</span>
            <span>{card.meta.readingTime} MIN READ</span>
          </div>
          <div>
            <span>ISSUE</span>
            <p>
              VOL.{card.id} / {card.title}
            </p>
          </div>
        </div>
        <div>
          <p>KEYWORDS</p>
          <div>
            {card.keywords.map((keyword, i) => (
              <span key={i}>{keyword}</span>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>KEYWORDS</p>
        <div>
          {card.keywords.map((keyword, i) => (
            <span key={i}>{keyword}</span>
          ))}
        </div>
      </div>
    );
  }
}
