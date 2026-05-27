import { cn } from '@/lib/utils/cn';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
}: IButtonProps) => {
  if (!isOpen) return null;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'h-14 w-70.5 rounded-3xl border border-border bg-blue p-1 text-text-button shadow-sm transition',
        'enabled:hover:scale-110 enabled:hover:bg-hover',
        'disabled:cursor-not-allowed',
        'disabled:border-[#334155] disabled:bg-[#1E293B] disabled:text-[#94A3B8]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
