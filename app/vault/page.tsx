// vault landing
import React from "react";
import { feeds } from "@/utils/helpers/loadFeeds";
import CardRenderer from "@/components/CardRenderer";

export default function page() {
  const cards = feeds();
  return (
    <section className="p-3 md:px-[32px] flex flex-col gap-8 md:gap-16">
      <div className="border-l-8 border-secondary flex flex-col items-start justify-start gap-3 pl-3 pt-0 ">
        
        <h1 className="font-serif text-7xl md:text-8xl font-bold p-0 m-0">VAULT</h1>
        <p className="uppercase font-mono max-w-2xl md:text-xl text-lg font-light">
          A non-linear repository of digital fragments, long- form critiques,
          and tectonic observations.
        </p>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-8">
        <CardRenderer cards={cards} />
      </div>
    </section>
  );
}
