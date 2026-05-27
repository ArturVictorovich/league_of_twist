export const ColorHints = () => {
  return (
    <div className="text-[7px]">
      <div className="flex flex-row items-center gap-2">
        <span className="block w-2 h-2 bg-success-green rounded-full"></span>
        <p className="text-success-green">Совпадение</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="block w-2 h-2 bg-warning-yellow rounded-full"></span>
        <p className="text-warning-yellow">Частичное совпадение</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="block w-2 h-2 bg-danger-red rounded-full"></span>
        <p className="text-danger-red">Нет совпадений</p>
      </div>
    </div>
  );
};
