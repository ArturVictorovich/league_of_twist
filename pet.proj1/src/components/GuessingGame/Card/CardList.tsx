import { Card } from './Card';
import type { IChampion } from '@/type/championsCard.type';
interface IProps {
  guessedChampionsList: IChampion[];
  onRevealEnd: () => void;
}
export const CardList = ({ guessedChampionsList, onRevealEnd }: IProps) => {
  if (guessedChampionsList.length === 0) return null;
  return (
    <div className="cardList lg:bg-card-bg w-full flex-1 md:rounded-2xl lg:overflow-y-auto">
      <div className="flex max-w-full flex-col gap-2">
        {guessedChampionsList.map((champion, index) => (
          <Card
            onRevealEnd={index === 0 ? onRevealEnd : undefined}
            key={champion.id}
            champion={champion}
          />
        ))}
      </div>
    </div>
  );
};
