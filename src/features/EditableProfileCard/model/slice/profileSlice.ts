import { Profile } from 'entitiess/Profile';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileScheme } from '../types/EditableProfileCardSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileScheme = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateError = undefined;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })

      .addCase(fetchProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>,
      ) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })

      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateProfileData.pending, (state) => {
        state.validateError = undefined;
        state.isLoading = true;
      })

      .addCase(updateProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>,
      ) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
        state.validateError = undefined;
      })

      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateError = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
