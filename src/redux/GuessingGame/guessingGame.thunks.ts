import { CHAMPIONS } from '@/components/GuessingGame/champions.data';

import { getRandomChampionIndex } from '@/components/GuessingGame/utils/getRandomChampionIndex';
import type { TAppDispatch } from '@/redux/store';
import { targetChampion } from '@/redux/GuessingGame/guessingGame.slice';

export const startGameThunk = () => (dispatch: TAppDispatch) => {
  const randomIndex = getRandomChampionIndex(CHAMPIONS);

  dispatch(targetChampion(randomIndex));
};
