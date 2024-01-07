import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaverScheme } from '../types/ScrollSaverScheme';

const initialState: ScrollSaverScheme = {
  scroll: {},
};

export const ScrollSaverSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
      state.scroll[payload.path] = payload.position;
    },

  },
});

// Action creators are generated for each case reducer function
export const { actions: ScrollSaverActions } = ScrollSaverSlice;
export const { reducer: ScrollSaverReducer } = ScrollSaverSlice;
