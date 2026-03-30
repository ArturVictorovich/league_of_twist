import { Modal } from '@/shared/ui/Modal';

import { CardList } from './Card/CardList';
import { SearchChampion } from './SearchChampion';
import { StartGame } from './StartGame';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { ffGame, restartGame } from '@/redux/GuessingGame/guessingGame.slice';
import { Button } from '@/shared/ui/Button';
export const GuessingGame = () => {
  const dispatch = useAppDispatch();
  const handleonClose = () => {
    dispatch(restartGame());
  };
  const handleFF = () => {
    dispatch(ffGame());
  };
  const targetChampion = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );
  const guessedChampionsList = useAppSelector(
    (state) => state.guessingGame.guessedChampionsList,
  );
  const winGame = useAppSelector((state) => state.guessingGame.winGame);
  const losegame = useAppSelector((state) => state.guessingGame.ff);

  return (
    <div
      className="guesGame w-screen flex flex-col justify-center items-center 
    "
    >
      {!!targetChampion ? <SearchChampion /> : <StartGame />}
      {guessedChampionsList.length > 3 && (
        <Button
          className="mb-2 w-10 animate-[card-drop_0.45s_ease-out_forwards]"
          onClick={handleFF}
        >
          ff
        </Button>
      )}

      {!!targetChampion && <CardList />}
      <Modal onClose={handleonClose} isOpen={winGame}>
        Победа
      </Modal>
      <Modal onClose={handleonClose} isOpen={losegame}>
        Поражение
      </Modal>
    </div>
  );
};
