import React from "react";
import { feeds } from "@/utils/helpers/loadFeeds";
import AuthorBlock from "@/components/Blocks/AuthorBlock";
import { queuer } from "@/utils/helpers/queuer";
import TheoryBlockRenderer from "@/components/TheoryBlockRenderer";

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
      <main>
        <section>
          <TheoryBlockRenderer blocks={okay} />
        </section>
      </main>
    );
  } else {
    return null;
  }
}
