export const getYearHint = (current: number, target: number) => {
  if (current > target) return 'lower';
  if (current < target) return 'higher';
  return null;
};
