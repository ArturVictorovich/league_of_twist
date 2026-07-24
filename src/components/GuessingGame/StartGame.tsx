import { startGameThunk } from '@/redux/GuessingGame/guessingGame.thunks';
import { Button } from '../ui/Button';
import { useAppDispatch } from '@/shared/hooks/redux';

import { Panel } from '../ui/Panel';
import { MAX_ATTEMPTS } from './guessingGame.constants';

export const StartGame = () => {
  const dispatch = useAppDispatch();
  const handleStartGame = () => {
    dispatch(startGameThunk());
  };

  return (
    <div className="bg-card-bg flex flex-1 flex-col items-center justify-evenly gap-4 p-4 sm:gap-8 sm:p-13 lg:border-0 lg:p-3 xl:p-4">
      <div className="min-[390px]:text-lg">
        <h1 className="text-text-primary mb-3 text-3xl font-semibold sm:mb-5 xl:text-4xl">
          Угадай чемпиона по его свойствам
        </h1>
        <p>
          Выбирай чемпиона, сравнивай подсказки и собирай ответ. Цвета покажут,
          насколько близко ты подобрался. Количество попыток ограничено, удачи!
        </p>
      </div>
      <div className="w-4/5 sm:w-3/5 lg:w-5/6">
        <Button
          data-testid="start-game-button"
          title="Начать игру"
          type="button"
          onClick={handleStartGame}
          className="transform animate-[title-pulse_1.2s_ease-in-out_infinite] bg-(image:--gradient-button) text-lg font-bold"
        >
          Начать игру
        </Button>
      </div>
      <dl className="text-text-primary grid grid-cols-3 gap-2 text-sm min-[390px]:text-base sm:gap-4 lg:text-[13px] xl:text-lg">
        <Panel className="border">
          <dt>{MAX_ATTEMPTS}</dt>
          <dd>попыток на партию</dd>
        </Panel>
        <Panel>
          <dt>8</dt>
          <dd>свойств для сравнения</dd>
        </Panel>
        <Panel>
          <dt>140+</dt>
          <dd>чемпионов</dd>
        </Panel>
      </dl>
    </div>
  );
};
