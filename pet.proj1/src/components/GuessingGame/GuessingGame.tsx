import { GameResultModal } from '@/components/GuessingGame/GameResultModal';

import { CardList } from './Card/CardList';
import { SearchChampion } from './SearchChampion/SearchChampion';
import { StartGame } from './StartGame';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { closeGame, ffGame } from '@/redux/GuessingGame/guessingGame.slice';
import { Button } from '@/components/ui/Button';

import { AttemptsContainer } from './ContainerAttempts/AttemptsContainer';
import { cn } from '@/lib/utils/cn';
import { startGameThunk } from '@/redux/GuessingGame/guessingGame.thunks';
export const GuessingGame = () => {
  const dispatch = useAppDispatch();
  const handleCloseGame = () => {
    dispatch(closeGame());
  };
  const handleRestartGame = () => {
    dispatch(startGameThunk());
  };
  const handleFF = () => {
    if (!isFFEnabled) return;

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
  const isFFVisible = gameStatus !== 'idle';

  const isFFEnabled =
    gameStatus === 'playing' && guessedChampionsList.length > 3;
  return (
    <div className="gGame relative flex flex-col  items-center  bg-bg min-h-screen w-full ">
      <StartGame />

      <SearchChampion />
      <div className="flex w-full max-w-2xl items-center justify-between gap-4 mb-2">
        <AttemptsContainer
          gameStatus={gameStatus}
          attempts={guessedChampionsList.length}
        />
        {gameStatus !== 'idle' && (
          <Button
            type="button"
            isOpen={isFFVisible}
            disabled={!isFFEnabled}
            onClick={handleFF}
            title="Сдаться"
            className={cn(
              'h-12 w-26.5 border text-lg font-bold',

              isFFEnabled
                ? 'border-btn-ff-border bg-btn-ff-bg text-btn-ff-text'
                : 'border-[#334155] bg-[#1E293B] text-[#94A3B8]',
            )}
          >
            FF
          </Button>
        )}
      </div>

      <CardList guessedChampionsList={guessedChampionsList} />

      <GameResultModal
        targetChampion={targetChampion}
        isWin={isWin}
        onClose={handleCloseGame}
        onRestart={handleRestartGame}
        isOpen={isGameFinished}
      >
        {isWin ? 'Победа!' : 'Поражение!'}
      </GameResultModal>
    </div>
  );
};
