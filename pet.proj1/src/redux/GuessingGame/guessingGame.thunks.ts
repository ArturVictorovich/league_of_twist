import { CHAMPIONS } from '@/components/GuessingGame/champion.data';

import { getRandomChampionIndex } from '@/shared/utils/getRandomChampionIndex';
import type { TAppDispatch } from '@/redux/store';
import { targetChampion } from '@/redux/GuessingGame/guessingGame.slice';

export const startGameThunk = () => (dispatch: TAppDispatch) => {
  const randomIndex = getRandomChampionIndex(CHAMPIONS);

  dispatch(targetChampion(randomIndex));
};
