import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entitiess/Article';

export interface ArticleRecommendationsScheme extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}
