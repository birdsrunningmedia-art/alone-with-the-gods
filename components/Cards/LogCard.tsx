import React from "react";
import { entries } from "@/types/types";
import Image from "next/image";
import { Card } from "../ui/card";

export default function LogCard({ card }: { card: entries }) {
  if (card.cardConfig?.variant === "column") {
    return (
      <Card
        className={`w-full h-fit mb-8 break-inside-avoid flex flex-col gap-3 p-3 border border-border ${card.theme === "primary" ? "shadow-lime" : card.theme === "secondary" ? "shadow-brutal" : "shadow-hard"} bg-white`}
      >
        <div
          className={`text-white py-[2px] px-[8px] font-bold flex items-center justify-center w-fit font-mono text-[10px] ${card.theme === "primary" ? "bg-primary" : card.theme === "secondary" ? "bg-secondary" : card.theme === "accent" ? "bg-accent" : "bg-muted"}`}
        >
          <p>{card.tag.toUpperCase()}</p>
        </div>

        <div className="relative w-full h-80 border border-border">
          <Image
            src={card.cardImage.src}
            alt={card.cardImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, 349px"
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold font-serif">
          {card.title.toWellFormed()}
        </h2>
        <p className="font-mono text-[10px] text-muted-foreground">
          {card.createdAt}
        </p>
        <hr />
        <p className="font-heading text-xs">{card.slug}</p>
      </Card>
    );
  } else {
    return (
      <div
        className={`w-full mb-8 break-inside-avoid flex items-center h-fit gap-3 p-3 border border-border ${card.theme === "primary" ? "shadow-lime" : card.theme === "secondary" ? "shadow-brutal" : "shadow-hard"} bg-white`}
      >
        <div className="relative w-full max-w-[96px] h-[96px] border-border border">
          <Image
            src={card.cardImage.src}
            alt={card.cardImage.alt}
            fill
            sizes="(max-width: 96px) 100vw, 96px"
            className="object-cover"
          />
        </div>

        <div>
          <div
            className={`text-white py-[2px] px-[8px] font-bold flex items-center justify-center w-fit font-mono text-[10px] ${card.theme === "primary" ? "bg-primary" : card.theme === "secondary" ? "bg-secondary" : card.theme === "accent" ? "bg-accent" : "bg-muted"}`}
          >
            <p>{card.tag.toUpperCase()}</p>
          </div>

          <h2 className="font-serif font-bold text-lg">{card.title}</h2>
          <p className="font-mono text-[10px] text-muted-foreground">
            {card.createdAt}
          </p>
        </div>
      </div>
    );
  }
}
