import React from "react";
import Image from "next/image";
import { entries } from "@/types/types";
import { Card } from "../ui/card";

export default function TheoryCard({ card }: { card: entries }) {
  if (card.cardConfig?.variant === "simple") {
    return (
      <Card
        className={`w-full h-fit flex flex-col gap-8 p-3 border border-border mb-8 break-inside-avoid ${card.theme === "primary" ? "shadow-hard" : card.theme === "secondary" ? "shadow-hard" : "shadow-lime"}`}
      >
        <div className="flex flex-col gap-3">
          <div>
            <div
              className={`text-white py-[2px] px-[8px] font-bold flex items-center justify-center w-fit font-mono text-[10px] ${card.theme === "primary" ? "bg-primary" : card.theme === "secondary" ? "bg-secondary" : card.theme === "accent" ? "bg-accent" : "bg-muted"}`}
            >
              <p>{card.tag.toUpperCase()}</p>
            </div>
            <h2 className="text-3xl font-serif font-bold">{card.title}</h2>
          </div>

          <span className="text-sm font-mono border-l-2 border-accent pl-2">
            CORE: {card.slug}
          </span>
        </div>
        <div className="grid grid-cols-3">
          {card.keywords.map((keyword, i) => (
            <div key={i}>
              <span className="border border-border py-1 px-[8px] font-mono text-[10px]">
                #{keyword.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </Card>
    );
  } else {
    return (
      <Card
        className={`w-full h-fit mb-8 break-inside-avoid flex flex-col gap-8 p-8 border border-border ${card.theme === "primary" ? "shadow-brutal" : card.theme === "secondary" ? "shadow-lime" : "shadow-hard"}`}
      >
        <div className="flex flex-col gap-3">
          <div
            className={`text-white py-[2px] px-[8px] font-bold flex items-center justify-center w-fit font-mono text-[10px] ${card.theme === "primary" ? "bg-secondary" : card.theme === "secondary" ? "bg-primary" : card.theme === "accent" ? "bg-accent" : "bg-muted"}`}
          >
            <p>{card.tag.toUpperCase()}</p>
          </div>
          <h2 className="font-serif font-bold text-3xl">{card.title}</h2>
          <span className="font-[10px] font-mono py-[2px] px-[8px] bg-accent w-fit">
            CONCEPT: {card.slug.toUpperCase()}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="relative w-full h-[414px] border-2 border-border">
            <Image
              src={card.cardImage.src}
              alt={card.cardImage.alt}
              fill
              sizes="(max-width: 96px) 100vw, 96px"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3">
            {card.keywords.map((keyword, i) => (
              <div key={i}>
                <span className="border border-border py-1 px-[8px] font-mono text-[10px]">
                  #{keyword.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }
}
