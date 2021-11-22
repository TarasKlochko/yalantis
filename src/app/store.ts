import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import employeeBirthdaySlice from '../components/employeeBirthday/employeeBithday.slice';

export const store = configureStore({
  reducer: { employeeBirthday: employeeBirthdaySlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
