import { entries } from "@/types/types";

export function feedsForVault(arr: entries[]) {
  const vaultScreen: entries[] = [];
  const freq: {
    log: number;
    essay: number;
    theory: number;
  } = { log: 0, essay: 0, theory: 0 };
  for (const item of arr) {
    if (item.tag === "log") {
      freq.log = freq.log + 1;
      if (freq.log < 3) {
        vaultScreen.push(item);
      } else {
        continue;
      }
    } else if (item.tag === "essay") {
      freq.essay = freq.essay + 1;
      if (freq.essay < 3) {
        vaultScreen.push(item);
      } else {
        continue;
      }
    } else {
      freq.theory = freq.theory + 1;
      if (freq.theory < 3) {
        vaultScreen.push(item);
      } else {
        continue;
      }
    }
  }
  return vaultScreen
}
