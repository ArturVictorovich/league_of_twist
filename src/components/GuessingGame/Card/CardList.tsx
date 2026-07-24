import { Card } from './Card';
import type { IChampion } from '@/components/GuessingGame/champions.types';
interface IProps {
  guessedChampionsList: IChampion[];
  onRevealEnd: () => void;
  isCurrentCardRevealPending: boolean;
  targetChampion: IChampion;
}
export const CardList = ({
  targetChampion,
  guessedChampionsList,
  onRevealEnd,
  isCurrentCardRevealPending,
}: IProps) => {
  if (guessedChampionsList.length === 0) return null;
  return (
    <div
      role="list"
      data-testid="guessed-champions-list"
      className="lg:bg-card-bg w-full flex-1 md:rounded-2xl lg:overflow-y-auto"
    >
      <div className="flex max-w-full flex-col gap-2">
        {guessedChampionsList.map((champion, index) => (
          <Card
            targetChampion={targetChampion}
            onRevealEnd={
              index === 0 && isCurrentCardRevealPending
                ? onRevealEnd
                : undefined
            }
            shouldAnimateReveal={index === 0 && isCurrentCardRevealPending}
            key={champion.id}
            champion={champion}
          />
        ))}
      </div>
    </div>
  );
};
