import { CHAMPIONS } from '@/components/GuessingGame/champion.date';

import { getRandomChampionIndex } from '@/shared/utils/getRandomChampionIndex';
import type { TAppDispatch } from '@/redux/store ';
import { startGame } from '@/redux/GuessingGame/guessingGame.slice';

export const startGameThunk = () => (dispatch: TAppDispatch) => {
  const randomIndex = getRandomChampionIndex(CHAMPIONS);

  dispatch(startGame(randomIndex));
};
