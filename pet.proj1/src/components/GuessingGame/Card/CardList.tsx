import { useAppSelector } from '@/shared/hooks/redux';
import { Card } from './Card';

export const CardList = () => {
  const guessedChampionsList = useAppSelector(
    (state) => state.guessingGame.guessedChampionsList,
  );
  if (guessedChampionsList.length === 0) return null;
  return (
    <div className="pl-2 pr-1 gap-1 flex flex-col-reverse max-w-full overflow-hidden">
      {guessedChampionsList.map((champion) => (
        <Card key={champion.id} champion={champion} />
      ))}
    </div>
  );
};
