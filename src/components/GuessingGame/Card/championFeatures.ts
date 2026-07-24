import type { IChampion } from '@/components/GuessingGame/champions.types';

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

export const nameColumnHeader = [
  'Имя',
  'Пол',
  'Раса',
  'Линия',
  'Регион',
  'Ресурс',
  'Тип атаки',
  'Год выпуска',
];
export const visibleFeatures = championFeatures.filter(
  (f) => f !== 'id' && f !== 'image',
);
