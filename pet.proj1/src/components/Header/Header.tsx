import { Logo } from "./Logo";
import { ToggleTheme } from "./ToggleTheme";
export const Header = () => {
  return (
    <div className="flex bg-bg justify-between w-full mb-5 md:mb-17  p-4">
      <Logo />
      <ToggleTheme />
    </div>
  );
};
