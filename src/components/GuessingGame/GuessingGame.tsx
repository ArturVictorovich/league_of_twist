import { GameResultModal } from '@/components/GuessingGame/GameResultModal';

import { CardList } from './Card/CardList';
import { SearchChampion } from './SearchChampion/SearchChampion';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { closeGame } from '@/redux/GuessingGame/guessingGame.slice';

import { startGameThunk } from '@/redux/GuessingGame/guessingGame.thunks';

import { ColumnHeader } from './Card/ColumnHeader';

import { useState } from 'react';
import { GameProgress } from './GameProgress/GameProgress';

export const GuessingGame = () => {
  const dispatch = useAppDispatch();
  const [revealedAttemptsCount, setRevealedAttemptsCount] = useState(0);

  const handleCloseGame = () => {
    setRevealedAttemptsCount(0);
    dispatch(closeGame());
  };
  const handleRestartGame = () => {
    setRevealedAttemptsCount(0);
    dispatch(startGameThunk());
  };
  const gameEndReason = useAppSelector(
    (state) => state.guessingGame.gameEndReason,
  );
  const targetChampion = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );
  const guessedChampionsList = useAppSelector(
    (state) => state.guessingGame.guessedChampionsList,
  );
  const gameStatus = useAppSelector((state) => state.guessingGame.gameStatus);

  const isCurrentCardFinishedReveal =
    revealedAttemptsCount === guessedChampionsList.length;

  const isCurrentCardRevealPending =
    revealedAttemptsCount < guessedChampionsList.length;
  const finishCurrentReveal = () => {
    if (!isCurrentCardRevealPending) return;
    setRevealedAttemptsCount(guessedChampionsList.length);
  };
  const handleGameClick = () => {
    finishCurrentReveal();
  };

  const isPressFF = gameEndReason === 'surrender';
  const isGameFinished = gameStatus === 'win' || gameStatus === 'lose';
  const isOpenModal = isGameFinished && isCurrentCardFinishedReveal;

  const isWin = gameStatus === 'win';
  if (!targetChampion) return null;
  return (
    <div
      onClick={handleGameClick}
      className="relative flex min-h-0 w-full flex-1 lg:min-h-0 lg:overflow-hidden"
    >
      <div className="flex w-full flex-col gap-3 lg:flex-row 2xl:gap-5">
        <aside className="lg:bg-card-bg lg:border-border-card relative flex flex-col items-center gap-3 pt-10 md:w-full md:rounded-2xl lg:m-0 lg:w-1/3 lg:gap-4 lg:border lg:px-2.5 xl:w-4/12 xl:gap-4 xl:px-5 2xl:w-3/10 2xl:gap-5 2xl:p-5 2xl:pt-15">
          <SearchChampion
            gameStatus={gameStatus}
            isCurrentCardRevealPending={isCurrentCardRevealPending}
          />
          <div className="sm:w-4/5 lg:w-full">
            <GameProgress
              gameStatus={gameStatus}
              guessedChampionsList={guessedChampionsList}
            />
          </div>
        </aside>

        <section className="lg:bg-card-bg lg:border-border-card w-full gap-1 md:flex md:min-h-0 md:flex-1 md:flex-col md:rounded-2xl lg:min-h-0 lg:overflow-hidden lg:border lg:p-2 xl:p-3 2xl:gap-4 2xl:p-4">
          <ColumnHeader guessedChampionsList={guessedChampionsList} />
          <CardList
            targetChampion={targetChampion}
            isCurrentCardRevealPending={isCurrentCardRevealPending}
            onRevealEnd={() =>
              setRevealedAttemptsCount(guessedChampionsList.length)
            }
            guessedChampionsList={guessedChampionsList}
          />
        </section>
      </div>

      <GameResultModal
        targetChampion={targetChampion}
        isWin={isWin}
        onClose={handleCloseGame}
        onRestart={handleRestartGame}
        isOpen={isPressFF || isOpenModal}
      >
        {isWin ? 'Победа!' : 'Поражение!'}
      </GameResultModal>
    </div>
  );
};
