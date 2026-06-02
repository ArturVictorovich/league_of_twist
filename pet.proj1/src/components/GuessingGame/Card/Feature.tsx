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
        'feature border p-1  rounded-xl text-text-primary text-xs min-[390px]:text-[16px] font-semibold border-border flex-col wrap-break-word whitespace-normal flex items-center justify-center h-7 w-23.5 min-[390px]:h-9 min-[390px]:w-28',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
