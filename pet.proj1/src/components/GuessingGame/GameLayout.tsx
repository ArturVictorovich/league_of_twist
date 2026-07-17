import { useAppSelector } from '@/shared/hooks/redux';
import { GuessingGame } from './GuessingGame';
import { StartGame } from './StartGame';
export const GameLayout = () => {
  const gameStatus = useAppSelector((state) => state.guessingGame.gameStatus);

  if (gameStatus === 'idle') {
    return (
      <div className="GL flex w-full flex-1 flex-col gap-3 lg:flex-row 2xl:gap-5">
        <div className="lg:bg-card-bg border-border-card flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-3xl border md:w-full lg:w-4/14 lg:flex-none lg:rounded-2xl xl:w-4/12 2xl:w-3/10">
          <StartGame />
        </div>
        <div className="lg:bg-card-bg border-border-card hidden w-full border lg:block lg:min-h-0 lg:flex-1 lg:rounded-2xl"></div>
      </div>
    );
  }
  return (
    <>
      <GuessingGame />
    </>
  );
};
