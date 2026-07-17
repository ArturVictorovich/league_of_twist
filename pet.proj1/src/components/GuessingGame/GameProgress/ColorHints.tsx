import { CardWrapper } from '@/components/ui/CardWrapper';

export const ColorHints = () => {
  return (
    <div className="grid w-full grid-cols-3 gap-2 text-[10px] leading-3 min-[390px]:text-sm lg:grid-cols-1 lg:gap-1">
      <CardWrapper className="bg-card-bg flex flex-row items-center gap-2">
        <span className="bg-success-green block h-2 w-2 rounded-full"></span>
        <p className="text-success-green">Совпадение</p>
      </CardWrapper>
      <CardWrapper className="bg-card-bg flex flex-row items-center gap-2">
        <span className="bg-warning-yellow block h-2 w-2 rounded-full"></span>
        <p className="text-warning-yellow">Частичное совпадение</p>
      </CardWrapper>
      <CardWrapper className="bg-card-bg flex flex-row items-center gap-2">
        <span className="bg-danger-red block h-2 w-2 rounded-full"></span>
        <p className="text-danger-red">Нет совпадений</p>
      </CardWrapper>
    </div>
  );
};
