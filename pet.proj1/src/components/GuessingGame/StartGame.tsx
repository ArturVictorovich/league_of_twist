import { startGameThunk } from '@/redux/GuessingGame/guessingGame.trunks';
import { Button } from '../../shared/ui/Button';
import { useAppDispatch } from '@/shared/hooks/redux';

export const StartGame = () => {
  const dispatch = useAppDispatch();
  const handleStartGame = () => {
    dispatch(startGameThunk());
  };
  return (
    <Button onClick={handleStartGame} className="p-3 text-2xl rounded-2xl">
      Начать игру
    </Button>
  );
};
