import React from "react";
import { AuthorBlockType } from "@/types/types";
import Image from "next/image";

export default function AuthorBlock({ content, config }: AuthorBlockType) {
  if (config?.variant === "essay") {
    return (
      <div>
        <div>
          <p>W</p>
        </div>
        <div>
          <p>AUTHOR</p>
          <p>{content.name}</p>
        </div>

        <div>
          <p>DATE</p>
          <p>{content.bio}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <div>
            <Image src={content.image.src} alt={content.image.alt} />
          </div>
        </div>
        <div>
          <div>
            <h3>{content.name}</h3>
            <p>{content.name}</p>
          </div>
          <div className="flex">
            <button>FOLLOW THE LOG</button>
            <button>ARCHIVE ACCESS</button>
          </div>
        </div>
      </div>
    );
  }
}
