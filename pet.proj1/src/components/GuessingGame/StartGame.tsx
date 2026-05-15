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
      className="p-3 text-2xl rounded-2xl"
    >
      Начать игру
    </Button>
  );
};
