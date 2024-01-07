import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleList } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ErrorPage } from 'widgets/ErrorPage';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { articlePageReducer, getArticles } from '../model/slices/articlesPageSlice';
import styles from './ArticlesPage.module.scss';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';

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

  const [searchParams] = useSearchParams();

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return <ErrorPage />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPage}>
        <div className={styles.header}>
          <ArticlesPageFilters />
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
