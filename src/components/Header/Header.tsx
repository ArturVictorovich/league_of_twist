import { Logo } from './Logo';
import { ToggleTheme } from './ToggleTheme';
export const Header = () => {
  return (
    <div className="flex  justify-between p-2">
      <Logo />
      <ToggleTheme />
    </div>
  );
};
