import type { TGameStatus } from '@/redux/GuessingGame/guessingGame.slice';
import { ColorHints } from './ColorHints';

interface IProps {
  gameStatus: TGameStatus;
  attempts: number;
}

export const AttemptsContainer = ({ gameStatus, attempts }: IProps) => {
  if (gameStatus === 'idle') {
    return null;
  }
  return (
    <div className="h-12 w-62 min-[390px]:h-15 min-[390px]:w-65 bg-card-bg rounded-3xl border border-border-card flex items-center justify-between px-4 min-[390px]:">
      <div className="text-center ">
        <h2 className="text-text-secondary min-[390px]:text-[16px]  text-xs">
          Попытки
        </h2>
        <h3 className="text-text-primary min-[390px]:text-[17px]  font-bold">
          {attempts}/10
        </h3>
      </div>
      <ColorHints />
    </div>
  );
};
