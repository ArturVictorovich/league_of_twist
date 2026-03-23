import { CHAMPIONS } from '@/components/GuessingGame/champion.date';
import type { IChampion } from '@/type/championsCard.type';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
interface IInitialState {
  targetChampion: IChampion | null;

  availableChampionsList: IChampion[];
  guessedChampionsList: IChampion[];
  winGame: boolean;
}

const initialState: IInitialState = {
  targetChampion: null,

  availableChampionsList: CHAMPIONS,
  guessedChampionsList: [],
  winGame: false,
};

export const guessingGameSlice = createSlice({
  name: 'guessingGame',
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<number>) => {
      state.targetChampion = CHAMPIONS[action.payload];
    },
    selectChampion: (state, action: PayloadAction<number>) => {
      if (!state.targetChampion) return;
      const index = state.availableChampionsList.findIndex(
        (champion) => champion.id === action.payload,
      );
      if (index === -1) return;
      const champion = state.availableChampionsList[index];

      state.availableChampionsList.splice(index, 1);
      state.guessedChampionsList.push(champion);
      if (state.targetChampion.id === action.payload) {
        state.winGame = true;
      }
    },
  },
});

export const { startGame, selectChampion } = guessingGameSlice.actions;

export default guessingGameSlice.reducer;
