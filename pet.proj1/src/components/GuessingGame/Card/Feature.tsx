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
        'feature border-border-card text-text-primary flex h-8 w-full min-w-0 flex-col items-center justify-center overflow-hidden rounded-xl border p-1 text-center text-sm leading-tight font-semibold min-[390px]:h-9 min-[390px]:text-base lg:h-17.5 lg:w-19.5 lg:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
