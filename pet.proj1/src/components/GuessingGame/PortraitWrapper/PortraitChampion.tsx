import { cn } from '@/lib/utils/cn';
import type { IChampion } from '@/type/championsCard.type';
import { PortraitFullback } from './PortraitFullback';
import { PortraitSkeleton } from './PortraitSkeleton';
import { useState, type ReactNode } from 'react';
interface IProps {
  champion: IChampion;
  children?: ReactNode;
}
export const PortraitChampion = ({ champion, children }: IProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      {!isLoaded && !hasError && <PortraitSkeleton />}
      {hasError && <PortraitFullback />}
      <img
        loading="lazy"
        decoding="async"
        onLoad={() => {
          setIsLoaded(true);
        }}
        onError={() => {
          setHasError(true);
        }}
        className={cn(
          'absolute inset-0 z-10 object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
        )}
        src={champion.image}
        alt={champion.name}
      />
      {children}
    </div>
  );
};
