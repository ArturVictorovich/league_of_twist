import { cn } from '@/lib/utils/cn';
import type { HTMLAttributes, ReactNode } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const Panel = ({ children, className, ...props }: IProps) => {
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
