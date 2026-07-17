import { cn } from '@/lib/utils/cn';
interface Props {
  tone: string;
  isActive: boolean;
}
const SegmentBar = ({ tone, isActive }: Props) => {
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

export default SegmentBar;
