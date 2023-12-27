import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormScheme } from '../types/addCommentForm';

const initialState: AddCommentFormScheme = {
  text: '',
  error: '',
  isLoading: false,
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state, action) => {
  //       state.error = undefined;
  //       state.text = action.payload;
  //     })

  //     .addCase(loginByUsername.fulfilled, (state) => {
  //       state.isLoading = false;
  //     })

  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
