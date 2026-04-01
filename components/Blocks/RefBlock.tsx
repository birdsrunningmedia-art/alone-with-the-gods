import React from "react";
import { RefBlockType } from "@/types/types";

export default function RefBlock({ content }: RefBlockType) {
  return (
    <div className="font-mono border-t border-black md:pt-12 pt-6 flex flex-col md:gap-[16px] gap-[8px] ">
      <h3 className="font-bold text-sm">REF_CITATIONS</h3>
      <div className="grid grid-cols-2 gap-6">
        {content.refs.map((ref, num) => (
          <p className="text-[10px]" key={num}>
            [{num + 1}] {ref}
          </p>
        ))}
      </div>
    </div>
  );
}