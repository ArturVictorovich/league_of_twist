import { useMemo, useState } from 'react';
import type { ISelectOption } from '@/components/GuessingGame/SearchChampion/itemSearch.type';
import { createFilter, type InputActionMeta } from 'react-select';
import Select, { type SingleValue } from 'react-select';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { selectChampion } from '@/redux/GuessingGame/guessingGame.slice';

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
    <div className="w-3/4 mb-9">
      <Select
        value={selectValue}
        options={options}
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
        filterOption={createFilter({
          ignoreCase: true,
          matchFrom: 'start',
        })}
      />
    </div>
  );
};
