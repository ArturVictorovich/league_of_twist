export const Footer = () => {
  return (
    <footer className="bg-card-bg border-border-card text-text-muted flex w-full shrink-0 flex-col gap-2 rounded-3xl border px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:px-5 lg:rounded-2xl lg:px-6 xl:text-sm">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
        <span className="text-text-primary font-semibold">League of Twist</span>

        <span className="text-text-muted hidden sm:inline">·</span>

        <span>Fan project</span>

        <span className="text-text-muted hidden md:inline">·</span>

        <span className="hidden md:inline">Not affiliated with Riot Games</span>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:justify-end">
        <span>140+ champions</span>

        <span className="text-text-muted/60">·</span>

        <span>v0.1.0</span>

        <span className="text-text-muted/60">·</span>

        <a
          href="https://github.com/ArturVictorovich/league_of_twist"
          target="_blank"
          rel="noreferrer"
          className="text-cyan hover:text-cyan-light transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};
