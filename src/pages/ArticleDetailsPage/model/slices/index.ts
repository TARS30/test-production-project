import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageScheme } from '../index';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articlePageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

export const ArticleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
  comments: articleDetailsCommentsReducer,
  recommendations: articlePageRecommendationsReducer,
});
