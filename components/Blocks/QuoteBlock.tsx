import { QuoteBlockType } from "@/types/types";
import React from "react";

export function QuoteBlock({ content }: QuoteBlockType) {
  return (
    <blockquote className="italic border-l-2 pl-4 my-6">
      {content.quote}
      {content.author && <span className="block mt-2">— {content.author}</span>}
    </blockquote>
  );
}
