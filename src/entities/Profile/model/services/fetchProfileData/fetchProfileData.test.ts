import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'tars',
  age: 11,
  country: Country.Belarus,
  lastname: 'cherniv',
  first: 'sanya',
  city: 'rbest',
  currency: Currency.USD,
};

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({
      data,
    }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
