import type { IChampion } from '@/components/GuessingGame/champions.types';
import { nameColumnHeader } from './championFeatures';

interface IProps {
  guessedChampionsList: IChampion[];
}

export const ColumnHeader = ({ guessedChampionsList }: IProps) => {
  if (guessedChampionsList.length === 0) return null;
  return (
    <div
      aria-hidden="true"
      className="hidden border border-transparent px-2 sm:grid sm:grid-cols-8 sm:gap-1.5 md:gap-1 md:px-1.5 xl:gap-2 2xl:gap-3 2xl:px-2"
    >
      {nameColumnHeader.map((feature) => (
        <span
          className="text-text-primary flex h-auto w-full min-w-0 items-center justify-center border border-x border-transparent p-1 text-center text-sm leading-tight lg:text-base xl:text-xl 2xl:text-xl"
          key={feature}
        >
          {feature}
        </span>
      ))}
    </div>
  );
};
