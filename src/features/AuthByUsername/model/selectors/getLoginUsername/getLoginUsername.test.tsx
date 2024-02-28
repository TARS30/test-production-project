import { StateScheme } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('return username value', () => {
    const state: DeepPartial<StateScheme> = {
      loginForm: {
        username: '123',
      },
    };
    expect(getLoginUsername(state as StateScheme)).toEqual('123');
  });
  test('return empty username value', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getLoginUsername(state as StateScheme)).toEqual('');
  });
});
