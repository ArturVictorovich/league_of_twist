import { startGameThunk } from '@/redux/GuessingGame/guessingGame.thunks';
import { Button } from '../ui/Button';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';

export const StartGame = () => {
  const gameStatus = useAppSelector((state) => state.guessingGame.gameStatus);
  const dispatch = useAppDispatch();
  const handleStartGame = () => {
    dispatch(startGameThunk());
  };
  if (gameStatus !== 'idle') return null;
  return (
    <Button
      title="Начать игру"
      type="button"
      onClick={handleStartGame}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-(image:--gradient-button) text-lg font-bold"
    >
      Начать игру
    </Button>
  );
};
