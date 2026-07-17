import { GameResultModal } from '@/components/GuessingGame/GameResultModal';

import { CardList } from './Card/CardList';
import { SearchChampion } from './SearchChampion/SearchChampion';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { closeGame, ffGame } from '@/redux/GuessingGame/guessingGame.slice';
import { Button } from '@/components/ui/Button';

import { cn } from '@/lib/utils/cn';
import { startGameThunk } from '@/redux/GuessingGame/guessingGame.thunks';
import { ColorHints } from './GameProgress/ColorHints';
import { ColumnHeader } from './Card/ColumnHeader';
import ProgressBar from './GameProgress/ProgressBar/ProgressBar';
import { MAX_ATTEMPTS } from '@/constants';
import { Attempts } from './GameProgress/Attempts';
import { useEffect, useState } from 'react';

export const GuessingGame = () => {
  const [endReveal, setEndReveal] = useState<boolean>(false);
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
  const isWinGame = isGameFinished && endReveal;
  const isLoseGame = gameStatus === 'lose';
  useEffect(() => {
    setEndReveal(false);
  }, [guessedChampionsList.length]);

  const maxAttempts = MAX_ATTEMPTS;
  const attempts = guessedChampionsList.length;
  const isFFEnabled =
    gameStatus === 'playing' && guessedChampionsList.length > 3;

  return (
    <div className="gGame bg-bg relative flex min-h-0 w-full flex-1 lg:min-h-0 lg:overflow-hidden">
      <div className="flex w-full flex-col gap-3 lg:flex-row 2xl:gap-5">
        <aside className="lg:bg-card-bg lg:border-border-card relative flex flex-col items-center gap-3 pt-10 md:w-full md:rounded-2xl lg:m-0 lg:w-4/14 lg:gap-4 lg:border lg:px-2.5 xl:w-4/12 xl:gap-4 xl:px-5 2xl:w-3/10 2xl:gap-5 2xl:p-5 2xl:pt-15">
          <SearchChampion />
          <div className="flex w-full justify-between gap-3 sm:w-4/5 lg:w-full">
            <div className="bg-card-bg md:bg-card-bg-secondary border-border-card flex h-12 w-full max-w-9/12 items-center justify-center gap-2 rounded-3xl border px-3 min-[390px]:h-15 sm:gap-4 md:px-4 lg:w-full 2xl:px-5">
              <div className="flex justify-center">
                {' '}
                <Attempts gameStatus={gameStatus} attempts={attempts} />
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
                'h-12 w-26.5 border text-lg font-bold min-[390px]:h-15 min-[390px]:w-27 min-[390px]:text-2xl 2xl:w-32 2xl:text-3xl',
                isFFEnabled &&
                  'border-btn-ff-border bg-btn-ff-bg text-btn-ff-text',
              )}
            >
              FF
            </Button>
          </div>
          <div className="hidden w-full lg:block">
            <ColorHints variant="panel" />
          </div>
        </aside>

        <section className="lg:bg-card-bg lg:border-border-card w-full md:flex md:min-h-0 md:flex-1 md:flex-col md:rounded-2xl lg:min-h-0 lg:overflow-hidden lg:border lg:p-2 xl:p-3 2xl:gap-4 2xl:p-4">
          <ColumnHeader guessedChampionsList={guessedChampionsList} />
          <CardList
            onRevealEnd={() => setEndReveal(true)}
            guessedChampionsList={guessedChampionsList}
          />
        </section>
      </div>

      <GameResultModal
        targetChampion={targetChampion}
        isWin={isWin}
        onClose={handleCloseGame}
        onRestart={handleRestartGame}
        isOpen={isWinGame || isLoseGame}
      >
        {isWin ? 'Победа!' : 'Поражение!'}
      </GameResultModal>
    </div>
  );
};
