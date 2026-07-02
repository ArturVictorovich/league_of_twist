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
    <div className="card bg-card-bg lg:bg-card-bg-secondary border-border-card grid h-full w-full animate-[card-drop_0.70s_ease-out_forwards] grid-cols-[minmax(96px,19%)_1fr] items-stretch justify-center gap-1 rounded-3xl border p-2 min-[390px]:h-auto min-[390px]:grid-cols-8 min-[390px]:rounded-xl min-[390px]:p-1 md:gap-2 md:rounded-xl md:border-0 md:p-2 lg:rounded-xl xl:gap-2 xl:p-2 2xl:gap-2 2xl:p-4">
      <div className="flex h-full w-full min-w-0 flex-col items-center justify-center">
        <div
          className={cn(
            'sm:ring-border-card relative flex h-2/3 w-full min-w-0 items-center justify-center overflow-hidden rounded-md min-[390px]:aspect-4/3 min-[390px]:h-auto min-[390px]:rounded-lg sm:rounded-2xl sm:ring-1 md:aspect-4/3 md:rounded-xl lg:rounded-lg',
          )}
        >
          <img
            className="h-full w-full rounded-md object-cover lg:rounded-lg"
            src={champion.image}
            alt={champion.name}
          />
          <div className="bg-card-bg/70 text-text-primary absolute inset-x-0 bottom-0 hidden p-1 text-center text-sm font-medium min-[390px]:block min-[390px]:p-0 min-[390px]:text-[9px] sm:text-sm md:text-xs lg:text-[14px] xl:text-xl">
            {champion.name}
          </div>
        </div>
        <div className="text-text-primary text-center font-medium min-[390px]:hidden">
          {champion.name}
        </div>
      </div>

      <div className="grid w-full grid-cols-3 gap-1 min-[390px]:contents">
        {championFeatures
          .filter((f) => f !== 'id' && f !== 'image' && f !== 'name')
          .map((key) => {
            const guessFeature = guestingChampion[key];
            const currentFeature = champion[key];
            const hint =
              key === 'releaseYear'
                ? getYearHint(
                    champion.releaseYear,
                    guestingChampion.releaseYear,
                  )
                : null;
            const color = getColorCard(currentFeature, guessFeature);
            const isStringWithSpace =
              typeof currentFeature === 'string' &&
              currentFeature.includes(' ');
            return (
              <Feature
                className={cn(
                  color,
                  key === 'releaseYear' &&
                    'col-span-3 w-1/3 justify-self-center min-[390px]:col-span-1 min-[390px]:w-full',
                )}
                key={key}
              >
                {!Array.isArray(currentFeature) ? (
                  <div
                    className={cn(
                      'flex items-center justify-center gap-1',
                      isStringWithSpace &&
                        'leading-2 sm:leading-3 md:text-[12px] lg:text-base lg:leading-none xl:text-lg',
                    )}
                  >
                    {currentFeature}
                    {hint === 'higher' && (
                      <FaChevronUp className="absolute top-2 md:top-3 xl:top-4" />
                    )}
                    {hint === 'lower' && (
                      <FaChevronDown className="absolute bottom-2 md:bottom-3 xl:bottom-4" />
                    )}
                  </div>
                ) : (
                  currentFeature.map((f) => (
                    <div
                      key={f}
                      className={cn(
                        'flex items-center justify-center',
                        currentFeature.length > 1 &&
                          'min-[390px]:xs min-[390px]:leading-3 sm:leading-4 md:text-[12px] xl:text-xl xl:leading-none',
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
    </div>
  );
};
