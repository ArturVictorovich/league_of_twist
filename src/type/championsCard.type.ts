export interface IChampion {
  id: string;
  name: string;
  role: 'Mage' | 'Fighter' | 'Assassin' | 'Tank' | 'Marksman';
  region: string;
  image: string;
}

// export type TLane = 'топ' | 'лес' | 'мид' | 'адк' | 'саппорт';

// export type TResource = 'мана' | 'энергия' | 'ярость' | 'без ресурса' | 'кровь';

// export type TAttackType = 'ближний' | 'дальний';

// export interface IChampion {
//   id: number;
//   name: string;
//   gender: 'мужской' | 'женский';
//   race: string;
//   lanes: TLane[];
//   regions: string[];
//   resource: TResource;
//   attackType: TAttackType[];
//   releaseYear: number;
//   image: string;
// }
