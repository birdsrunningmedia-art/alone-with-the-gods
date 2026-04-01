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
      <div className="italic border-y-4 border-border py-8 flex flex-col items-center gap-8">
        <p className="text-center text-3xl font-serif">{`"${content.quote}"`}</p>

        <p className="font-mono text-[10px]">
          {content.author && (
            <span className="block mt-2">{content.author}</span>
          )}
        </p>
      </div>
    );
  } else {
    return (
      <div className="px-3">
        <div className=" mb-6">
          <div className="p-6 max-w-96 bg-muted border-2 border-border shadow-lime font-serif text-xl flex items-center justify-center">{`"${content.quote}"`}</div>
        </div>
      </div>
    );
  }
}
