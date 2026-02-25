import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Feature = ({ children }: Props) => {
  return (
    <div className="border p-1 rounded-xs border-border flex items-center justify-center h-13 w-13 bg-secondary">
      {children}
    </div>
  );
};
