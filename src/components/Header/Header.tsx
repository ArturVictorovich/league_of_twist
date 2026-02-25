import { Logo } from './Logo';
import { ToggleTheme } from './ToggleTheme';
export const Header = () => {
  return (
    <div className="flex justify-between w-full p-4 mb-9">
      <Logo />
      <ToggleTheme />
    </div>
  );
};
