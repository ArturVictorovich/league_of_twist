import { Button } from '../Button';
import { useAppSelector } from '@/shared/hooks/redux';

interface IModalProps {
  onClose: () => void;
}

export const WinGameModal = ({ onClose }: IModalProps) => {
  const targetChampion = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="mb-5 text-xl font-bold">Победа</h2>
      <div className="text-center italic">{`Загаданный чемпион был(а) ${targetChampion?.name}`}</div>

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
  );
};
