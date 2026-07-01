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
        'feature border-border-card text-text-primary flex h-auto min-w-0 flex-col items-center justify-center overflow-hidden rounded-xl border p-1 text-center text-sm leading-tight font-semibold min-[390px]:text-base sm:aspect-4/3.5 sm:rounded-xl sm:text-[14px] sm:leading-3 lg:rounded-lg xl:text-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
