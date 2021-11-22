import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const employeeBirthdaySlice = createSlice({
  name: 'employeeBirthdays',
  initialState: localStorage.birthdayList ? (JSON.parse(localStorage.birthdayList) as string[]) : ([] as string[]),
  reducers: {
    addEmployeeBirthday: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeEmployeeBirthday: (state, action: PayloadAction<string>) => {
      state.forEach((id, index) => action.payload === id && state.splice(index, 1));
    },
  },
});
export const { addEmployeeBirthday, removeEmployeeBirthday } = employeeBirthdaySlice.actions;
export default employeeBirthdaySlice.reducer;
