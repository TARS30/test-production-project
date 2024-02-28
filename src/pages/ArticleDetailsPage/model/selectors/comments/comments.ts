import { StateScheme } from '@/app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (state: StateScheme) => {
  return state.ArticleDetailsPage?.comments?.isLoading;
};
export const getArticleDetailsCommentsError = (state: StateScheme) => {
  return state.ArticleDetailsPage?.comments?.error;
};
