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
    <div className="  card bg-card-bg rounded-3xl border border-border-card w-full h-35.5 p-2  animate-[card-drop_0.70s_ease-out_forwards] flex justify-center  items-center">
      <div className=" flex justify-center flex-col items-center mr-2">
        <div className="h-16 w-16 ">
          <img
            className="rounded-md"
            src={champion.image}
            alt={champion.name}
          />
        </div>
        <div className="text-text-primary font-medium text-center">
          {champion.name}
        </div>
      </div>

      <div className="w-2/3 grid grid-cols-2 gap-1">
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

            return (
              <Feature className={cn(color)} key={key}>
                {!Array.isArray(currentFeature) ? (
                  <div className="flex gap-1 items-center justify-center ">
                    {currentFeature}
                    {hint === 'higher' && <FaChevronUp />}
                    {hint === 'lower' && <FaChevronDown />}
                  </div>
                ) : (
                  currentFeature.map((f) => (
                    <div
                      key={f}
                      className={cn(
                        'flex flex-col ',
                        currentFeature.length > 1 && 'text-[10px]',
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
