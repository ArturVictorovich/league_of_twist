import { WinGameModal } from '../ui/Modal/WinGameModal';
import { CardList } from './Card/CardList';
import { SearchChampion } from './SearchChampion';
import { StartGame } from './StartGame';
import { useAppSelector } from '@/shared/hooks/redux';
export const GuessingGame = () => {
  const targetChampion = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );
  const winGame = useAppSelector((state) => state.guessingGame.winGame);

  return (
    <div
      className="guesGame w-screen flex flex-col justify-center items-center 
    "
    >
      {!!targetChampion ? <SearchChampion /> : <StartGame />}
      {!!targetChampion && <CardList />}
      <WinGameModal isOpen={winGame}>Поздравляю, ты угадал!</WinGameModal>
    </div>
  );
};
