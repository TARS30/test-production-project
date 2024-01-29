import { createSlice } from '@reduxjs/toolkit';
import { USER_COUNTER_KEY } from 'shared/const/localStorage';
import { CounterScheme } from '../types/counterScheme';

const initialState: CounterScheme = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem(USER_COUNTER_KEY, `${state.value}`);
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem(USER_COUNTER_KEY, `${state.value}`);
    },

  },
});

// Action creators are generated for each case reducer function
export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;

export default counterSlice.reducer;
