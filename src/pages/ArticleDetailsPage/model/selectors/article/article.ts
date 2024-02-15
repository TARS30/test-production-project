import { getUserAuthData } from 'entitiess/User';
import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entitiess/Article';

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article.user.id === user.id;
  },
);
