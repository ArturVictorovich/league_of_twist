export type TFeature = string | number | string[];
export type TResult = 'success' | 'warning' | 'danger';

export const getColorCard = (current: TFeature, target: TFeature): TResult => {
  if (!Array.isArray(current) && !Array.isArray(target)) {
    return current === target ? 'success' : 'danger';
  }

  const currArr = Array.isArray(current) ? current : [current];
  const targetArr = Array.isArray(target) ? target : [target];

  const currentSet = new Set(currArr);
  const targetSet = new Set(targetArr);

  const isFullMatch =
    currentSet.size === targetSet.size &&
    targetArr.every((item) => currentSet.has(item));

  if (isFullMatch) {
    return 'success';
  }

  const hasPartialMatch = targetArr.some((item) => currentSet.has(item));

  return hasPartialMatch ? 'warning' : 'danger';
};
