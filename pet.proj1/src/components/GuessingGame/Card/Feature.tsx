import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Feature = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'border gap-1 shrink-0 p-1 font-semibold rounded-xs text-sm border-border flex-col wrap-break-word whitespace-normal flex items-center justify-center h-17 w-17 bg-secondary md:w-20 md:h-20 md:text-base',
        className,
      )}
    >
      {children}
    </div>
  );
};
