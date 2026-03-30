import { logs, essays, theories } from "@/data/data";
import { entries } from "@/types/types";

function shuffleArray(arr: entries[]) {
  const result = [...arr]; // avoid mutating original

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function feeds() {
  const AloneWithTheGods: entries[] = [];

  for (const a of logs) {
    AloneWithTheGods.push(a);
  }
  for (const b of essays) {
    AloneWithTheGods.push(b);
  }
  for (const c of theories) {
    AloneWithTheGods.push(c);
  }
  return AloneWithTheGods;
}
