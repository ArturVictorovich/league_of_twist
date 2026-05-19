import { getColorCard } from "@/shared/utils/getColorCard";
import { Feature } from "./Feature";
import type { IChampion } from "@/type/championsCard.type";
import { useAppSelector } from "@/shared/hooks/redux";
import { championFeatures } from "./championFeatures";
import { getYearHint } from "@/shared/utils/getYearHint";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
interface Props {
  champion: IChampion;
}

export const Card = ({ champion }: Props) => {
  const guesstingChampion = useAppSelector(
    (state) => state.guessingGame.targetChampion,
  );

  if (!guesstingChampion) {
    return null;
  }
  return (
    <div className="flex text-center gap-1 animate-[card-drop_0.70s_ease-out_forwards]">
      {championFeatures
        .filter((f) => f !== "id" && f !== "image")
        .map((key) => {
          const guessFeature = guesstingChampion[key];
          const currentFeature = champion[key];
          const hint =
            key === "releaseYear"
              ? getYearHint(champion.releaseYear, guesstingChampion.releaseYear)
              : null;
          const color = getColorCard(currentFeature, guessFeature);

          return (
            <Feature className={color} key={key}>
              {!Array.isArray(currentFeature) ? (
                <div className="flex items-center justify-center flex-col">
                  {hint === "higher" && <FaChevronUp />}
                  {currentFeature}
                  {hint === "lower" && <FaChevronDown />}
                </div>
              ) : (
                currentFeature.map((f) => (
                  <span
                    key={f}
                    className="text-xs md:text-base text-center flex flex-col"
                  >
                    {f}
                  </span>
                ))
              )}
            </Feature>
          );
        })}
    </div>
  );
};
