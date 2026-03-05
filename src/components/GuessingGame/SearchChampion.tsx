import { useMemo, useState } from 'react';
import type { ISelectOption } from '@/type/itemSearch.type';
import { createFilter } from 'react-select';
import Select, { type SingleValue } from 'react-select';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { selectChampion } from '@/redux/GuessingGame/guessingGame.slice';

export const SearchChampion = () => {
  const dispatch = useAppDispatch();
  const availableChampionsList = useAppSelector(
    (state) => state.guessingGame.availableChampionsList,
  );

  const [selectValue, setSelectValue] = useState<ISelectOption | null>(null);

  const options = useMemo<ISelectOption[]>(
    () =>
      availableChampionsList.map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    availableChampionsList,
  );
  /* выбор персонажа */
  const handleChange = (option: SingleValue<ISelectOption>) => {
    if (!option) return;
    dispatch(selectChampion(option.value));
    console.log(currentChampion.name);
    // очищаем инпут
    setSelectValue(null);
  };

  return (
    <div className="w-3/4 mb-7">
      <Select
        value={selectValue}
        options={options}
        onChange={handleChange}
        placeholder="Начни вводить имя..."
        isClearable
        noOptionsMessage={() => 'Ничего не найдено'}
        filterOption={createFilter({
          ignoreCase: true,
          matchFrom: 'any',
        })}
      />
    </div>
  );
};
function currentChampion(value: string): any {
  throw new Error('Function not implemented.');
}
