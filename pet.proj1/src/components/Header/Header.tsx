import { Logo } from './Logo';
import { ToggleTheme } from './ToggleTheme';
export const Header = () => {
  return (
    <div className="flex bg-bg justify-between w-full  p-4">
      <Logo />
      <ToggleTheme />
    </div>
  );
};
