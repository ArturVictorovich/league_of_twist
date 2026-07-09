import { getColorCard } from '@/shared/utils/getColorCard';
import { Feature } from './Feature';
import type { IChampion } from '@/type/championsCard.type';
import { useAppSelector } from '@/shared/hooks/redux';
import { championFeatures } from './championFeatures';
import { getYearHint } from '@/shared/utils/getYearHint';
import { FaChevronUp } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { cn } from '@/lib/utils/cn';
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
    <div className="card bg-card-bg lg:bg-card-bg-secondary border-border-card grid w-full grid-cols-4 gap-1.5 rounded-3xl border p-3 min-[390px]:grid min-[390px]:rounded-3xl min-[390px]:p-3 sm:grid-cols-8 md:gap-2 md:rounded-xl md:border-0 md:p-2 lg:rounded-xl xl:gap-2 xl:p-2 2xl:gap-2 2xl:p-4">
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
              <Feature className={cn('border-border-card relative')} key={key}>
                <div className="h-full w-full rounded-xl">
                  <img
                    className="h-full w-full rounded-xl object-cover"
                    src={champion.image}
                    alt={champion.name}
                  />
                  <h2
                    className={cn(
                      'bg-card-bg/70 text-text-primary absolute inset-x-0 bottom-0 p-1 text-center text-xs font-medium min-[390px]:text-sm sm:text-sm md:text-xs lg:text-[14px] xl:text-lg',
                      isStringWithSpace && 'sm:text-xs xl:text-sm',
                      isLongWord && 'sm:text-xs xl:text-sm',
                    )}
                  >
                    {champion.name}
                  </h2>
                </div>
              </Feature>
            );
          }

          return (
            <Feature className={cn(color)} key={key}>
              {!Array.isArray(currentFeature) ? (
                <div
                  className={cn(
                    'relative flex items-center justify-center gap-1',
                    isStringWithSpace &&
                      'sm:leading-3 md:text-[12px] lg:text-base lg:leading-none xl:text-base',
                  )}
                >
                  {currentFeature}
                  {hint === 'higher' && (
                    <FaChevronUp className="absolute -top-3 left-1/2 -translate-x-1/2 min-[390px]:-top-4 sm:-top-4 xl:-top-5" />
                  )}
                  {hint === 'lower' && (
                    <FaChevronDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 min-[390px]:-bottom-4 sm:-bottom-4 xl:-bottom-5" />
                  )}
                </div>
              ) : (
                currentFeature.map((f) => (
                  <div
                    key={f}
                    className={cn(
                      'flex items-center justify-center',
                      currentFeature.length > 1 &&
                        'min-[390px]:xs min-[390px]:leading-3 sm:leading-4 md:text-[12px] lg:text-base xl:text-lg xl:leading-none',
                      f.length > maxLengthWord &&
                        'text-xs sm:text-[10px] md:text-[11px] lg:text-sm xl:text-sm',
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
