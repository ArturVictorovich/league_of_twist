type TResult = 'green' | 'yellow' | 'red';
export type TFeature = string | number | string[];

export const getColorCard = (current: TFeature, guess: TFeature): TResult => {
  if (!Array.isArray(current) && !Array.isArray(guess)) {
    return current === guess ? 'green' : 'red';
  }

  const currArr = Array.isArray(current) ? current : [current];
  const guessArr = Array.isArray(guess) ? guess : [guess];

  if (
    currArr.length === guessArr.length &&
    currArr.every((v, i) => v === guessArr[i])
  ) {
    return 'green';
  }

  const set = new Set(currArr);

  const hasMatch = guessArr.some((v) => set.has(v));

  return hasMatch ? 'yellow' : 'red';
};
