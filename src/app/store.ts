import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomeReducer from '../pages/HomePage/slice';

export const store = configureStore({
  reducer: {
    home: HomeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
