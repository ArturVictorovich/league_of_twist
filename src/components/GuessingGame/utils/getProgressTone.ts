export type TProgressTone = 'success' | 'warning' | 'danger';

export function getProgressTone(attempts: number): TProgressTone {
  if (attempts <= 3) {
    return 'success';
  }
  if (attempts <= 7) {
    return 'warning';
  }
  return 'danger';
}
