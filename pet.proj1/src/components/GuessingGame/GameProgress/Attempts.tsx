import type { TGameStatus } from '@/redux/GuessingGame/guessingGame.slice';

interface IProps {
  gameStatus?: TGameStatus;
  attempts: number;
  maxAttempts: number;
}

export const Attempts = ({ gameStatus, attempts, maxAttempts }: IProps) => {
  if (gameStatus === 'idle') {
    return null;
  }
  return (
    <div className="text-center">
      <h2 className="text-text-secondary text-sm leading-none sm:text-base 2xl:text-lg">
        Попытки
      </h2>
      <p className="text-text-primary text-base font-bold min-[390px]:text-lg lg:text-base xl:text-lg 2xl:text-xl">
        {attempts}/{maxAttempts}
      </p>
    </div>
  );
};
