import { CardWrapper } from '@/components/ui/CardWrapper';
import { Attempts } from './Attempts';
import { Button } from '@/components/ui/Button';
import {
  ffGame,
  type TGameStatus,
} from '@/redux/GuessingGame/guessingGame.slice';
import type { IChampion } from '@/type/championsCard.type';
import { cn } from '@/lib/utils/cn';
import { ColorHints } from './ColorHints';
import ProgressBar from './ProgressBar/ProgressBar';
import { MAX_ATTEMPTS } from '@/constants';
import { useAppDispatch } from '@/shared/hooks/redux';

interface IProps {
  gameStatus: TGameStatus;
  guessedChampionsList: IChampion[];
}

export const GameProgress = ({ gameStatus, guessedChampionsList }: IProps) => {
  const dispatch = useAppDispatch();
  const isFFVisible = gameStatus !== 'idle';
  const isFFEnabled =
    gameStatus === 'playing' && guessedChampionsList.length > 3;
  const maxAttempts = MAX_ATTEMPTS;
  const attempts = guessedChampionsList.length;
  const handleFF = () => {
    if (!isFFEnabled) return;

    dispatch(ffGame());
  };
  return (
    <div className="lg:bg-card-bg-secondary flex w-full flex-col items-center gap-2 lg:rounded-2xl lg:p-2">
      <div className="grid w-full grid-cols-[minmax(0,1fr)_25%] gap-2 sm:grid-cols-[minmax(0,1fr)_20%] lg:grid-cols-1">
        <CardWrapper className="bg-card-bg grid w-full grid-cols-[auto_minmax(0,1fr)] gap-3 p-2">
          <CardWrapper className="bg-card-bg-secondary">
            <Attempts attempts={attempts} maxAttempts={maxAttempts} />
          </CardWrapper>

          <ProgressBar maxAttempts={maxAttempts} attempts={attempts} />
        </CardWrapper>
        <div className="lg:hidden">
          <Button
            type="button"
            isOpen={isFFVisible}
            disabled={!isFFEnabled}
            onClick={handleFF}
            title="Сдаться"
            className={cn(
              'h-full rounded-2xl text-3xl font-bold',
              isFFEnabled &&
                'border-btn-ff-border bg-btn-ff-bg text-btn-ff-text',
            )}
          >
            FF
          </Button>
        </div>
      </div>
      <div className="w-full lg:grid lg:grid-cols-[auto_auto] lg:gap-2">
        <ColorHints />
        <div className="hidden lg:grid">
          <Button
            type="button"
            isOpen={isFFVisible}
            disabled={!isFFEnabled}
            onClick={handleFF}
            title="Сдаться"
            className={cn(
              'h-full rounded-2xl text-3xl font-bold lg:text-4xl',
              isFFEnabled &&
                'border-btn-ff-border bg-btn-ff-bg text-btn-ff-text',
            )}
          >
            FF
          </Button>
        </div>
      </div>
    </div>
  );
};
