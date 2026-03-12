export type TLane = 'топ' | 'лес' | 'мид' | 'адк' | 'саппорт';

export type TResource = 'мана' | 'энергия' | 'ярость' | 'без ресурса' | 'кровь';
export type TRace =
  | 'человек'
  | 'сушность '
  | 'даркин'
  | 'бездна'
  | 'вастайя'
  | 'призрак'
  | 'cущность';
export type TAttackType = 'ближний' | 'дальний';
export type TRegions =
  | 'Острова'
  | 'Демасия'
  | 'Ноксус'
  | 'Иония'
  | 'Шурима'
  | 'Бездна'
  | 'Пилтовер'
  | 'Заун'
  | 'Фрельйорд'
  | 'Таргон'
  | 'Иония';

export interface IChampion {
  id: number;
  name: string;
  gender: 'мужской' | 'женский';
  race: TRace;
  lanes: TLane[];
  regions: TRegions | TRegions[];
  resource: TResource;
  attackType: TAttackType[];
  releaseYear: number;
  image: string;
}
