import type { IChampion } from '@/type/championsCard.type';

export const championFeatures: (keyof IChampion)[] = [
  'id',
  'name',
  'gender',
  'race',
  'lanes',
  'regions',
  'resource',
  'attackType',
  'releaseYear',
];
