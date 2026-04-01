import React from "react";
import { CardBlockType } from "@/types/types";

export default function CardBlock({ content, config }: CardBlockType) {
  return (
    <div className="flex md:flex-row flex-col gap-6">
      {content.cards.map((card, i) => (
        <div
          className={`p-3 font-mono sm:max-w-96 w-full border border-border flex flex-col py-6 gap-3 ${i % 2 === 1 ? "bg-accent shadow-hard" : "bg-muted shadow-brutal"}`}
          key={i}
        >
          <h3 className="text-2xl">{card.title}</h3>
          <p className="font-light">{card.body}</p>
        </div>
      ))}
    </div>
  );
}
