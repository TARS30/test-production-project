import { StateScheme } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('return profile data', () => {
    const data = {
      age: 11,
      city: 'rbest',
      first: 'sanya',
      username: 'tars',
      lastname: 'cherniv',
      country: Country.Belarus,
      currency: Currency.USD,
    };
    const state: DeepPartial<StateScheme> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateScheme)).toEqual(data);
  });
  test('return empty state', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getProfileData(state as StateScheme)).toEqual(undefined);
  });
});
