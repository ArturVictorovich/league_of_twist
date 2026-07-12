export function getProgressLabel(attempts: number): string {
  if (attempts <= 3) {
    return 'Начало раунда';
  }
  if (attempts <= 7) {
    return 'Нужно сузить круг';
  }
  return 'Последний шанс';
}
