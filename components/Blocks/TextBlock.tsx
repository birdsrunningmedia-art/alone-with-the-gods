import React from "react";
import { TextBlockType, TextSegment } from "@/types/types";
import TextRenderer from "../TextRenderer";

export default function TextBlock({ content, config }: TextBlockType) {
  return (
    
      <TextRenderer type={config?.variant} segments={parseText(content.text)} className={`mx-auto ${config?.variant === "normal" ? "text-xl" : config?.variant === "subheading" ? "text-3xl font-bold" : "text-5xl font-bold"}`}/>
   
  );
}

function parseText(text: string): TextSegment[] {
  return text.split(/(\[.*?\])/g).map((part) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      return {
        text: part.slice(1, -1),
        highlight: true,
      };
    }
    return { text: part };
  });
}
