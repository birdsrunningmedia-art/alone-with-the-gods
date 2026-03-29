import React from "react";
import { TextSegment } from "@/types/types";

type Props = {
  type: "normal" | "subheading" | "heading" | undefined
  segments: TextSegment[];
  className?: string;
};

export default function TextRenderer({ type, segments, className }: Props) {
  if (type === "heading") {
    return (
      <h1 className={className}>
        {segments.map((seg, i) => (
          <span key={i} className={seg.highlight ? "bg-yellow-200 px-1" : ""}>
            {seg.text}
          </span>
        ))}
      </h1>
    );
  } else if (type === "subheading") {
    <h2 className={className}>
      {segments.map((seg, i) => (
        <span key={i} className={seg.highlight ? "bg-yellow-200 px-1" : ""}>
          {seg.text}
        </span>
      ))}
    </h2>;
  } else {
    return (
      <p className={className}>
        {segments.map((seg, i) => (
          <span key={i} className={seg.highlight ? "bg-yellow-200 px-1" : ""}>
            {seg.text}
          </span>
        ))}
      </p>
    );
  }
}
