import type { IChampion } from '@/type/championsCard.type';
import { nameColumnHeader } from './championFeatures';

interface Props {
  guessedChampionsList: IChampion[];
}

export const ColumnHeader = ({ guessedChampionsList }: Props) => {
  if (guessedChampionsList.length === 0) return null;
  return (
    <div className="flex flex-row gap-1 px-1.5">
      {nameColumnHeader.map((feature) => (
        <div
          className="text-text-primary flex w-19.5 items-center justify-center text-center leading-tight"
          key={feature}
        >
          {feature}
        </div>
      ))}
    </div>
  );
};
