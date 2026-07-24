import { cn } from '@/lib/utils/cn';
import type { TProgressTone } from '../../utils/getProgressTone';
interface IProps {
  tone: TProgressTone;
  isActive: boolean;
}
export const SegmentBar = ({ tone, isActive }: IProps) => {
  return (
    <span
      className={cn(
        'h-2 w-full rounded-3xl bg-gray-500',
        isActive && tone === 'success' && 'bg-success',
        isActive && tone === 'danger' && 'bg-danger',
        isActive && tone === 'warning' && 'bg-warning',
      )}
    />
  );
};
