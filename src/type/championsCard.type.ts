export interface IChampion {
  id: string;
  name: string;
  role: 'Mage' | 'Fighter' | 'Assassin' | 'Tank' | 'Marksman';
  region: string;
  image: string;
}
