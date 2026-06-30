import type { TGameStatus } from '@/redux/GuessingGame/guessingGame.slice';

interface IProps {
  gameStatus: TGameStatus;
  attempts: number;
}

export const AttemptsContainer = ({ gameStatus, attempts }: IProps) => {
  if (gameStatus === 'idle') {
    return null;
  }
  return (
    <div className="text-center">
      <h2 className="text-text-secondary text-xs min-[390px]:text-[16px]">
        Попытки
      </h2>
      <h3 className="text-text-primary font-bold min-[390px]:text-[17px]">
        {attempts}/10
      </h3>
    </div>
  );
};
