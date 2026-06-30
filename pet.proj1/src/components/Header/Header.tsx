import { Logo } from './Logo';
import { ToggleTheme } from './ToggleTheme';
export const Header = () => {
  return (
    <header className="bg-card-bg border-border-card mb-5 flex w-full items-center justify-between rounded-3xl border p-4 min-[390px]:h-22">
      <Logo />

      <ToggleTheme />
    </header>
  );
};
