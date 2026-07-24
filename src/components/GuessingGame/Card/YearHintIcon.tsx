import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface IProps {
  hint: 'higher' | 'lower' | null;
}

export const YearHintIcon = ({ hint }: IProps) => {
  if (!hint) return null;

  if (hint === 'higher') {
    return (
      <FaChevronUp className="absolute -top-3 left-1/2 -translate-x-1/2 min-[390px]:-top-4 sm:-top-4 xl:-top-6" />
    );
  }

  return (
    <FaChevronDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 min-[390px]:-bottom-4 sm:-bottom-4 xl:-bottom-6" />
  );
};
