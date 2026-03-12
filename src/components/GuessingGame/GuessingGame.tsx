import { CardList } from './Card/CardList';
import { SearchChampion } from './SearchChampion';
import { StartGame } from './StartGame';
import { useAppSelector } from '@/shared/hooks/redux';
export const GuessingGame = () => {
  const startGame = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );

  return (
    <div
      className="guesGame w-screen flex flex-col justify-center items-center 
    "
    >
      {!!startGame ? <SearchChampion /> : <StartGame />}
      {startGame && <CardList />}
    </div>
  );
};
