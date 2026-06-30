import { Card } from './Card';
import type { IChampion } from '@/type/championsCard.type';
import { ColumnHeader } from './ColumnHeader';

export const CardList = ({
  guessedChampionsList,
}: {
  guessedChampionsList: IChampion[];
}) => {
  if (guessedChampionsList.length === 0) return null;
  return (
    <div className="cardList md:bg-card-bg min-h-0 w-full flex-1 overflow-y-auto pb-4 md:overflow-y-auto md:rounded-2xl md:p-2">
      <ColumnHeader guessedChampionsList={guessedChampionsList} />
      <div className="flex max-w-full flex-col gap-2">
        {guessedChampionsList.map((champion) => (
          <Card key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};
