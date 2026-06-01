import { Card } from './Card';
import { ColumnHeader } from './ColumnHeader';
import type { IChampion } from '@/type/championsCard.type';

export const CardList = ({
  guessedChampionsList,
}: {
  guessedChampionsList: IChampion[];
}) => {
  if (guessedChampionsList.length === 0) return null;
  return (
    <div className="scrollbar-custom overflow-y-auto w-full ">
      {/* <ColumnHeader /> */}
      <div
        className=" gap-2 flex flex-col-reverse max-w-full 
      "
      >
        {guessedChampionsList.map((champion) => (
          <Card key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};
