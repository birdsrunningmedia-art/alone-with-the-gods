import React from "react";
import { AuthorBlockType } from "@/types/types";
import Image from "next/image";

export default function AuthorBlock({ content, config }: AuthorBlockType) {
  if (config?.variant === "theory") {
    return (
      <div className="border-t-2 border-b-2 border-black text-2xl py-6 font-mono flex items-center gap-6">
        <div className="bg-primary p-3 w-fit">
          <p className="text-accent">VV</p>
        </div>
        <div className="flex flex-col p-0 m-0 ">
          <p className="text-[10px]">AUTHOR</p>
          <p className="font-bold text-sm">{content.name}</p>
        </div>
        |
        <div className=" h-fit">
          <p className="uppercase text-[10px]">bio</p>
          <p className="text-sm font-bold">{content.bio}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
