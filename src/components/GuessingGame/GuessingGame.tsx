import { SearchChampion } from './SearchChampion';
import { StartGame } from './StartGame';

export const GuessingGame = () => {
  const start = false;
  return (
    <div
      className="guesGame w-screen flex flex-col justify-center items-center 
    "
    >
      {!start ? <SearchChampion /> : <StartGame />}
    </div>
  );
};
