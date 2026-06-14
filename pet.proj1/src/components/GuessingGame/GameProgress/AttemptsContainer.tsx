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
    <div className="text-center ">
      <h2 className="text-text-secondary min-[390px]:text-[16px]  text-xs">
        Попытки
      </h2>
      <h3 className="text-text-primary min-[390px]:text-[17px]  font-bold">
        {attempts}/10
      </h3>
    </div>
  );
};
