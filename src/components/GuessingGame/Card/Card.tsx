import { getColorCard } from '@/components/GuessingGame/utils/getColorCard';
import { Feature } from './Features/Feature';
import type { IChampion } from '@/components/GuessingGame/champions.types';

import { getYearHint } from '@/components/GuessingGame/utils/getYearHint';

import { cn } from '@/lib/utils/cn';

import { CARD_REVEAL_DELAY_MS } from '../guessingGame.constants';

import { ChampionNameFeature } from './Features/ChampionNameFeature';
import { ChampionFeatureValue } from './Features/ChampionFeatureValue';
import { visibleFeatures } from './championFeatures';
interface IProps {
  champion: IChampion;
  onRevealEnd?: () => void;
  targetChampion: IChampion;
  shouldAnimateReveal: boolean;
}

export const Card = ({
  champion,
  targetChampion,
  onRevealEnd,
  shouldAnimateReveal,
}: IProps) => {
  return (
    <div
      role="listitem"
      data-champion-id={champion.id}
      data-testid="champion-card"
      className={cn(
        'bg-card-bg lg:bg-card-bg-secondary border-border-card grid w-full grid-cols-4 gap-1.5 rounded-3xl border p-2 min-[390px]:grid min-[390px]:rounded-3xl min-[390px]:p-2 sm:grid-cols-8 md:gap-1 md:rounded-xl md:p-1.5 lg:rounded-2xl xl:gap-2 2xl:gap-3 2xl:p-2',
        shouldAnimateReveal && 'cardAnimation',
      )}
    >
      {visibleFeatures.map((key, index) => {
        const targetFeature = targetChampion[key];
        const currentFeature = champion[key];
        const hint =
          key === 'releaseYear'
            ? getYearHint(champion.releaseYear, targetChampion.releaseYear)
            : null;
        const color = getColorCard(currentFeature, targetFeature);
        const successColor = color === 'success';
        const warningColor = color === 'warning';
        const dangerColor = color === 'danger';

        const lastFeatureIndex = visibleFeatures.length - 1;
        const isLastFeature = index === lastFeatureIndex;

        if (key === 'name') {
          return (
            <ChampionNameFeature
              key={key}
              champion={champion}
              shouldAnimateReveal={shouldAnimateReveal}
            />
          );
        }

        return (
          <Feature
            className={cn(
              shouldAnimateReveal && 'featureAnimation',
              successColor &&
                'border-hint-green-border bg-hint-green-bg text-hint-green-text',
              warningColor &&
                'border-hint-yellow-border bg-hint-yellow-bg text-hint-yellow-text',
              dangerColor &&
                'border-hint-red-border bg-hint-red-bg text-hint-red-text',
            )}
            data-feature={key}
            key={key}
            style={
              shouldAnimateReveal
                ? {
                    animationDelay: `${100 + index * CARD_REVEAL_DELAY_MS}ms`,
                  }
                : undefined
            }
            onAnimationEnd={isLastFeature ? onRevealEnd : undefined}
          >
            <ChampionFeatureValue value={currentFeature} hint={hint} />
          </Feature>
        );
      })}
    </div>
  );
};
