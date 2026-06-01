import { Logo } from './Logo';
import { ToggleTheme } from './ToggleTheme';
export const Header = () => {
  return (
    <header className="flex bg-card-bg rounded-3xl border border-border-card  justify-between items-center w-full mb-5   p-4">
      <Logo />

      <ToggleTheme />
    </header>
  );
};
