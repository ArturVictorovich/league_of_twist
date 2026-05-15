import { GameResultModal } from '@/components/GuessingGame/GameResultModal';

import { CardList } from './Card/CardList';
import { SearchChampion } from './SearchChampion/SearchChampion';
import { StartGame } from './StartGame';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { ffGame, restartGame } from '@/redux/GuessingGame/guessingGame.slice';
import { Button } from '@/components/ui/Button';
export const GuessingGame = () => {
  const dispatch = useAppDispatch();
  const handleRestartGame = () => {
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
  const gameStatus = useAppSelector((state) => state.guessingGame.gameStatus);
  const isGameFinished = gameStatus === 'win' || gameStatus === 'lose';
  const isWin = gameStatus === 'win';

  return (
    <div className="gGame relative flex flex-col p-1 items-center  bg-bg min-h-screen w-full ">
      <StartGame />
      <SearchChampion />

      <Button
        type="button"
        isOpen={guessedChampionsList.length > 3 && gameStatus === 'playing'}
        className="w-12 font-bold absolute left-1/2 -translate-x-1/2 top-13  animate-[card-drop_0.45s_ease-out_forwards]
        md:w-16 md:rounded-md md:text-lg"
        onClick={handleFF}
        title="Сдаться"
      >
        ff
      </Button>

      <CardList />

      <GameResultModal
        targetChampion={targetChampion}
        isWin={isWin}
        onClose={handleRestartGame}
        isOpen={isGameFinished}
      >
        {isWin ? 'Победа!' : 'Поражение!'}
      </GameResultModal>
    </div>
  );
};
