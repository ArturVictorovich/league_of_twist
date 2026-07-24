interface IProps {
  attempts: number;
  maxAttempts: number;
}

export const Attempts = ({ attempts, maxAttempts }: IProps) => {
  return (
    <div
      aria-live="polite"
      data-testid="attempts-counter"
      className="text-center"
    >
      <h2 className="text-text-secondary text-sm leading-none sm:text-base 2xl:text-lg">
        Попытки
      </h2>
      <p className="text-text-primary text-base font-bold min-[390px]:text-lg lg:text-base xl:text-lg 2xl:text-xl">
        {attempts}/{maxAttempts}
      </p>
    </div>
  );
};
