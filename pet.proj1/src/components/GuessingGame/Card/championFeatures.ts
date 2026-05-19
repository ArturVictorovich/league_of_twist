import type { IChampion } from "@/type/championsCard.type";

export const championFeatures: (keyof IChampion)[] = [
  "id",
  "name",
  "gender",
  "race",
  "lanes",
  "regions",
  "resource",
  "attackType",
  "releaseYear",
];

export const nameColumnHeader = [
  "Имя",
  "Пол",
  "Раса",
  "Линия",
  "Регион",
  "Ресурс",
  "Тип атаки",
  "Год выпуска",
];
