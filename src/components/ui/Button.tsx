import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}
export const Button = ({ children, className, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-primary p-1 w-41 rounded-sm text-text-primary border border-border  shadow-sm  hover:bg-hover  hover:scale-110',
        className,
      )}
    >
      {children}
    </button>
  );
};
