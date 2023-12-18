import { StateScheme } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('return profile isloading', () => {
    const state: DeepPartial<StateScheme> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateScheme)).toEqual(true);
  });
  test('return empty state', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getProfileIsLoading(state as StateScheme)).toEqual(undefined);
  });
});
