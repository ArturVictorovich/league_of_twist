import type { IChampion } from '@/type/championsCard.type';
import { nameColumnHeader } from './championFeatures';

interface Props {
  guessedChampionsList: IChampion[];
}

export const ColumnHeader = ({ guessedChampionsList }: Props) => {
  if (guessedChampionsList.length === 0) return null;
  return (
    <div className="hidden grid-cols-8 gap-1 px-2 sm:grid">
      {nameColumnHeader.map((feature) => (
        <div
          className="text-text-primary flex min-w-0 items-center justify-center p-1 text-center leading-tight 2xl:text-xl"
          key={feature}
        >
          {feature}
        </div>
      ))}
    </div>
  );
};
