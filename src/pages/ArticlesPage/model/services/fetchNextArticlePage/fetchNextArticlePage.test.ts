import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage', () => {
  // test('success', async () => {
  //   const thunk = new TestAsyncThunk(fetchNextArticlePage, {
  //     articlesPage: {
  //       page: 2,
  //       ids: [],
  //       limit: 5,
  //       entities: {},
  //       hasMore: true,
  //       isLoading: false,
  //     },
  //   });

  //   await thunk.callThunk();

  //   expect(thunk.dispatch).toBeCalledTimes(4);
  //   expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  // });
  test('fetch didn`t called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        limit: 5,
        entities: {},
        hasMore: false,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
  test('fetch is loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        limit: 5,
        entities: {},
        hasMore: true,
        isLoading: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    const stateAfterCall = thunk.getState();
    expect(stateAfterCall.articlesPage?.isLoading).toBe(true);
  });
});
