import {
  convertEnglishToRussianLayout,
  normalizeSearchValue,
  startsWithSearchValue,
} from '@/lib/utils/keyboardLayout';
import type { ISelectOption } from './itemSearch.type';

export const filterChampionOption = (
  option: { data: ISelectOption },
  inputValue: string,
): boolean => {
  const normalizedInput = normalizeSearchValue(inputValue);
  const convertedInput = convertEnglishToRussianLayout(normalizedInput);
  const normalizedLabel = normalizeSearchValue(option.data.label);

  return (
    startsWithSearchValue(normalizedLabel, normalizedInput) ||
    startsWithSearchValue(normalizedLabel, convertedInput)
  );
};
