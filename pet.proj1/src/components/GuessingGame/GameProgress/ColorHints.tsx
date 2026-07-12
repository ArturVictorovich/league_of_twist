import { cn } from '@/lib/utils/cn';
type IVariant = 'compact' | 'panel';
interface Props {
  variant: IVariant;
}

export const ColorHints = ({ variant }: Props) => {
  return (
    <div
      className={cn(
        variant === 'panel' &&
          'border-border-card bg-card-bg-secondary rounded-2xl border p-3 xl:text-lg',
        variant === 'compact' &&
          'text-[9px] min-[390px]:text-[10px] sm:text-sm sm:leading-4',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <span className="bg-success-green block h-2 w-2 rounded-full"></span>
        <p className="text-success-green">Совпадение</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="bg-warning-yellow block h-2 w-2 rounded-full"></span>
        <p className="text-warning-yellow">Частичное совпадение</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="bg-danger-red block h-2 w-2 rounded-full"></span>
        <p className="text-danger-red">Нет совпадений</p>
      </div>
    </div>
  );
};
