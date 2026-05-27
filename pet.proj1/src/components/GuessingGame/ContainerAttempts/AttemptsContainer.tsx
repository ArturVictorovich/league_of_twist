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
    <div className="h-12 w-45 bg-card-bg rounded-3xl border border-border-card flex items-center justify-between px-4">
      <div className="text-center">
        <h2 className="text-text-secondary  text-xs">Попытки</h2>
        <h3 className="text-text-primary text-lg  font-bold">{attempts}/10</h3>
      </div>
      <ColorHints />
    </div>
  );
};
