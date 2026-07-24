import { cn } from '@/lib/utils/cn';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  children: ReactNode;
}

export const Button = ({
  children,
  className,
  isOpen = true,
  type = 'button',
  disabled,
  onClick,
  ...props
}: IProps) => {
  if (!isOpen) return null;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'h-14 w-full rounded-3xl border p-1 shadow-sm transition',
        'enabled:hover:scale-110',
        'disabled:cursor-not-allowed',
        'disabled:border-btn-disabled-border disabled:bg-btn-disabled-bg disabled:text-btn-disabled-text',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
