import { getColorCard } from '@/shared/utils/getColorCard';
import { Feature } from './Feature';
import type { IChampion } from '@/type/championsCard.type';
import { useAppSelector } from '@/shared/hooks/redux';

interface Props {
  champion: IChampion;
}

export const Card = ({ champion }: Props) => {
  const guesstingChampion = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );
  const championFeatures: (keyof IChampion)[] = [
    'id',
    'name',
    'gender',
    'race',
    'lanes',
    'regions',
    'resource',
    'attackType',
    'releaseYear',
  ];

  if (!guesstingChampion) {
    return null;
  }
  return (
    <div className="flex text-center gap-1 overflow-x-auto">
      {championFeatures.slice(1).map((key) => {
        const guessFeature = guesstingChampion[key];
        const currentFeature = champion[key];

        const color = getColorCard(currentFeature, guessFeature);

        return (
          <Feature className={color} key={key}>
            {!Array.isArray(currentFeature)
              ? currentFeature
              : currentFeature.map((f) => (
                  <span key={f} className="text-xs text-center flex flex-col">
                    {f}
                  </span>
                ))}
          </Feature>
        );
      })}
    </div>
  );
};
