import { Card } from './Card';
import type { IChampion } from '@/type/championsCard.type';

export const CardList = ({
  guessedChampionsList,
}: {
  guessedChampionsList: IChampion[];
}) => {
  if (guessedChampionsList.length === 0) return null;
  return (
    <div className=" pb-4 flex-1 min-h-0 overflow-y-auto w-full  md:bg-card-bg md:rounded-2xl md:p-2 md:overflow-y-auto">
      {/* <ColumnHeader /> */}
      <div
        className=" gap-2 flex flex-col max-w-full 
      "
      >
        {guessedChampionsList.map((champion) => (
          <Card key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};
