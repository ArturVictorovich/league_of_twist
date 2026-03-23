import { getColorCard } from '@/shared/utils/getColorCard';
import { Feature } from './Feature';
import type { IChampion } from '@/type/championsCard.type';
import { useAppSelector } from '@/shared/hooks/redux';
import { championFeatures } from './championFeatures';
import { useEffect, useState } from 'react';
interface Props {
  champion: IChampion;
}

export const Card = ({ champion }: Props) => {
  const guesstingChampion = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );

  if (!guesstingChampion) {
    return null;
  }
  return (
    <div className="flex text-center gap-1 overflow-x-auto animate-[card-drop_0.25s_ease-out_forwards]">
      {championFeatures
        .filter((f) => f !== 'id' && 'image')
        .map((key, i) => {
          const guessFeature = guesstingChampion[key];
          const currentFeature = champion[key];

          const color = getColorCard(currentFeature, guessFeature);

          return (
            <Feature className={`${color} `} key={key}>
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
