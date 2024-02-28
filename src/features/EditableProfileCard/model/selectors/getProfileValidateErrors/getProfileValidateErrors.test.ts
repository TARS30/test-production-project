import { StateScheme } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('return profile validate', () => {
    const state: DeepPartial<StateScheme> = {
      profile: {
        validateError: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_USER_DATA,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateScheme)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
  test('return empty state', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined);
  });
});
