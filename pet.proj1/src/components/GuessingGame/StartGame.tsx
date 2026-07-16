import { startGameThunk } from '@/redux/GuessingGame/guessingGame.thunks';
import { Button } from '../ui/Button';
import { useAppDispatch } from '@/shared/hooks/redux';
import type { TGameStatus } from '@/redux/GuessingGame/guessingGame.slice';
import { CardWrapper } from '../ui/CardWrapper';
interface IProps {
  gameStatus: TGameStatus;
}
export const StartGame = ({ gameStatus }: IProps) => {
  const dispatch = useAppDispatch();
  const handleStartGame = () => {
    dispatch(startGameThunk());
  };
  if (gameStatus !== 'idle') return null;
  return (
    <div className="border-border-card bg-card-bg flex flex-col items-center justify-between gap-5 rounded-xl border p-3 lg:p-5">
      <div className="">
        <h1 className="mb-3 text-3xl font-semibold">
          Угадай чемпиона по его свойствам
        </h1>
        <p>
          Выбирай чемпиона, сравнивай подсказки и собирай ответ. Цвета покажут,
          насколько близко ты подобрался. Количество попыток ограничено, удачи!
        </p>
      </div>
      <div className="w-4/5 sm:w-3/5">
        <Button
          title="Начать игру"
          type="button"
          onClick={handleStartGame}
          className="transform bg-(image:--gradient-button) text-lg font-bold"
        >
          Начать игру
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2 text-sm">
        <CardWrapper className="border">
          <h2>10</h2>
          <p>попыток на партию</p>
        </CardWrapper>
        <CardWrapper>
          <h2>8</h2>
          <p>свойств для сравнения</p>
        </CardWrapper>
        <CardWrapper>
          <h2>140+</h2>
          <p>чемпионов</p>
        </CardWrapper>
      </div>
    </div>
  );
};
