import { Panel } from '@/components/ui/Panel';

export const ColorHints = () => {
  return (
    <ul
      data-testid="color-hints"
      aria-label="Подсказка цветов"
      className="grid w-full auto-rows-fr grid-cols-3 gap-1 text-[11px] leading-3 min-[390px]:text-sm lg:grid-cols-1 lg:gap-1"
    >
      <li>
        <Panel className="bg-card-bg flex h-full flex-row items-center gap-2">
          <span
            aria-hidden="true"
            className="bg-success-green block h-2 w-2 shrink-0 rounded-full"
          ></span>
          <p className="text-success-green min-w-0">Совпадение</p>
        </Panel>
      </li>
      <li>
        <Panel className="bg-card-bg flex h-full flex-row items-center gap-2">
          <span
            aria-hidden="true"
            className="bg-warning-yellow block h-2 w-2 shrink-0 rounded-full"
          ></span>
          <p className="text-warning-yellow min-w-0">Частичное совпадение</p>
        </Panel>
      </li>
      <li>
        <Panel className="bg-card-bg flex h-full flex-row items-center gap-2">
          <span
            aria-hidden="true"
            className="bg-danger-red block h-2 w-2 shrink-0 rounded-full"
          ></span>
          <p className="text-danger-red min-w-0">Нет совпадений</p>
        </Panel>
      </li>
    </ul>
  );
};
