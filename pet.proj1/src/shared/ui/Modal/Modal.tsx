import type { ReactNode } from 'react';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed  flex items-center justify-center bg-black/50 inset-0 z-50"
      onClick={onClose}
    >
      <div
        className="green w-5/6 flex flex-col items-center gap-2 rounded-xl p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
