import { GameResultModal } from "@/components/GuessingGame/GameResultModal";

import { CardList } from "./Card/CardList";
import { SearchChampion } from "./SearchChampion/SearchChampion";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { closeGame, ffGame } from "@/redux/GuessingGame/guessingGame.slice";
import { Button } from "@/components/ui/Button";

import { AttemptsContainer } from "./GameProgress/AttemptsContainer";
import { cn } from "@/lib/utils/cn";
import { startGameThunk } from "@/redux/GuessingGame/guessingGame.thunks";
import { ColorHints } from "./GameProgress/ColorHints";
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
  const isGameFinished = gameStatus === "win" || gameStatus === "lose";
  const isWin = gameStatus === "win";
  const isFFVisible = gameStatus !== "idle";

  const isFFEnabled =
    gameStatus === "playing" && guessedChampionsList.length > 3;
  if (gameStatus === "idle") {
    return null;
  }

  return (
    <div className="gGame bg-bg relative flex min-h-0 w-full flex-1 flex-col">
      <div className="flex w-full flex-col gap-4 md:grid md:min-h-0 md:flex-1 md:grid-cols-[280px_minmax(0,1fr)] md:gap-4">
        <aside className="md:bg-card-bg w-full md:flex md:min-h-0 md:flex-col md:gap-4 md:rounded-2xl md:p-4">
          <SearchChampion />

          <div className="mb-2 flex w-full items-center justify-between gap-3">
            <div className="bg-card-bg  md:bg-card-bg-secondary border-border-card flex h-12 w-62 items-center justify-between rounded-3xl border px-4 min-[390px]:h-15 min-[390px]:w-65">
              <AttemptsContainer
                gameStatus={gameStatus}
                attempts={guessedChampionsList.length}
              />
              <div className="md:hidden">
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
                "h-12 w-26.5 border text-lg font-bold min-[390px]:h-15 min-[390px]:w-27 min-[390px]:text-2xl",
                isFFEnabled &&
                  "border-btn-ff-border bg-btn-ff-bg text-btn-ff-text",
              )}
            >
              FF
            </Button>
          </div>
          <div className="hidden md:block">
            <ColorHints variant="panel" />
          </div>
        </aside>

        <section className="md:bg-card-bg w-full md:flex md:min-h-0 md:flex-1 md:flex-col md:overflow-hidden md:rounded-2xl md:p-2">
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
        {isWin ? "Победа!" : "Поражение!"}
      </GameResultModal>
    </div>
  );
};
