import { cn } from '@/lib/utils/cn';
import { useTheme } from '../../Providers/Theme/useTheme';
import { Button } from '../../shared/ui/Button';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Button className={cn('w-15 rounded-2xl')} onClick={() => toggleTheme()}>
        Theme
      </Button>
    </div>
  );
};
