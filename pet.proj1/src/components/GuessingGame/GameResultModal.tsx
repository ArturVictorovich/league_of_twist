import type { ReactNode } from 'react';
import { Button } from '../ui/Button';

import { cn } from '@/lib/utils/cn';
import type { IChampion } from '@/type/championsCard.type';

interface IGameResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  isWin: boolean;
  targetChampion: IChampion | null;
}

export const GameResultModal = ({
  isOpen,
  onClose,
  children,
  isWin,
  targetChampion,
}: IGameResultModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed animate-[card-drop_0.60s_ease-out_forwards] flex items-center justify-center bg-black/50 inset-0 z-50"
      onClick={onClose}
    >
      <div
        className={cn(
          `${isWin ? 'bg-green-800' : 'bg-red-800'} flex flex-col items-center gap-2 rounded-xl p-6 shadow-xl
          md:w-110 md:p-8 md:h-85 md:rounded-3xl md:shadow-3xl`,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center items-center flex-col">
          <h2 className="mb-5 text-text-primary text-xl font-bold md:text-3xl">
            {children}
          </h2>
          <div className="text-center text-text-secondary italic md:text-xl md:mb-3">{`Загаданный чемпион был(а): ${targetChampion?.name}`}</div>

          <img
            className="h-20 w-20 md:h-30 md:w-30"
            src={targetChampion?.image}
            alt={targetChampion?.name}
          />

          <div className="flex justify-center gap-3">
            <Button
              title="Начать снова"
              type="button"
              className="mt-4 w-40 h-12 rounded-lg"
              onClick={onClose}
            >
              Начать снова
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
