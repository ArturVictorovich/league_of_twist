import { cn } from "@/lib/utils/cn";
import { useTheme } from "../../Providers/Theme/useTheme";

import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  return (
    <button
      type="button"
      title="switch theme"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className="relative flex h-7 w-14 items-center rounded-full border border-border bg-primary p-1 transition-colors"
    >
      <span
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-full bg-background text-text-primary shadow-sm transition-transform duration-300 ease-in-out",
          isLight ? "translate-x-0" : "translate-x-7",
        )}
      >
        {isLight ? <RiSunLine size={16} /> : <RiMoonClearLine size={16} />}
      </span>
    </button>
  );
};
