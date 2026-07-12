import type { TGameStatus } from '@/redux/GuessingGame/guessingGame.slice';

interface IProps {
  gameStatus: TGameStatus;
  attempts: number;
}

export const Attempts = ({ gameStatus, attempts }: IProps) => {
  if (gameStatus === 'idle') {
    return null;
  }
  return (
    <div className="text-center leading-none">
      <h2 className="text-text-secondary text-xs leading-none min-[390px]:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-lg">
        Попытки
      </h2>
      <h3 className="text-text-primary 2xl:text-1xl mt-1 text-base leading-none font-bold min-[390px]:text-lg lg:text-base xl:text-lg">
        {attempts}/10
      </h3>
    </div>
  );
};
