import React from "react";
import { feeds } from "@/utils/helpers/loadFeeds";
import { queuer } from "@/utils/helpers/queuer";
import TheoryBlockRenderer from "@/components/TheoryBlockRenderer";
import TextRenderer from "@/components/TextRenderer";
import { parseText } from "@/components/Blocks/TextBlock";
import { Button } from "@/components/ui/button";

export default async function TheoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const theory = feeds().find((feed) => feed.id === id);

  if (theory) {
    const okay = queuer(theory?.blocks);

    return (
      <main className="lg:grid lg:grid-cols-12 lg:gap-3 p-6 sm:px-16 md:px-32 lg:px-6 flex flex-col gap-6">
        <section className="lg:col-span-6 lg:col-start-4 lg:col-end-10 flex flex-col gap-12">
          <div className="  flex gap-[32px] lg:gap-12 flex-col">
            <TextRenderer
              type="heading"
              segments={parseText(theory.title)}
              className="font-serif text-5xl leading-snug sm:text-7xl font-bold uppercase sm:leading-snug"
            />
            <div
              className="max-w-xl border-l-4 border-black font-mono pl-2
            "
            >
              <p>{theory.subtitle}</p>
            </div>
          </div>
          <TheoryBlockRenderer blocks={okay} />
        </section>
        {/* second column */}

        <div className="mx-auto font-mono w-full lg:col-span-3 lg:col-start-1 lg:col-end-4 lg:row-start-1 flex flex-col gap-6 p-3 h-fit border-border border">
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
              {theory.keywords.map((keyword, i) => (
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
        {/* third column */}
        <section className="font-mono font-bold lg:col-span-3 lg:col-start-10 lg:col-end-13 lg:row-start-1 flex flex-col sm:flex-row lg:flex-col gap-6 items-center">
          {/* download div */}

          <div className=" lg:w-full flex flex-col gap-3 h-fit bg-secondary w-full lg:max-w-64 mx-auto p-3 border-border border shadow-hard text-white">
            <p className="font-bold text-lg">SUPPORT THE DISCOURSE</p>
            <p className="text-xs">
              Access our full repository of theoretical frameworks and manifesto
              drafts.
            </p>

            <Button className="bg-accent uppercase font-bold font-serif text-black">
              DOWNLOAD PDf_882
            </Button>
          </div>

          {/* next publication div */}
          <div className=" border-4 border-border bg-accent p-3 w-full lg:max-w-64 mx-auto flex flex-col gap-1">
            <p className="text-[10px] font-mono">NEXT PUBLICATION</p>

            <p className="font-serif font-bold text-xl">
              {'"The Silicon Shadow"'}
            </p>

            <div className="min-h-2 min-w-36"></div>

            <p className="font-mono text-[10px]">
              Explore the erosion of physical identity in the age of generative
              synthentic media
            </p>
          </div>
        </section>
      </main>
    );
  } else {
    return null;
  }
}
