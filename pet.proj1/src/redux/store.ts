import { configureStore } from "@reduxjs/toolkit";
import guessingGameReducer from "@/redux/GuessingGame/guessingGame.slice";
export const store = configureStore({
  reducer: {
    guessingGame: guessingGameReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
