import { EntityState } from '@reduxjs/toolkit';
import {
  Article,
  ArticleType,
  ArticleView,
  ArticleSortField,
} from '@/entities/Article';

import { SortOrder } from '@/shared/types';

export interface ArticlesPageScheme extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    page: number;
    limit: number;
    hasMore: boolean;

    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _initialized: boolean;
}
