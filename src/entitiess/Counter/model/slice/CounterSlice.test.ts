import { CounterScheme } from '../types/counterScheme';
import { counterReducer, counterActions } from './CounterSlice';

describe('CounterSlice', () => {
  test('counter increment', () => {
    const state: CounterScheme = { value: 10 };
    expect(counterReducer(state, counterActions.increment()))
      .toEqual({ value: 11 });
  });

  test('counter decrement', () => {
    const state: CounterScheme = { value: 10 };
    expect(counterReducer(state, counterActions.decrement))
      .toEqual({ value: 9 });
  });

  test('empty initial state', () => {
    expect((counterReducer(undefined, counterActions.increment())))
      .toEqual({ value: 1 });
  });

  test('empty initial state', () => {
    expect((counterReducer(undefined, counterActions.decrement())))
      .toEqual({ value: -1 });
  });
});
