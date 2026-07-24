import { Panel } from '@/components/ui/Panel';
import { Attempts } from './Attempts';

import { type TGameStatus } from '@/redux/GuessingGame/guessingGame.slice';
import type { IChampion } from '@/components/GuessingGame/champions.types';

import { ColorHints } from './ColorHints';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { MAX_ATTEMPTS } from '@/components/GuessingGame/guessingGame.constants';
import { ButtonSurrender } from './ButtonSurrender';

interface IProps {
  gameStatus: TGameStatus;
  guessedChampionsList: IChampion[];
}

export const GameProgress = ({ gameStatus, guessedChampionsList }: IProps) => {
  const maxAttempts = MAX_ATTEMPTS;
  const attempts = guessedChampionsList.length;

  return (
    <div className="lg:bg-card-bg-secondary flex w-full flex-col items-center gap-2 lg:rounded-2xl lg:p-2">
      <div className="grid w-full grid-cols-[minmax(0,1fr)_25%] gap-2 sm:grid-cols-[minmax(0,1fr)_20%] lg:grid-cols-1">
        <Panel className="bg-card-bg grid w-full grid-cols-[auto_minmax(0,1fr)] gap-3 p-2">
          <Panel className="bg-card-bg-secondary">
            <Attempts attempts={attempts} maxAttempts={maxAttempts} />
          </Panel>

          <ProgressBar maxAttempts={maxAttempts} attempts={attempts} />
        </Panel>
        <div className="lg:hidden">
          <ButtonSurrender
            gameStatus={gameStatus}
            guessedChampionsList={guessedChampionsList}
          />
        </div>
      </div>
      <div className="w-full lg:grid lg:grid-cols-[auto_auto] lg:gap-2">
        <ColorHints />
        <div className="hidden lg:grid">
          <ButtonSurrender
            gameStatus={gameStatus}
            guessedChampionsList={guessedChampionsList}
          />
        </div>
      </div>
    </div>
  );
};
