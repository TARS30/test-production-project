import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { ErrorPage } from 'widgets/ErrorPage';
import {
  getArticlesPageError, getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNumber, getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageActions, articlePageReducer, getArticles } from '../model/slices/articlesPageSlice';
import styles from './ArticlesPage.module.scss';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const articles = useSelector(getArticles.selectAll);

  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const dispatch = useAppDispatch();

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(ArticlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(ArticlesPageActions.initState());
    dispatch(fetchArticlesList({
      page: 1,
    }));
  });

  if (error) {
    return <ErrorPage />;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPage}>
        <div className={styles.header}>
          <div>1</div>
          <ArticleViewSelector view={view} onChangeView={onChangeView} />
        </div>
        <div className={classNames(styles.ArticlesPage, {}, [className])}>
          <ArticleList
            view={view}
            articles={articles}
            isLoading={isLoading}
          />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
