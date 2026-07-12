import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Feature = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'feature border-border-card text-text-primary flex h-16 min-w-0 flex-col items-center justify-center rounded-xl border p-1 text-center text-sm leading-tight font-semibold min-[390px]:aspect-7/6 min-[390px]:h-auto min-[390px]:w-full min-[390px]:rounded-2xl min-[390px]:text-base min-[390px]:leading-3 sm:rounded-2xl sm:text-sm sm:leading-3 md:rounded-xl md:text-[14px] lg:rounded-xl lg:text-base xl:text-xl 2xl:text-xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
