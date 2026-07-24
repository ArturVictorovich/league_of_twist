import { cn } from '@/lib/utils/cn';
import type { IChampion } from '../../champions.types';
import { MAX_FEATURE_WORD_LENGTH } from '../../guessingGame.constants';
import { Feature } from './Feature';
import { PortraitChampion } from '../../PortraitWrapper/PortraitChampion';

interface IChampionNameFeatureProps {
  champion: IChampion;
  shouldAnimateReveal: boolean;
}

export const ChampionNameFeature = ({
  champion,
  shouldAnimateReveal,
}: IChampionNameFeatureProps) => {
  const isStringWithSpace = champion.name.includes(' ');
  const isLongWord = champion.name.length > MAX_FEATURE_WORD_LENGTH;

  return (
    <Feature
      className={cn(
        'border-border-card relative overflow-hidden rounded-xl p-0',
        shouldAnimateReveal && 'featureAnimation',
      )}
    >
      <PortraitChampion champion={champion}>
        <div className="absolute inset-x-0 bottom-0 z-20 transition-opacity duration-200">
          <h2
            className={cn(
              'bg-card-bg/70 text-text-primary w-full p-1 text-center text-xs font-medium min-[390px]:text-sm min-[390px]:leading-tight sm:text-sm md:text-xs lg:text-sm xl:text-lg',
              isStringWithSpace && 'p-0.5 sm:text-xs xl:text-sm 2xl:text-lg',
              isLongWord && 'p-0.5 sm:text-xs xl:text-sm 2xl:text-lg',
            )}
          >
            {champion.name}
          </h2>
        </div>
      </PortraitChampion>
    </Feature>
  );
};
