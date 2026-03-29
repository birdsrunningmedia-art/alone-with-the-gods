import React from "react";
import { RefBlockType } from "@/types/types";

export default function RefBlock({ content }: RefBlockType) {
  return (
    <div>
      <h3>REF_CITATIONS</h3>
      <div className="grid grid-cols-2">
        {content.refs.map((ref, num) => (
          <div key={num}>
            [{num}] {ref}
          </div>
        ))}
      </div>
    </div>
  );
}
