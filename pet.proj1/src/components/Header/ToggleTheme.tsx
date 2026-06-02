import { cn } from '@/lib/utils/cn';
import { useTheme } from '../../Providers/Theme/useTheme';

import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';
  const label = isLight ? 'Switch to dark theme' : 'Switch to light theme';
  return (
    <button
      type="button"
      title={label}
      onClick={toggleTheme}
      aria-label={label}
      className={cn(
        'relative flex h-7 w-12.5 min-[390px]:h-9 min-[390px]:w-15 items-center rounded-full  border bg-card-bg-secondary p-1 transition-colors',
        !isLight ? 'border-cyan-400' : 'border-border-card',
      )}
    >
      <span
        className={cn(
          'flex h-5 w-5 min-[390px]:h-6 min-[390px]:w-6 items-center justify-center rounded-full bg-card-bg  text-toggle-icon shadow-md transition-transform duration-300 ease-in-out',
          isLight
            ? 'translate-x-0'
            : 'translate-x-5 min-[390px]:translate-x-6 bg-text-primary',
        )}
      >
        {isLight ? (
          <RiSunLine className="size-4 min-[390px]:size-5" />
        ) : (
          <RiMoonClearLine className="size-4 min-[390px]:size-5" />
        )}
      </span>
    </button>
  );
};
