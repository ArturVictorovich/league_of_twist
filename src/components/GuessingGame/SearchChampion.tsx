import { useMemo, useState } from 'react';
import type { ISelectOption } from '@/type/itemSearch.type';
import { createFilter } from 'react-select';
import Select, { type SingleValue } from 'react-select';
import { CHAMPIONS, type IChampion } from './champion.date';
export const SearchChampion = () => {
  const [selectedChampion, setSelectedChampion] = useState<IChampion | null>(
    null,
  );

  const [selectValue, setSelectValue] = useState<ISelectOption | null>(null);

  const options = useMemo<ISelectOption[]>(
    () =>
      CHAMPIONS.map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    [],
  );
  /* выбор персонажа */
  const handleChange = (option: SingleValue<ISelectOption>) => {
    if (!option) return;

    const champion = CHAMPIONS.find((c) => c.id === option.value);
    if (!champion) return;

    setSelectedChampion(champion);
    console.log(champion.name);
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
