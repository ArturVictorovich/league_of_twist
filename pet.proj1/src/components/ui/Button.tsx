import { cn } from '@/lib/utils/cn';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  isOpen?: boolean;
  children: ReactNode;
  className?: string;
}

export const Button = ({
  children,
  className,
  isOpen,
  type = 'button',
  ...props
}: IButtonProps) => {
  if (isOpen === false) return null;
  return (
    <button
      type={type}
      {...props}
      className={cn(
        ' p-1 w-70.5 h-14 bg-blue rounded-3xl text-text-button border border-border shadow-sm hover:bg-hover hover:scale-110',
        className,
      )}
    >
      {children}
    </button>
  );
};
