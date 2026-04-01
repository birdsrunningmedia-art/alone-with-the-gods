"use client";
import React from "react";
import TextBlock from "./Blocks/TextBlock";
import { ImageBlock } from "./Blocks/ImageBlock";
import { QuoteBlock } from "./Blocks/QuoteBlock";
import AuthorBlock from "./Blocks/AuthorBlock";
import { FigBlock } from "./Blocks/FigBlock";
import RefBlock from "./Blocks/RefBlock";
import TableBlock from "./Blocks/TableBlock";
import { BlockType } from "@/types/types";

export default function TheoryBlockRenderer({
  blocks,
}: {
  blocks: BlockType[][];
}) {
  return (
    <>
      {blocks.map((group, i) => {
        return (
          <div
            className={
              group.length === 1
                ? "w-full my-6"
                : "columns-1 lg:columns-2 gap-4 mb-6"
            }
            key={i}
          >
            {group.map((s) => {
              switch (s.type) {
                case "text":
                  return <TextBlock key={s.id} {...s} />;

                case "image":
                  return <ImageBlock key={s.id} {...s} />;

                case "quote":
                  return <QuoteBlock key={s.id} {...s} />;
                case "quoteCard":
                  return <QuoteBlock key={s.id} {...s} />;

                case "author":
                  return <AuthorBlock key={s.id} {...s} />;

                case "fig":
                  return <FigBlock key={s.id} {...s} />;

                case "ref":
                  return <RefBlock key={s.id} {...s} />;

                case "table":
                  return <TableBlock key={s.id} {...s} />;

                default:
                  return null;
              }
            })}
          </div>
        );
      })}
    </>
  );
}
