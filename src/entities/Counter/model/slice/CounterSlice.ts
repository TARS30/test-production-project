import { PayloadAction } from '@reduxjs/toolkit';
import { USER_COUNTER_KEY } from '@/shared/const/localStorage';
import { buildSlice } from '@/shared/lib/store';
import { CounterScheme } from '../types/counterScheme';

const initialState: CounterScheme = {
  value: 0,
};

export const counterSlice = buildSlice({
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
    reset: (state) => {
      state.value = 0;
      localStorage.setItem(USER_COUNTER_KEY, `${state.value}`);
    },
    add: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
      localStorage.setItem(USER_COUNTER_KEY, `${state.value}`);
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      state.value -= payload;
      localStorage.setItem(USER_COUNTER_KEY, `${state.value}`);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions,
} = counterSlice;

export default counterSlice.reducer;
