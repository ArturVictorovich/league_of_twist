import { GameResultModal } from '@/components/GuessingGame/GameResultModal';

import { CardList } from './Card/CardList';
import { SearchChampion } from './SearchChampion/SearchChampion';
import { StartGame } from './StartGame';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { ffGame, restartGame } from '@/redux/GuessingGame/guessingGame.slice';
import { Button } from '@/components/ui/Button';

import { AttemptsContainer } from './ContainerAttempts/AttemptsContainer';
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
    <div className="gGame relative flex flex-col  items-center  bg-bg min-h-screen w-full ">
      <StartGame />

      <SearchChampion />
      <div className="flex w-full max-w-2xl items-center justify-between gap-4 mb-2">
        <AttemptsContainer />
        <Button
          type="button"
          isOpen={guessedChampionsList.length > 3 && gameStatus === 'playing'}
          className="h-12 w-26.5 text-lg font-bold border border-btn-ff-border bg-btn-ff-bg text-btn-ff-text"
          onClick={handleFF}
          title="Сдаться"
        >
          FF
        </Button>
      </div>

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
