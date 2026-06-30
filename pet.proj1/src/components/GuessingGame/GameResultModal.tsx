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
      className="fixed inset-0 z-50 flex animate-[card-drop_0.60s_ease-out_forwards] items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className={cn(
          'flex h-92 w-74 items-center justify-center rounded-xl',
          isWin
            ? 'bg-(image:--gradient-modal-success)'
            : 'bg-(image:--gradient-modal-danger)',
        )}
      >
        <div
          className={cn(
            `bg-card-bg flex h-91 w-73 flex-col items-center gap-2 rounded-xl p-6 shadow-xl`,
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center">
            <h2
              className={cn(
                'text-text-primary mb-3 text-3xl font-bold',
                isWin ? 'text-success' : 'text-danger',
              )}
            >
              {children}
            </h2>
            <div className="text-text-secondary mb-2 text-center italic">
              Загаданный чемпион был(а):
            </div>
            <div
              className={cn(
                'mb-2 flex h-25 w-26 items-center justify-center rounded-lg',
                isWin ? 'bg-success-green' : 'bg-danger-red',
              )}
            >
              <img
                className="h-24 w-25 rounded-lg"
                src={targetChampion?.image}
                alt={targetChampion?.name}
              />
            </div>
            <div className="text-text-primary mb-3 text-2xl font-bold">
              {targetChampion?.name}
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                title="Начать снова"
                type="button"
                className="text-text- h-11 w-42 rounded-xl border-0 bg-(image:--gradient-button) text-lg font-bold"
                onClick={onRestart}
              >
                Начать снова
              </Button>
              <Button
                title="Закрыть"
                type="button"
                className="text-text-muted h-11 w-42 rounded-xl border-0 text-lg shadow-none hover:border"
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
