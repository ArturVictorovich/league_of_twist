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
    <div className="card bg-card-bg md:bg-card-bg-secondary border-border-card grid w-full animate-[card-drop_0.70s_ease-out_forwards] grid-cols-8 items-center justify-center gap-1 rounded-3xl border p-2 min-[390px]:h-auto md:border-0 lg:h-auto lg:rounded-xl 2xl:gap-2 2xl:p-4">
      <div className="flex flex-col items-center justify-center">
        <div
          className={cn(
            'sm:border-border-card relative flex items-center justify-center overflow-hidden rounded-md min-[390px]:h-auto min-[390px]:w-full sm:aspect-4/3.5 sm:rounded-2xl sm:border',
          )}
        >
          <img
            className="h-full w-full rounded-md object-cover lg:rounded-lg"
            src={champion.image}
            alt={champion.name}
          />
          <div className="bg-card-bg/70 text-text-primary absolute inset-x-0 bottom-0 hidden px-1 py-1 text-center text-sm leading-tight font-medium sm:block 2xl:text-base">
            {champion.name}
          </div>
        </div>
        <div className="text-text-primary text-center font-medium min-[390px]:text-lg sm:hidden">
          {champion.name}
        </div>
      </div>

      <div className="grid w-full gap-1 min-[390px]:contents">
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
              <Feature className={cn(color)} key={key}>
                {!Array.isArray(currentFeature) ? (
                  <div
                    className={cn(
                      'flex items-center justify-center gap-1',
                      isStringWithSpace && 'md:text-[14px]',
                    )}
                  >
                    {currentFeature}
                    {hint === 'higher' && <FaChevronUp />}
                    {hint === 'lower' && <FaChevronDown />}
                  </div>
                ) : (
                  currentFeature.map((f) => (
                    <div
                      key={f}
                      className={cn(
                        'flex items-center justify-center',
                        currentFeature.length > 1 && 'text-xs xl:text-2xl',
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
