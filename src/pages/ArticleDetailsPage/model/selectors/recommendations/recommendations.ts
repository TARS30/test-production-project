import { StateScheme } from '@/app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateScheme) => {
  return state.ArticleDetailsPage?.recommendations?.isLoading;
};
export const getArticleRecommendationsError = (state: StateScheme) => {
  return state.ArticleDetailsPage?.recommendations?.error;
};
