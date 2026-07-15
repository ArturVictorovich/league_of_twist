import type { ReactNode } from 'react';
import { Button } from '../ui/Button';

import { cn } from '@/lib/utils/cn';
import type { IChampion } from '@/type/championsCard.type';
import { PortraitChampion } from './PortraitWrapper/PortraitChampion';

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
          'flex w-8/10 items-center justify-center rounded-xl p-0.5 sm:w-6/10 lg:w-3/10',
          isWin
            ? 'bg-(image:--gradient-modal-success)'
            : 'bg-(image:--gradient-modal-danger)',
        )}
      >
        <div
          className={cn(
            `bg-card-bg flex w-full flex-col items-center gap-2 rounded-xl p-2 shadow-xl sm:p-3`,
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <h2
              className={cn(
                'text-text-primary animate-[title-pulse_1.2s_ease-in-out_infinite] text-3xl font-bold md:text-4xl xl:text-5xl',
                isWin ? 'text-success' : 'text-danger',
              )}
            >
              {children}
            </h2>
            <div className="text-text-secondary text-center italic">
              Загаданный чемпион был(а):
            </div>
            <div
              className={cn(
                'flex aspect-square w-2/3 items-center justify-center rounded-xl p-0.5',
                isWin ? 'bg-success-green' : 'bg-danger-red',
              )}
            >
              <div className="aspect-square w-full rounded-lg">
                {targetChampion && (
                  <PortraitChampion champion={targetChampion} />
                )}
              </div>
            </div>
            <div className="text-text-primary text-2xl font-medium">
              {targetChampion?.name}
            </div>
            <div className="flex w-4/5 flex-col items-center justify-center gap-2">
              <Button
                title="Начать снова"
                type="button"
                className="text-text-primary h-auto w-full rounded-xl border-0 bg-(image:--gradient-button) p-3 text-lg font-bold shadow-xl"
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
