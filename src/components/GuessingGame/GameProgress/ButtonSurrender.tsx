import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';
import {
  ffGame,
  type TGameStatus,
} from '@/redux/GuessingGame/guessingGame.slice';
import { useAppDispatch } from '@/shared/hooks/redux';
import type { IChampion } from '../champions.types';
import { MIN_ATTEMPTS_BEFORE_SURRENDER } from '../guessingGame.constants';
interface IProps {
  gameStatus: TGameStatus;
  guessedChampionsList: IChampion[];
}
export const ButtonSurrender = ({
  gameStatus,
  guessedChampionsList,
}: IProps) => {
  const dispatch = useAppDispatch();

  const isFFVisible = gameStatus !== 'idle';
  const isFFEnabled =
    gameStatus === 'playing' &&
    guessedChampionsList.length > MIN_ATTEMPTS_BEFORE_SURRENDER;

  const handleFF = () => {
    if (!isFFEnabled) return;

    dispatch(ffGame());
  };
  return (
    <Button
      aria-label="Сдаться"
      data-testid="surrender-button"
      type="button"
      isOpen={isFFVisible}
      disabled={!isFFEnabled}
      onClick={handleFF}
      title="Сдаться"
      className={cn(
        'h-full rounded-2xl text-3xl font-bold',
        isFFEnabled && 'border-btn-ff-border bg-btn-ff-bg text-btn-ff-text',
      )}
    >
      FF
    </Button>
  );
};
