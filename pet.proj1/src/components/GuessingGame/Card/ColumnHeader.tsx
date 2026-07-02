import type { IChampion } from '@/type/championsCard.type';
import { nameColumnHeader } from './championFeatures';

interface Props {
  guessedChampionsList: IChampion[];
}

export const ColumnHeader = ({ guessedChampionsList }: Props) => {
  if (guessedChampionsList.length === 0) return null;
  return (
    <div className="hidden grid-cols-8 gap-2 px-2 min-[390px]:grid lg:gap-3">
      {nameColumnHeader.map((feature) => (
        <div
          className="text-text-primary flex w-full min-w-0 items-center justify-center p-2 text-center leading-tight min-[390px]:text-xs md:text-sm xl:text-xl 2xl:text-xl"
          key={feature}
        >
          {feature}
        </div>
      ))}
    </div>
  );
};
