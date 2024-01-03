import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
} from '../../selectors/articlesPageSelectors';
import { ArticlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

interface fetchNextArticlePageProps {
  page?: number
}

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
      'articlesPage/fetchNextArticlePage',
      async (_, thunkApi) => {
        const {
          getState,
          dispatch,
        } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNumber(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
          dispatch(ArticlesPageActions.setPage(page + 1));
          dispatch(fetchArticlesList({
            page: page + 1,
          }));
        }
      },
    );
