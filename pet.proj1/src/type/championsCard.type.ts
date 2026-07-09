export type TLane = 'топ' | 'лес' | 'мид' | 'адк' | 'саппорт';

export type TResource =
  | 'мана'
  | 'энергия'
  | 'ярость'
  | 'без ресурса'
  | 'здоровье'
  | 'кровь'
  | 'тепло';
export type TRace =
  | 'человек'
  | 'сущность'
  | 'даркин'
  | 'бездна'
  | 'вастайя'
  | 'призрак'
  | 'йордл'
  | 'демон'
  | 'минотавр'
  | 'голем'
  | 'нежить'
  | 'йети'
  | 'крыса'
  | 'броненосец'
  | 'дух'
  | 'тролль'
  | 'вознесшийся'
  | 'машина'
  | 'бракерн'
  | 'дракон'
  | 'неизвестно';
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
  | 'Бандл Сити'
  | 'Билджвотер'
  | 'Рунтерра'
  | 'Икатия'
  | 'Иксталь';

export interface IChampion {
  id: number;
  name: string;
  gender: 'мужской' | 'женский';
  race: TRace | TRace[];
  lanes: TLane[];
  regions: TRegions | TRegions[];
  resource: TResource;
  attackType: TAttackType | TAttackType[];
  releaseYear: number;
  image: string;
}
