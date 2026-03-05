import { CHAMPIONS } from '@/components/GuessingGame/champion.date';
import type { IChampion } from '@/type/championsCard.type';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
interface IInitialState {
  targetChampion?: IChampion | null;
  availableChampionsList: IChampion[];
  guessedChampionsList?: IChampion[] | null;
  winGame: boolean;
}

const initialState: IInitialState = {
  targetChampion: null,
  availableChampionsList: CHAMPIONS,
  guessedChampionsList: null,
  winGame: false,
};

export const guessingGameSlice = createSlice({
  name: 'guessingGame',
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<number>) => {
      state.targetChampion = CHAMPIONS[action.payload];
    },
  },
});

export const { startGame } = guessingGameSlice.actions;

export default guessingGameSlice.reducer;
