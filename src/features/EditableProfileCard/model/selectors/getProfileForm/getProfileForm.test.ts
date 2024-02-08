import { StateScheme } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('return profile form', () => {
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
        form: data,
      },
    };
    expect(getProfileForm(state as StateScheme)).toEqual(data);
  });
  test('return empty state', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getProfileForm(state as StateScheme)).toEqual(undefined);
  });
});
