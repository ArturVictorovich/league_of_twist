import { getProgressTone } from '@/components/GuessingGame/utils/getProgressTone';
import { SegmentBar } from './SegmentBar';
import { getProgressLabel } from '@/components/GuessingGame/utils/getProgressLabel';
interface IProps {
  maxAttempts: number;
  attempts: number;
}

export const ProgressBar = ({ maxAttempts, attempts }: IProps) => {
  const segment = Array.from({ length: maxAttempts });
  const tone = getProgressTone(attempts);
  const label = getProgressLabel(attempts);
  return (
    <div className="flex flex-col justify-center gap-2 p-1 sm:px-3 lg:p-0">
      <div className="text-text-muted text-center leading-4 min-[390px]:text-base">
        {label}
      </div>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={maxAttempts}
        aria-valuenow={attempts}
        aria-label="Прогресс попыток"
        data-testid="attempts-progress"
        className="grid h-auto w-full grid-cols-10 gap-1"
      >
        {segment.map((_, i) => {
          const isActive = i < attempts;

          return <SegmentBar isActive={isActive} tone={tone} key={i} />;
        })}
      </div>
    </div>
  );
};
