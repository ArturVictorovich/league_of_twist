import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';

interface IButtonProps {
  isOpen?: boolean;
  children: ReactNode;
  className?: string;
  onClick: () => void;
  title: string;
  type: 'button' | 'submit' | 'reset';
}
export const Button = ({
  children,
  className,
  onClick,
  isOpen,
}: IButtonProps) => {
  if (isOpen === false) return null;
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
