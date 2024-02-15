import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entitiess/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInitialized } from '../../selectors/articlesPageSelectors';
import { ArticlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const {
      getState,
      dispatch,
    } = thunkApi;
    const initialized = getArticlesPageInitialized(getState());
    if (!initialized) {
      const orderFromUrl = searchParams.get('order') as SortOrder;
      if (orderFromUrl) {
        dispatch(ArticlesPageActions.setOrder(orderFromUrl));
      }

      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      if (sortFromUrl) {
        dispatch(ArticlesPageActions.setSort(sortFromUrl));
      }

      const searchFromUrl = searchParams.get('search');
      if (searchFromUrl) {
        dispatch(ArticlesPageActions.setSearch(searchFromUrl));
      }

      const typeFromUrl = searchParams.get('type') as ArticleType;
      if (typeFromUrl) {
        dispatch(ArticlesPageActions.setType(typeFromUrl));
      }

      dispatch(ArticlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
