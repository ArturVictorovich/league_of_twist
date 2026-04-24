import { nameColumnHeader } from './championFeatures';
import { useAppSelector } from '@/shared/hooks/redux';
export const ColumnHeader = () => {
  const guessedChampionsList = useAppSelector(
    (state) => state.guessingGame.guessedChampionsList,
  );
  if (guessedChampionsList.length === 0) return null;
  return (
    <div className="flex flex-row  gap-1">
      {nameColumnHeader.map((feature) => (
        <span
          className="text-text-primary flex items-center justify-center text-center font-semibold min-w-17 md:w-20 "
          key={feature}
        >
          {feature}
          <span />
        </span>
      ))}
    </div>
  );
};
