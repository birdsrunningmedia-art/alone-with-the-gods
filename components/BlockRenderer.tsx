import TextBlock from "./Blocks/TextBlock";
import { ImageBlock } from "./Blocks/ImageBlock";
import { QuoteBlock } from "./Blocks/QuoteBlock";
import { BlockType } from "@/types/types";
import AuthorBlock from "./Blocks/AuthorBlock";
import { FigBlock } from "./Blocks/FigBlock";
import RefBlock from "./Blocks/RefBlock";
import TableBlock from "./Blocks/TableBlock";
import CardBlock from "./Blocks/CardBlock";

export function BlockRenderer({ blocks }: { blocks: BlockType[] }) {
  return blocks.map((block) => {
    switch (block.type) {
      case "text":
        return <TextBlock key={block.id} {...block} />;

      case "image":
        return <ImageBlock key={block.id} {...block} />;

      case "quote":
        return <QuoteBlock key={block.id} {...block} />;
      case "author":
        return <AuthorBlock key={block.id} {...block} />;
      case "fig":
        return <FigBlock key={block.id} {...block} />;
      case "ref":
        return <RefBlock key={block.id} {...block} />;
      case "table":
        return <TableBlock key={block.id} {...block} />;
      case "card":
        return <CardBlock key={block.id} {...block} />;
      default:
        return null;
    }
  });
}
