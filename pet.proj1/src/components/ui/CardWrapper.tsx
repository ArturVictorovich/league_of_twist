import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string | null;
}
export const CardWrapper = ({ children, className, ...props }: IProps) => {
  return (
    <div
      className={cn(
        `border-border-card bg-card-bg-secondary overflow-hidden rounded-xl border p-2`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
