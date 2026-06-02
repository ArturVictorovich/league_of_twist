import { Logo } from './Logo';
import { ToggleTheme } from './ToggleTheme';
export const Header = () => {
  return (
    <header className="flex min-[390px]:h-22 bg-card-bg rounded-3xl border border-border-card  justify-between items-center w-full mb-5  p-4">
      <Logo />

      <ToggleTheme />
    </header>
  );
};
