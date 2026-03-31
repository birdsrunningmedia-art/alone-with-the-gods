import { BlockType } from "@/types/types";
export function queuer(obj: BlockType[]) {
  let colony: BlockType[] = [];
  const queue: BlockType[][] = [];
  for (let i = 0; i < obj.length; i++) {
    if (
      obj[i].type === "author" ||
      obj[i].type === "fig" ||
      obj[i].type === "ref" ||
      obj[i].type === "quote"
    ) {
      // check if colony is empty
      // dump all colony in queue
      // empty colony

      // all this if colony is not empty
      if (colony.length > 0) {
        // add colonies to queue
        queue.push(colony);

        // empty colony after adding colony
        colony = [];
      }
      // if colony is empty
      // just push [obj] to queue
      queue.push([obj[i]]);
      continue;
    } else {
      // if not author or fig or ref or quote
      // that means it the rest we want in a colony
      // add them to colony
      colony.push(obj[i]);
      continue;
    }
  }
  if (colony.length > 0) {
    queue.push(colony);
  }
  return queue;
}
