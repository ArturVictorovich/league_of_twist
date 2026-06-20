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
        'feature flex flex-col h-8 w-full min-w-0 items-center justify-center overflow-hidden rounded-xl border border-border-card p-1 text-center text-sm min-[390px]:text-base min-[390px]:h-9 font-semibold leading-tight text-text-primary',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
