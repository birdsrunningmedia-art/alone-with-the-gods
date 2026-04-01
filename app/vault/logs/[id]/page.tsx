import React from "react";
import { feeds } from "@/utils/helpers/loadFeeds";
import { BlockRenderer } from "@/components/BlockRenderer";
import TextRenderer from "@/components/TextRenderer";
import { parseText } from "@/components/Blocks/TextBlock";
import { Button } from "@/components/ui/button";
export default async function LogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const log = feeds().find((feed) => feed.id === id);
  if (log) {
    return (
      <main>
        <section>
          <div>
            <p>ENTRY_NO {log.id}</p>
            <p>{log.createdAt}</p>
          </div>
          <div>
            <TextRenderer
              type="heading"
              segments={parseText(log.title)}
              className=""
            />

            <p>{log.subtitle}</p>
          </div>
          <BlockRenderer blocks={log.blocks} />
          <div>
            <div>
              {log.keywords.map((keyword, i) => (
                <p key={i}>{keyword}</p>
              ))}
            </div>
            <Button>SHARE</Button>
          </div>
        </section>
      </main>
    );
  } else {
    return null;
  }
}
