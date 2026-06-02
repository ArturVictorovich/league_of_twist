import { useMemo, useState } from 'react';
import type { ISelectOption } from '@/components/GuessingGame/SearchChampion/itemSearch.type';
import Select, { type InputActionMeta, type SingleValue } from 'react-select';

import {
  convertEnglishToRussianLayout,
  normalizeSearchValue,
  startsWithSearchValue,
} from '@/lib/utils/keyboardLayout';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { selectChampion } from '@/redux/GuessingGame/guessingGame.slice';
import { cn } from '@/lib/utils/cn';

export const SearchChampion = () => {
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector((state) => state.guessingGame.gameStatus);
  const availableChampionsList = useAppSelector(
    (state) => state.guessingGame.availableChampionsList,
  );

  const [inputValue, setInputValue] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState<ISelectOption | null>(null);

  const options = useMemo<ISelectOption[]>(
    () =>
      availableChampionsList.map(({ id, name }) => ({
        value: id.toString(),
        label: name,
      })),
    [availableChampionsList],
  );
  const filterChampionOption = (
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
  const handleInputChange = (value: string, meta: InputActionMeta) => {
    if (meta.action === 'input-change') {
      setInputValue(value);
      setMenuIsOpen(value.length > 0);
    }
    return value;
  };
  const resetSelectState = () => {
    setSelectValue(null);
    setInputValue('');
    setMenuIsOpen(false);
  };
  const handleChange = (option: SingleValue<ISelectOption>) => {
    if (!option) return;

    dispatch(selectChampion(Number(option.value)));

    resetSelectState();
  };

  if (gameStatus !== 'playing') return null;
  return (
    <div className="w-full mb-2">
      <div className="text-text-primary min-[390px]:text-lg  mb-1">
        Поиск чемпиона
      </div>
      <Select
        classNames={{
          control: ({ isFocused, isDisabled }) =>
            cn(
              'min-h-11 min-[390px]:h-12 min-[390px]:rounded-2xl min-[390px]:text-lg rounded-xl border border-select-control-border  bg-select-control-bg px-3 transition-colors',
              isFocused && 'border-select-control-border-focused',
              isDisabled && 'cursor-not-allowed  ',
            ),
          placeholder: () =>
            ' min-[390px]:text-lg text-sm text-select-placeholder',
          valueContainer: () => 'text-select-text gap-2 p-0',
          indicatorsContainer: () => 'text-text-muted gap-1',
          indicatorSeparator: () => 'hidden',
          menu: () =>
            'z-50 mt-1  rounded-xl border border-select-menu-border bg-select-menu-bg shadow-lg min-[390px]:text-lg ',
          menuList: () => 'p-1 text-select-option-text max-h-60 overflow-auto',
          option: ({ isFocused, isSelected }) =>
            cn(
              'cursor-pointer rounded-lg text-select-option-text px-2 py-1',
              isFocused &&
                'bg-select-option-bg-focused border border-select-menu-border  text-select-option-text-focused ',
              isSelected &&
                'bg-select-option-bg-selected text-select-option-text-selected ',
              !isSelected && !isFocused && 'text-select-option-text',
            ),
        }}
        value={selectValue}
        options={options}
        unstyled
        inputValue={inputValue}
        onInputChange={handleInputChange}
        menuIsOpen={menuIsOpen}
        onMenuClose={() => setMenuIsOpen(false)}
        onFocus={() => {
          if (inputValue.length > 0) {
            setMenuIsOpen(true);
          }
        }}
        onChange={handleChange}
        placeholder="Начни вводить имя..."
        isClearable
        noOptionsMessage={() => 'Ничего не найдено'}
        filterOption={filterChampionOption}
      />
    </div>
  );
};
