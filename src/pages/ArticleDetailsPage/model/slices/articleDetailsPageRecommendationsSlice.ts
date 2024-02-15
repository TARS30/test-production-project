import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { Article } from 'entitiess/Article';
import { ArticleRecommendationsScheme } from '../types/ArticleRecommendationsScheme';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateScheme>(
  (state) => state.ArticleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articlePageRecommendationsSlice = createSlice({
  name: 'articlePageRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleRecommendationsScheme>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })

      .addCase(fetchArticleRecommendations.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })

      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageRecommendationsReducer } = articlePageRecommendationsSlice;

// type RootState = ReturnType<typeof store.getState>

// console.log(store.getState().books);
// // { ids: [], entities: {} }

// // Can create a set of memoized selectors based on the location of this entity state
// const booksSelectors = booksAdapter.getSelectors<RootState>(
//   (state) => state.books,
// );

// // And then use the selectors to retrieve values
// const allBooks = booksSelectors.selectAll(store.getState());
