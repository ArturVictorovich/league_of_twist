import { useTheme } from '../../Providers/Theme/useTheme';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button
        onClick={() => toggleTheme()}
        className=" rounded-sm bg-primary p-1 text-text-primary"
      >
        Theme
      </button>
    </div>
  );
};
