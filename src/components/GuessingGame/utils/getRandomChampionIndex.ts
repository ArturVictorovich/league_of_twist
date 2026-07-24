import type { IChampion } from '@/components/GuessingGame/champions.types';

export function getRandomChampionIndex(champions: IChampion[]): number {
  const index = Math.floor(Math.random() * champions.length);
  return index;
}
