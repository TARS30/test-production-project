import { ArticleType, ArticleView, ArticleSortField } from '@/entities/Article/model/consts/consts';

import { StateScheme } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getArticlesPageIsLoading = (state: StateScheme) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateScheme) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateScheme) => state.articlesPage?.view || ArticleView.WIDE;
export const getArticlesPageNumber = (state: StateScheme) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateScheme) => state.articlesPage?.limit || 10;
export const getArticlesPageHasMore = (state: StateScheme) => state.articlesPage?.hasMore;
export const getArticlesPageInitialized = (state: StateScheme) => state.articlesPage?._initialized;
export const getArticlesPageOrder = (state: StateScheme) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSort = (state: StateScheme) => state.articlesPage?.sort ?? ArticleSortField.CREATED_AT;
export const getArticlesPageSearch = (state: StateScheme) => state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: StateScheme) => state.articlesPage?.type ?? ArticleType.ALL;

export const [useArticleItemById] = buildSelector(
  (state: StateScheme, id: string) => state.articlesPage?.entities[id],
);
