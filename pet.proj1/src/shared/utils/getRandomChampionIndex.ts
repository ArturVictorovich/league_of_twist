import type { IChampion } from "@/type/championsCard.type";

export function getRandomChampionIndex(champions: IChampion[]): number {
  const index = Math.floor(Math.random() * champions.length);
  return index;
}
