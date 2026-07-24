import { cn } from '@/lib/utils/cn';

export const PortraitSkeleton = () => {
  return (
    <div
      className={cn(
        'absolute inset-0 z-0 h-full w-full animate-pulse rounded-xl bg-linear-to-br from-slate-700 via-slate-600 to-slate-800 object-cover',
      )}
    ></div>
  );
};
