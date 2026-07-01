import { getProgressTone } from '@/shared/utils/getProgressTone';
import SegmentBar from './SegmentBar';
import { getProgressLabel } from '@/shared/utils/getProgressLable';
interface Props {
  maxAttempts: number;
  attempts: number;
}

const ProgressBar = ({ maxAttempts, attempts }: Props) => {
  const segment = Array.from({ length: maxAttempts });
  const tone = getProgressTone(attempts);
  const label = getProgressLabel(attempts);
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:gap-2 sm:px-2">
      <div className="text-text-secondary text-center leading-3 min-[390px]:text-xs sm:text-sm md:text-xs">
        {label}
      </div>
      <div className="grid w-full grid-cols-10 gap-1">
        {segment.map((_, i) => {
          const isActive = i < attempts;

          return <SegmentBar isActive={isActive} tone={tone} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
