import { cn } from '@/lib/utils/cn';
interface Props {
  tone: string;
  isActive: boolean;
}
const SegmentBar = ({ tone, isActive }: Props) => {
  return (
    <span
      className={cn(
        'aspect-square h-auto w-full bg-gray-500',
        isActive && tone === 'success' && 'bg-success',
        isActive && tone === 'danger' && 'bg-danger',
        isActive && tone === 'warning' && 'bg-warning',
      )}
    />
  );
};

export default SegmentBar;
