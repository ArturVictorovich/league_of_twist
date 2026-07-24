const EN_TO_RU_MAP: Record<string, string> = {
  q: 'й',
  w: 'ц',
  e: 'у',
  r: 'к',
  t: 'е',
  y: 'н',
  u: 'г',
  i: 'ш',
  o: 'щ',
  p: 'з',
  '[': 'х',
  ']': 'ъ',

  a: 'ф',
  s: 'ы',
  d: 'в',
  f: 'а',
  g: 'п',
  h: 'р',
  j: 'о',
  k: 'л',
  l: 'д',
  ';': 'ж',
  "'": 'э',

  z: 'я',
  x: 'ч',
  c: 'с',
  v: 'м',
  b: 'и',
  n: 'т',
  m: 'ь',
  ',': 'б',
  '.': 'ю',
  '/': '.',
};
export const convertEnglishToRussianLayout = (value: string): string => {
  return value
    .toLowerCase()
    .split('')
    .map((char) => EN_TO_RU_MAP[char] ?? char)
    .join('');
};
export const normalizeSearchValue = (value: string): string => {
  return value.trim().toLowerCase();
};
export const startsWithSearchValue = (
  label: string,
  searchValue: string,
): boolean => {
  return label.split(' ').some((word) => word.startsWith(searchValue));
};
