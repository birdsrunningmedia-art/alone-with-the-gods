import React from "react";
import { feeds } from "@/utils/helpers/loadFeeds";
import { BlockRenderer } from "@/components/BlockRenderer";
import EssayAuthor from "@/components/EssayAuthor";
import TextRenderer from "@/components/TextRenderer";
import { parseText } from "@/components/Blocks/TextBlock";
import { Sun } from "lucide-react";
import { ArrowUp } from "lucide-react";

export default async function EssayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const essay = feeds().find((feed) => feed.id === id);
  if (essay) {
    return (
      <main className="lg:grid lg:grid-cols-12 lg:gap-3 p-6 sm:px-16 md:px-32 lg:px-6 flex flex-col gap-6">
        <section className="lg:col-span-8 lg:col-start-5 lg:col-end-13 flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <span className="bg-secondary font-mono text-[10px] px-4 py-1 h-fit w-fit text-white">
                ESSAY & PRAXIS
              </span>
              {/* to add text renderer modifier */}
              <TextRenderer
                type="essayHeading"
                segments={parseText(essay.title)}
                className="font-serif text-5xl leading-snug sm:text-7xl font-bold uppercase sm:leading-snug"
              />
            </div>
            <div className="font-serif text-3xl font-thin">
              <p>{essay.subtitle}</p>
            </div>
          </div>
          <BlockRenderer blocks={essay.blocks} />
          <div className="flex gap-8 justify-center items-center">
            <div className="w-32 h-1 bg-muted-foreground"></div>
            <Sun size={32} className="text-secondary" />
            <div className="w-32 h-1 bg-muted-foreground"></div>
          </div>
          <EssayAuthor
            name={essay.author?.name}
            bio={essay.author?.bio}
            image={essay.author?.image}
          />
          {/* back to the top button */}
          <div className="hidden lg:flex justify-end">
            <div className="p-2 border-4 border-black shadow-hard bg-accent w-fit">
              <ArrowUp size={32} className="text-black" />
            </div>
          </div>
        </section>

        {/* second column */}
        <div className="mx-auto font-mono w-full lg:col-span-3 lg:col-start-1 lg:col-end-4 lg:row-start-1 flex flex-col gap-6 p-3 h-fit shadow-hard border-border border">
          <div className="border-l-4 border-secondary pl-3 font-mono">
            <ul className="flex flex-col gap-6">
              <li className="flex flex-col gap-3">
                <p className="text-sm text-secondary">PHASE_01</p>
                <p className="font-bold">ONTOLOGICAL DECAY</p>
              </li>
              <li className="flex flex-col gap-3">
                <p className="text-sm text-secondary">PHASE_02</p>
                <p className="font-bold">THE VOGUE VANDAL</p>
              </li>
              <li className="flex flex-col gap-3">
                <p className="text-sm text-secondary">PHASE_03</p>
                <p className="font-bold">SYNTHETICS</p>
              </li>
            </ul>
          </div>
          <div>
            <p>KEYWORDS</p>
            <div className="columns-3">
              {essay.keywords.map((keyword, i) => (
                <div
                  key={i}
                  className="border w-fit border-black p-1  text-[10px] mb-3"
                >
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* back to the top button */}
        <div className="lg:hidden flex justify-end">
          <div className="p-2 border-4 border-black shadow-hard bg-accent w-fit">
            <ArrowUp size={32} className="text-black" />
          </div>
        </div>
      </main>
    );
  } else {
    return null;
  }
}
