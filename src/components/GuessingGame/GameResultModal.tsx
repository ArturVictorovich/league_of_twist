import { useEffect, useRef, type ReactNode } from 'react';
import { Button } from '../ui/Button';

import { cn } from '@/lib/utils/cn';
import type { IChampion } from '@/components/GuessingGame/champions.types';
import { PortraitChampion } from './PortraitWrapper/PortraitChampion';

interface IProps {
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
}: IProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!isOpen) return;

    previousActiveElementRef.current = document.activeElement as HTMLElement;

    modalRef.current?.focus();

    return () => {
      previousActiveElementRef.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key != 'Tab') return;

      const modalElement = modalRef.current;
      if (!modalElement) return;
      const focusableElements = modalElement.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (!firstElement || !lastElement) {
        e.preventDefault();
        modalElement.focus();
        return;
      }

      if (!modalElement.contains(document.activeElement)) {
        e.preventDefault();
        firstElement.focus();
        return;
      }

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
        return;
      }

      if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        aria-labelledby="game-result-title"
        aria-describedby="game-result-description"
        data-testid="game-result-modal"
        className={cn(
          'flex w-8/10 animate-[card-drop_0.60s_ease-out_forwards] items-center justify-center rounded-xl p-0.5 sm:w-6/10 lg:w-3/10',
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
              id="game-result-title"
              className={cn(
                'text-text-primary animate-[title-pulse_1.2s_ease-in-out_infinite] text-3xl font-bold md:text-4xl xl:text-5xl',
                isWin ? 'text-success' : 'text-danger',
              )}
            >
              {children}
            </h2>
            <p
              id="game-result-description"
              className="text-text-secondary text-center italic"
            >
              Игра окончена. Загаданный чемпион был:
            </p>
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
                data-testid="restart-game-button"
                title="Начать снова"
                type="button"
                className="text-text-primary h-auto w-full rounded-xl border-0 bg-(image:--gradient-button) p-3 text-lg font-bold shadow-xl"
                onClick={onRestart}
              >
                Начать снова
              </Button>
              <Button
                data-testid="close-game-button"
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
