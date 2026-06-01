import { CHAMPIONS } from '@/components/GuessingGame/champion.data';
import { MAX_ATTEMPTS } from '@/constants';
import type { IChampion } from '@/type/championsCard.type';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
export type TGameStatus = 'playing' | 'win' | 'lose' | 'idle';
interface IInitialState {
  targetChampion: IChampion | null;

  availableChampionsList: IChampion[];
  guessedChampionsList: IChampion[];
  gameStatus: TGameStatus;
}

const initialState: IInitialState = {
  targetChampion: null,
  availableChampionsList: CHAMPIONS,
  guessedChampionsList: [],
  gameStatus: 'idle',
};

export const guessingGameSlice = createSlice({
  name: 'guessingGame',
  initialState,
  reducers: {
    targetChampion: (state, action: PayloadAction<number>) => {
      state.targetChampion = CHAMPIONS[action.payload];
      state.availableChampionsList = CHAMPIONS;
      state.guessedChampionsList = [];
      state.gameStatus = 'playing';
    },
    ffGame: (state) => {
      state.gameStatus = 'lose';
    },
    closeGame: (state) => {
      state.targetChampion = null;
      state.availableChampionsList = CHAMPIONS;
      state.guessedChampionsList = [];
      state.gameStatus = 'idle';
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
        state.gameStatus = 'win';
      }
      if (
        state.guessedChampionsList.length >= MAX_ATTEMPTS &&
        state.gameStatus !== 'win'
      ) {
        state.gameStatus = 'lose';
      }
    },
  },
});

export const { targetChampion, selectChampion, closeGame, ffGame } =
  guessingGameSlice.actions;

export default guessingGameSlice.reducer;
