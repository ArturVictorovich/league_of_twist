import type { ReactNode } from 'react';
import { Button } from '../Button';
import { useAppSelector } from '@/shared/hooks/redux';

interface Props {
  children: ReactNode;

  isOpen: boolean;
}

export const WinGameModal = ({ children, isOpen = true }: Props) => {
  const targetChampion = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );
  if (!isOpen) return;
  return (
    <div className="fixed flex justify-center items-center flex-col h-55 p-2 rounded w-80  border bg-amber-600">
      <h2 className="mb-5">{children}</h2>
      <div className="">{`Загаданный чемпион был(а) ${targetChampion?.name}`}</div>
      <div className="">
        <img
          className="h-15"
          src={targetChampion?.image}
          alt={targetChampion?.name}
        />
      </div>
      <div className="">
        <Button className="w-18 h-13 rounded-sm text-sm" onClick={() => {}}>
          Начать снова
        </Button>
        <Button className="w-18 h-13 rounded-sm text-sm" onClick={() => {}}>
          ок
        </Button>
      </div>
    </div>
  );
};
