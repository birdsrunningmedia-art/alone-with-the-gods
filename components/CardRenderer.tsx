import React from "react";
import EssayCard from "./Cards/EssayCard";
import LogCard from "./Cards/LogCard";
import TheoryCard from "./Cards/TheoryCard";
import { entries } from "@/types/types";

export default function CardRenderer({ cards }: { cards: entries[] }) {
  return cards.map((card) => {
    switch (card.tag) {
      case "log":
        return <LogCard key={card.id} card={card} />;
      case "essay":
        return <EssayCard key={card.id} card={card} />;
      case "theory":
        return <TheoryCard key={card.id} card={card} />;
      default:
        return null;
    }
  });
}
