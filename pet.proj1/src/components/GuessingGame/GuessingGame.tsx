import { Modal } from '@/shared/ui/Modal/Modal';
import { WinGameModal } from '../../shared/ui/Modal/WinGameModal';
import { CardList } from './Card/CardList';
import { SearchChampion } from './SearchChampion';
import { StartGame } from './StartGame';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { restartGame } from '@/redux/GuessingGame/guessingGame.slice';
export const GuessingGame = () => {
  const dispatch = useAppDispatch();
  const handleonClose = () => {
    dispatch(restartGame());
  };
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
      <Modal onClose={handleonClose} isOpen={winGame}>
        <WinGameModal onClose={handleonClose} />
      </Modal>
    </div>
  );
};
