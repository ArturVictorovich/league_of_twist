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
    <div className="card bg-card-bg md:bg-card-bg-secondary border-border-card lg:h- flex w-full animate-[card-drop_0.70s_ease-out_forwards] items-center justify-center gap-1 rounded-3xl border p-2 min-[390px]:h-45 md:border-0 lg:h-22 lg:rounded-xl">
      <div className="flex flex-col items-center justify-center">
        <div
          className={cn(
            'flex h-16 w-16 items-center justify-center rounded-md min-[390px]:h-20 min-[390px]:w-20 lg:h-17.5 lg:w-19.5',
          )}
        >
          <img
            className="h-full w-full rounded-md object-cover lg:rounded-lg"
            src={champion.image}
            alt={champion.name}
          />
        </div>
        <div className="text-text-primary text-center font-medium min-[390px]:text-lg lg:hidden">
          {champion.name}
        </div>
      </div>

      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(96px,1fr))] gap-1 lg:flex">
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
                        currentFeature.length > 1 && 'text-xs',
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
