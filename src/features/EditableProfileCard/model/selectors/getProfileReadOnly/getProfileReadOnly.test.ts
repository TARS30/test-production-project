import { StateScheme } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
  test('return profile read only', () => {
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
        readonly: true,
      },
    };
    expect(getProfileReadOnly(state as StateScheme)).toEqual(true);
  });
  test('return empty state', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getProfileReadOnly(state as StateScheme)).toEqual(undefined);
  });
});
