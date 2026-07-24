import { useMemo, useState } from 'react';
import type { ISelectOption } from '@/components/GuessingGame/SearchChampion/itemSearch.type';
import Select, { type InputActionMeta, type SingleValue } from 'react-select';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import {
  selectChampion,
  type TGameStatus,
} from '@/redux/GuessingGame/guessingGame.slice';
import { cn } from '@/lib/utils/cn';
import { filterChampionOption } from './searchChampion.utils';
interface IProps {
  gameStatus: TGameStatus;
  isCurrentCardRevealPending: boolean;
}
export const SearchChampion = ({
  gameStatus,
  isCurrentCardRevealPending,
}: IProps) => {
  const dispatch = useAppDispatch();

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

  return (
    <div className="z-50 w-full sm:w-4/5 lg:w-full">
      <label htmlFor="champion-search">
        <h2 className="text-text-primary mb-3 min-[390px]:text-lg 2xl:text-xl">
          Поиск чемпиона
        </h2>
      </label>

      <Select
        isDisabled={isCurrentCardRevealPending || gameStatus !== 'playing'}
        inputId="champion-search"
        instanceId="champion-search"
        name="champion"
        data-testid="champion-search"
        classNames={{
          control: ({ isFocused, isDisabled }) =>
            cn(
              'border-select-control-border bg-select-control-bg min-h-11 rounded-xl border px-3 transition-colors min-[390px]:h-12 min-[390px]:rounded-2xl min-[390px]:text-lg md:px-4',
              isFocused && 'border-select-control-border-focused',
              isDisabled && 'cursor-not-allowed',
            ),
          placeholder: () =>
            ' min-[390px]:text-lg text-sm text-select-placeholder',
          valueContainer: () => 'text-select-text gap-2 p-0',
          indicatorsContainer: () => 'text-text-muted gap-1',
          indicatorSeparator: () => 'hidden',
          menu: () =>
            ' mt-1  rounded-xl border border-select-menu-border bg-select-menu-bg shadow-lg min-[390px]:text-lg ',
          menuList: () => 'p-1 text-select-option-text max-h-60 overflow-auto',
          option: ({ isFocused, isSelected }) =>
            cn(
              'text-select-option-text cursor-pointer rounded-lg px-2 py-1',
              isFocused &&
                'bg-select-option-bg-focused border-select-menu-border text-select-option-text-focused border',
              isSelected &&
                'bg-select-option-bg-selected text-select-option-text-selected',
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
