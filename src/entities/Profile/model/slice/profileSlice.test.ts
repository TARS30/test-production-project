import { ProfileScheme, ValidateProfileError, updateProfileData } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { isLoading } from '../../ui/ProfileCard/ProfileCard.stories';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'tars',
  age: 11,
  country: Country.Belarus,
  lastname: 'cherniv',
  first: 'sanya',
  city: 'rbest',
  currency: Currency.USD,
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileScheme> = { readonly: false };
    expect(profileReducer(
        state as ProfileScheme,
        profileActions.setReadOnly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileScheme> = { data, form: { username: '' } };
    expect(profileReducer(
        state as ProfileScheme,
        profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileScheme> = { form: { username: '123' } };
    expect(profileReducer(
        state as ProfileScheme,
        profileActions.updateProfile({
          username: '123456',
        }),
    )).toEqual({
      form: { username: '123456' },
    });
  });
  // extra reducers
  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileScheme> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
        state as ProfileScheme,
        updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileScheme> = {
      isLoading: true,
    };
    expect(profileReducer(
        state as ProfileScheme,
        updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
