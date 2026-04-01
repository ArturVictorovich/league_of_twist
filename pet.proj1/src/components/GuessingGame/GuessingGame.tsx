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

  const guessedChampionsList = useAppSelector(
    (state) => state.guessingGame.guessedChampionsList,
  );
  const gameStatus = useAppSelector((state) => state.guessingGame.gameStatus);

  return (
    //
    <div className="guesGame flex flex-col pt-25 items-center justify-start bg-bg min-h-screen w-full ">
      {/* заменить логику рендера через тернарный оператор на состояние внутри компонентов отдельно  */}
      {gameStatus === 'idle' ? <StartGame /> : <SearchChampion />}

      <Button
        isOpen={guessedChampionsList.length > 3 && gameStatus === 'playing'}
        className="mb-2 w-10 animate-[card-drop_0.45s_ease-out_forwards]"
        onClick={handleFF}
      >
        ff
      </Button>

      <CardList />

      <Modal
        colorModal={gameStatus === 'win'}
        onClose={handleonClose}
        isOpen={gameStatus === 'win' || gameStatus === 'lose'}
      >
        {gameStatus === 'win' ? 'Победа!' : 'Поражение!'}
      </Modal>
    </div>
  );
};
