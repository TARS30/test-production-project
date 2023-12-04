import { StateScheme } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('get counter value', () => {
    const state: DeepPartial<StateScheme> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateScheme)).toEqual(10);
  });
});
