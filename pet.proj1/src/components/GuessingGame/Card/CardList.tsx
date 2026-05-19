import { useAppSelector } from "@/shared/hooks/redux";
import { Card } from "./Card";
import { ColumnHeader } from "./ColumnHeader";

export const CardList = () => {
  const guessedChampionsList = useAppSelector(
    (state) => state.guessingGame.guessedChampionsList,
  );
  if (guessedChampionsList.length === 0) return null;
  return (
    <div className="pl-2 scrollbar-custom pr-1 max-w-full overflow-x-auto md:p-0">
      <ColumnHeader />
      <div
        className=" gap-1 flex flex-col-reverse max-w-full 
      "
      >
        {guessedChampionsList.map((champion) => (
          <Card key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};
