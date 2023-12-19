import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('return true', () => {
    const state: DeepPartial<StateScheme> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateScheme)).toEqual(true);
  });
  test('return false', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
  });
});
