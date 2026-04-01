import React from "react";
import { TextBlockType, TextSegment } from "@/types/types";
import TextRenderer from "../TextRenderer";

export default function TextBlock({ content, config }: TextBlockType) {
  return (
    
      <TextRenderer type={config?.variant} segments={parseText(content.text)} className={` ${config?.variant === "normal" ? "font-mono leading-loose text-sm mx-auto mb-4" : config?.variant === "subheading" ? "underline font-bold text-2xl font-mono" : ""} `}/>
   
  );
}

export function parseText(text: string): TextSegment[] {
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
