import { getProgressTone } from '@/shared/utils/getProgressTone';
import SegmentBar from './SegmentBar';
import { getProgressLabel } from '@/shared/utils/getProgressLabel';
interface Props {
  maxAttempts: number;
  attempts: number;
}

const ProgressBar = ({ maxAttempts, attempts }: Props) => {
  const segment = Array.from({ length: maxAttempts });
  const tone = getProgressTone(attempts);
  const label = getProgressLabel(attempts);
  return (
    <div className="flex flex-col justify-center gap-2 p-1 sm:px-3 lg:p-0">
      <div className="text-text-muted text-center leading-4 min-[390px]:text-base">
        {label}
      </div>
      <div className="grid h-auto w-full grid-cols-10 gap-1">
        {segment.map((_, i) => {
          const isActive = i < attempts;

          return <SegmentBar isActive={isActive} tone={tone} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
