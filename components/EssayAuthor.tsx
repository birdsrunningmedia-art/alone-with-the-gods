import React from "react";
import Image from "next/image";

type EssayAuthor = {
  name?: string;
  image?: string;
  bio?: string;
};

export default function EssayAuthor({ name, image, bio }: EssayAuthor) {
  if (name && image && bio) {
    return (
      <div className="bg-black text-white border-t-8 border-accent flex md:flex-row flex-col items-center gap-8 p-8">
       
          <div className="w-[120px] border-4 border-accent">
            <div className="relative w-full h-[120px]">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 120px) 100vw, 120px"
                className="object-cover"
              />
            </div>
          </div>
      
        <div className="flex flex-col gap-8 md:items-center">
          <div className="flex flex-col gap-6">
            <h3 className="font-serif">{name}</h3>
            <p className="font-mono text-sm">{bio}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <button className="uppercase px-6 py-2 bg-accent text-black">FOLLOW THE LOG</button>
            <button className="uppercase px-6 py-2 border-accent border-4">ARCHIVE ACCESS</button>
          </div>
        </div>
      </div>
    );
  } else {
    <div>
      <p>To be continued...</p>
    </div>;
  }
}
