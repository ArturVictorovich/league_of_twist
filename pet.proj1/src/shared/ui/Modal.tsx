import type { ReactNode } from 'react';
import { Button } from './Button';
import { useAppSelector } from '@/shared/hooks/redux';
import { cn } from '@/lib/utils';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  colorModal?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  colorModal,
}: IModalProps) => {
  const targetChampion = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );
  if (!isOpen) return null;

  return (
    <div
      className="fixed animate-[card-drop_0.60s_ease-out_forwards] flex items-center justify-center bg-black/50 inset-0 z-50"
      onClick={onClose}
    >
      <div
        className={cn(
          `${colorModal ? 'bg-green-800' : 'bg-red-800'} flex flex-col items-center gap-2 rounded-xl p-6 shadow-xl`,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center items-center flex-col">
          <h2 className="mb-5 text-text-primary text-xl font-bold">
            {children}
          </h2>
          <div className="text-center text-text-secondary italic">{`Загаданный чемпион был(а): ${targetChampion?.name}`}</div>

          <img
            className="h-20 w-20"
            src={targetChampion?.image}
            alt={targetChampion?.name}
          />

          <div className="flex justify-center gap-3">
            <Button className="mt-4 w-40 h-12 rounded-lg" onClick={onClose}>
              Начать снова
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
