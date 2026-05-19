export type TLane = "топ" | "лес" | "мид" | "адк" | "саппорт";

export type TResource = "мана" | "энергия" | "ярость" | "без ресурса" | "кровь";
export type TRace =
  | "человек"
  | "сущность"
  | "даркин"
  | "бездна"
  | "вастайя"
  | "призрак";
export type TAttackType = "ближний" | "дальний";
export type TRegions =
  | "Острова"
  | "Демасия"
  | "Ноксус"
  | "Иония"
  | "Шурима"
  | "Бездна"
  | "Пилтовер"
  | "Заун"
  | "Фрельйорд"
  | "Таргон";

export interface IChampion {
  id: number;
  name: string;
  gender: "мужской" | "женский";
  race: TRace;
  lanes: TLane[];
  regions: TRegions | TRegions[];
  resource: TResource;
  attackType: TAttackType | TAttackType[];
  releaseYear: number;
  image: string;
}
