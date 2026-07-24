import { CHAMPIONS } from '@/components/GuessingGame/champions.data';
import { MAX_ATTEMPTS } from '@/components/GuessingGame/guessingGame.constants';
import type { IChampion } from '@/components/GuessingGame/champions.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
export type TGameStatus = 'playing' | 'win' | 'lose' | 'idle';
type TGameEndReason = 'win' | 'attempts' | 'surrender' | null;
interface IInitialState {
  targetChampion: IChampion | null;
  availableChampionsList: IChampion[];
  guessedChampionsList: IChampion[];
  gameStatus: TGameStatus;
  gameEndReason: TGameEndReason;
}

const initialState: IInitialState = {
  targetChampion: null,
  availableChampionsList: CHAMPIONS,
  guessedChampionsList: [],
  gameStatus: 'idle',
  gameEndReason: null,
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
      state.gameEndReason = null;
    },
    ffGame: (state) => {
      if (state.gameStatus !== 'playing') return;
      state.gameStatus = 'lose';
      state.gameEndReason = 'surrender';
    },
    closeGame: (state) => {
      state.targetChampion = null;
      state.availableChampionsList = CHAMPIONS;
      state.guessedChampionsList = [];
      state.gameStatus = 'idle';
      state.gameEndReason = null;
    },
    selectChampion: (state, action: PayloadAction<number>) => {
      if (!state.targetChampion || state.gameStatus !== 'playing') return;
      const index = state.availableChampionsList.findIndex(
        (champion) => champion.id === action.payload,
      );
      if (index === -1) return;
      const champion = state.availableChampionsList[index];

      state.availableChampionsList.splice(index, 1);
      state.guessedChampionsList.unshift(champion);
      if (state.targetChampion.id === action.payload) {
        state.gameStatus = 'win';
        state.gameEndReason = 'win';
      }
      if (
        state.guessedChampionsList.length >= MAX_ATTEMPTS &&
        state.gameStatus !== 'win'
      ) {
        state.gameStatus = 'lose';
        state.gameEndReason = 'attempts';
      }
    },
  },
});

export const { targetChampion, selectChampion, closeGame, ffGame } =
  guessingGameSlice.actions;

export default guessingGameSlice.reducer;
