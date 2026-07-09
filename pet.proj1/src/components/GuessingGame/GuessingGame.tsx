import { GameResultModal } from '@/components/GuessingGame/GameResultModal';

import { CardList } from './Card/CardList';
import { SearchChampion } from './SearchChampion/SearchChampion';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { closeGame, ffGame } from '@/redux/GuessingGame/guessingGame.slice';
import { Button } from '@/components/ui/Button';

import { AttemptsContainer } from './GameProgress/AttemptsContainer';
import { cn } from '@/lib/utils/cn';
import { startGameThunk } from '@/redux/GuessingGame/guessingGame.thunks';
import { ColorHints } from './GameProgress/ColorHints';
import { ColumnHeader } from './Card/ColumnHeader';
import ProgressBar from './GameProgress/ProgressBar/ProgressBar';
import { MAX_ATTEMPTS } from '@/constants';
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

  const maxAttempts = MAX_ATTEMPTS;
  const attempts = guessedChampionsList.length;
  const isFFEnabled =
    gameStatus === 'playing' && guessedChampionsList.length > 3;

  if (gameStatus === 'idle') {
    return null;
  }

  return (
    <div className="gGame bg-bg relative flex min-h-0 w-full flex-1">
      <div className="flex w-full flex-col gap-3 lg:flex-row 2xl:gap-5">
        <aside className="lg:bg-card-bg relative flex flex-col gap-3 md:w-full md:rounded-2xl md:p-3 lg:w-3/12 lg:gap-4 xl:w-4/12 xl:gap-4 2xl:w-3/10 2xl:gap-5 2xl:p-5">
          <SearchChampion />

          <div className="flex w-full items-center justify-between gap-3">
            <div className="bg-card-bg md:bg-card-bg-secondary border-border-card flex h-12 w-full max-w-9/12 items-center justify-center gap-2 rounded-3xl border px-3 min-[390px]:h-15 sm:gap-4 2xl:h-20">
              <div className="flex justify-center">
                {' '}
                <AttemptsContainer
                  gameStatus={gameStatus}
                  attempts={attempts}
                />
              </div>{' '}
              <div className="hidden w-full min-[390px]:block">
                <ProgressBar maxAttempts={maxAttempts} attempts={attempts} />
              </div>
              <div className="shrink-0 lg:hidden">
                <ColorHints variant="compact" />
              </div>
            </div>

            <Button
              type="button"
              isOpen={isFFVisible}
              disabled={!isFFEnabled}
              onClick={handleFF}
              title="Сдаться"
              className={cn(
                'h-12 w-26.5 border text-lg font-bold min-[390px]:h-15 min-[390px]:w-27 min-[390px]:text-2xl',
                isFFEnabled &&
                  'border-btn-ff-border bg-btn-ff-bg text-btn-ff-text',
              )}
            >
              FF
            </Button>
          </div>
          <div className="hidden lg:block">
            <ColorHints variant="panel" />
          </div>
        </aside>

        <section className="lg:bg-card-bg w-full md:flex md:min-h-0 md:flex-1 md:flex-col md:rounded-2xl md:p-2 lg:overflow-hidden xl:p-3 2xl:gap-4">
          <ColumnHeader guessedChampionsList={guessedChampionsList} />
          <CardList guessedChampionsList={guessedChampionsList} />
        </section>
      </div>

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
