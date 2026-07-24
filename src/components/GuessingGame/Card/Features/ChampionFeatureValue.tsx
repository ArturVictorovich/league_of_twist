import { cn } from '@/lib/utils/cn';
import { MAX_FEATURE_WORD_LENGTH } from '../../guessingGame.constants';
import { YearHintIcon } from '../YearHintIcon';

interface IChampionFeatureValueProps {
  value: string | number | string[];
  hint: 'higher' | 'lower' | null;
}

export const ChampionFeatureValue = ({
  value,
  hint,
}: IChampionFeatureValueProps) => {
  if (!Array.isArray(value)) {
    const isStringWithSpace = typeof value === 'string' && value.includes(' ');
    const isLongWord =
      typeof value === 'string' && value.length > MAX_FEATURE_WORD_LENGTH;

    return (
      <div
        className={cn(
          'relative flex items-center justify-center',
          isStringWithSpace &&
            'sm:leading-3 md:text-[12px] lg:text-base lg:leading-none xl:text-base 2xl:text-lg',
          isLongWord && 'min-[390px]:text-[11px] xl:text-sm',
        )}
      >
        {value}
        <YearHintIcon hint={hint} />
      </div>
    );
  }

  return (
    <>
      {value.map((item) => (
        <div
          key={item}
          className={cn(
            'flex items-center justify-center',
            value.length > 1 &&
              'min-[390px]:leading-tight sm:leading-4 md:text-[12px] lg:text-base xl:leading-none 2xl:text-lg',
            item.length > MAX_FEATURE_WORD_LENGTH &&
              'text-xs sm:text-[10px] md:text-[11px] lg:text-sm xl:text-sm 2xl:text-base',
          )}
        >
          {item}
        </div>
      ))}
    </>
  );
};
