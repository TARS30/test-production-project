import { StateScheme } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('return profile data', () => {
    const state: DeepPartial<StateScheme> = {
      profile: {
        error: 'test error',
      },
    };
    expect(getProfileError(state as StateScheme)).toEqual('test error');
  });
  test('return empty state', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getProfileError(state as StateScheme)).toEqual(undefined);
  });
});
