import { getColorCard } from '@/shared/utils/getColorCard';
import { Feature } from './Feature';
import type { IChampion } from '@/type/championsCard.type';
import { useAppSelector } from '@/shared/hooks/redux';
import { championFeatures } from './championFeatures';
import { getYearHint } from '@/shared/utils/getYearHint';
import { FaChevronUp } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { cn } from '@/lib/utils/cn';
import { PortraitChampion } from '../PortraitWrapper/PortraitChampion';
interface Props {
  champion: IChampion;
}

export const Card = ({ champion }: Props) => {
  const guestingChampion = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );

  if (!guestingChampion) {
    return null;
  }
  return (
    <div className="card bg-card-bg lg:bg-card-bg-secondary border-border-card grid w-full grid-cols-4 gap-1.5 rounded-3xl border p-2 min-[390px]:grid min-[390px]:rounded-3xl min-[390px]:p-2 sm:grid-cols-8 md:gap-1 md:rounded-xl md:p-1.5 lg:rounded-2xl xl:gap-2 2xl:gap-3 2xl:p-2">
      {championFeatures
        .filter((f) => f !== 'id' && f !== 'image')
        .map((key) => {
          const guessFeature = guestingChampion[key];
          const currentFeature = champion[key];
          const hint =
            key === 'releaseYear'
              ? getYearHint(champion.releaseYear, guestingChampion.releaseYear)
              : null;
          const color = getColorCard(currentFeature, guessFeature);
          const isStringWithSpace =
            typeof currentFeature === 'string' && currentFeature.includes(' ');
          const maxLengthWord = 8;
          const isLongWord =
            typeof currentFeature === 'string' &&
            currentFeature.length > maxLengthWord;
          if (key === 'name') {
            return (
              <Feature
                className="border-border-card overflow-hidden rounded-xl p-0"
                key={key}
              >
                <PortraitChampion champion={champion}>
                  <div className="absolute inset-x-0 bottom-0 z-20">
                    {' '}
                    <h2
                      className={cn(
                        'bg-card-bg/70 text-text-primary w-full p-1 text-center text-xs font-medium min-[390px]:text-sm min-[390px]:leading-tight sm:text-sm md:text-xs lg:text-sm xl:text-lg',
                        isStringWithSpace &&
                          'p-0.5 sm:text-xs xl:text-sm 2xl:text-lg',
                        isLongWord &&
                          '2xl:text-lg" p-0.5 sm:text-xs xl:text-sm',
                      )}
                    >
                      {champion.name}
                    </h2>
                  </div>
                </PortraitChampion>
              </Feature>
            );
          }

          return (
            <Feature className={cn(color)} key={key}>
              {!Array.isArray(currentFeature) ? (
                <div
                  className={cn(
                    'relative flex items-center justify-center',
                    isStringWithSpace &&
                      'sm:leading-3 md:text-[12px] lg:text-base lg:leading-none xl:text-base 2xl:text-lg',
                    isLongWord && 'min-[390px]:text-[11px]',
                  )}
                >
                  {currentFeature}
                  {hint === 'higher' && (
                    <FaChevronUp className="absolute -top-3 left-1/2 -translate-x-1/2 min-[390px]:-top-4 sm:-top-4 xl:-top-6" />
                  )}
                  {hint === 'lower' && (
                    <FaChevronDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 min-[390px]:-bottom-4 sm:-bottom-4 xl:-bottom-6" />
                  )}
                </div>
              ) : (
                currentFeature.map((f) => (
                  <div
                    key={f}
                    className={cn(
                      'flex items-center justify-center',
                      currentFeature.length > 1 &&
                        'min-[390px]:xs min-[390px]:leading-tight sm:leading-4 md:text-[12px] lg:text-base xl:leading-none 2xl:text-lg',
                      f.length > maxLengthWord &&
                        'text-xs sm:text-[10px] md:text-[11px] lg:text-sm xl:text-sm 2xl:text-base',
                    )}
                  >
                    {f}
                  </div>
                ))
              )}
            </Feature>
          );
        })}
    </div>
  );
};
