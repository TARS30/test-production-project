import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsScheme } from '../types/ArticleDetailsCommentsScheme';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateScheme>(
  (state) => state.ArticleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsScheme>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })

      .addCase(fetchCommentsByArticleId.fulfilled, (
        state,
        action: PayloadAction<Comment[]>,
      ) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })

      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;

// type RootState = ReturnType<typeof store.getState>

// console.log(store.getState().books);
// // { ids: [], entities: {} }

// // Can create a set of memoized selectors based on the location of this entity state
// const booksSelectors = booksAdapter.getSelectors<RootState>(
//   (state) => state.books,
// );

// // And then use the selectors to retrieve values
// const allBooks = booksSelectors.selectAll(store.getState());
