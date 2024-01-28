import { classNames } from 'shared/lib/classNames/classNames';

import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import {
  memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { VStack, HStack } from 'shared/ui/Stack';

import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { ArticlesPageActions } from '../../model/slices/articlesPageSlice';
import styles from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const view = useSelector(getArticlesPageView);
  const type = useSelector(getArticlesPageType);

  const debouncedFetchData = useDebounce(fetchData, 1000);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(ArticlesPageActions.setView(view));
  }, [dispatch]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(ArticlesPageActions.setOrder(newOrder));
    dispatch(ArticlesPageActions.setPage(1));

    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(ArticlesPageActions.setSort(newSort));
    dispatch(ArticlesPageActions.setPage(1));

    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(ArticlesPageActions.setSearch(newSearch));
    dispatch(ArticlesPageActions.setPage(1));

    debouncedFetchData();
  }, [debouncedFetchData, dispatch]);

  const onChangeTypes = useCallback((value: ArticleType) => {
    dispatch(ArticlesPageActions.setType(value));
    dispatch(ArticlesPageActions.setPage(1));

    fetchData();
  }, [dispatch, fetchData]);

  return (
    <VStack wide gap="16">
      <HStack wide justify="spaceBetween">
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector
          view={view}
          onChangeView={onChangeView}
        />
      </HStack>
      <ArticleTypeTabs
        onChangeType={onChangeTypes}
        value={type}
      />

      <Card className={styles.card}>
        <Input
          onChange={onChangeSearch}
          value={search}
          className={styles.input}
          placeholder={t('search')}
        />
      </Card>
    </VStack>
  );
});
