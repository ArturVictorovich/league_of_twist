import { Feature } from './Feature';
import type { IChampion } from '@/type/championsCard.type';

interface Props {
  champion: IChampion;
}

export const Card = ({ champion }: Props) => {
  if (!champion) {
    return null;
  }
  return (
    <div className="flex gap-1 overflow-x-auto">
      {Object.entries(champion)
        .slice(1, -1)
        .map(([key, feature]) => (
          <Feature className="" key={key}>
            {Array.isArray(feature)
              ? feature.map((f, i) => {
                  return (
                    <span className="flex text-sm text-center flex-col" key={i}>
                      {f}
                    </span>
                  );
                })
              : feature}
          </Feature>
        ))}
    </div>
  );
};
