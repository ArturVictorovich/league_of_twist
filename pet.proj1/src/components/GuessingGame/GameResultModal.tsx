import type { ReactNode } from 'react';
import { Button } from '../ui/Button';

import { cn } from '@/lib/utils/cn';
import type { IChampion } from '@/type/championsCard.type';

interface IGameResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestart: () => void;
  children: ReactNode;
  isWin: boolean;
  targetChampion: IChampion | null;
}

export const GameResultModal = ({
  isOpen,
  onClose,
  onRestart,
  children,
  isWin,
  targetChampion,
}: IGameResultModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed  animate-[card-drop_0.60s_ease-out_forwards] flex items-center justify-center bg-black/50 inset-0 z-50 "
      onClick={onClose}
    >
      <div
        className={cn(
          'flex rounded-xl justify-center items-center w-74 h-90',
          isWin
            ? 'bg-(image:--gradient-modal-success)'
            : 'bg-(image:--gradient-modal-danger)',
        )}
      >
        <div
          className={cn(
            `w-73 h-89  bg-card-bg  flex flex-col items-center gap-2 rounded-xl p-6 shadow-xl
          `,
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-center items-center flex-col">
            <h2
              className={cn(
                'mb-3 text-text-primary text-3xl font-bold',
                isWin ? 'text-success' : 'text-danger',
              )}
            >
              {children}
            </h2>
            <div className="text-center text-text-secondary italic mb-2  ">
              Загаданный чемпион был(а):
            </div>
            <div
              className={cn(
                'w-26 h-25 mb-2 rounded-lg flex items-center justify-center',
                isWin ? 'bg-success-green' : 'bg-danger-red',
              )}
            >
              <img
                className="h-24 w-25  rounded-lg"
                src={targetChampion?.image}
                alt={targetChampion?.name}
              />
            </div>
            <div className="text-text-primary text-2xl font-bold mb-3">
              {targetChampion?.name}
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <Button
                title="Начать снова"
                type="button"
                className="w-42 h-11 border-0 text-text- rounded-xl bg-(image:--gradient-button) text-lg font-bold"
                onClick={onRestart}
              >
                Начать снова
              </Button>
              <Button
                title="Закрыть"
                type="button"
                className="w-42 h-11 border-0 rounded-xl text-text-muted  text-lg "
                onClick={onClose}
              >
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
