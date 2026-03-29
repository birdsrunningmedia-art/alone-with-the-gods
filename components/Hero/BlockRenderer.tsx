import TextBlock from "../Blocks/TextBlock";
import { ImageBlock } from "../Blocks/ImageBlock";
import { QuoteBlock } from "../Blocks/QuoteBlock";
import { BlockType } from "@/types/types";

export function BlockRenderer({ blocks }: { blocks: BlockType[] }) {
  return blocks.map((block) => {
    switch (block.type) {
      case "text":
        return <TextBlock key={block.id} {...block} />;

      case "image":
        return <ImageBlock key={block.id} {...block} />;

      case "quote":
        return <QuoteBlock key={block.id} {...block} />;

      default:
        return null;
    }
  });
}
