import { QuoteBlockType } from "@/types/types";
import React from "react";

export function QuoteBlock({ content, config }: QuoteBlockType) {
  if (config?.variant === "log") {
    return (
      <blockquote className="italic border-l-2 pl-4 my-6">
        {content.quote}
        {content.author && (
          <span className="block mt-2">— {content.author}</span>
        )}
      </blockquote>
    );
  } else if (config?.variant === "essay") {
    return (
      <blockquote className="italic border-l-2 pl-4 my-6">
        {content.quote}
        {content.author && (
          <span className="block mt-2">— {content.author}</span>
        )}
      </blockquote>
    );
  } else {
    return (
      <div className="p-6 bg-muted border-2 border-border shadow-lime font-serif text-xl flex items-center justify-center">{`"${content.quote}"`}</div>
    );
  }
}
