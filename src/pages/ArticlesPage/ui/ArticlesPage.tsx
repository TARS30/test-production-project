import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page/Page';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { articlePageReducer } from '../model/slices/articlesPageSlice';
import ArticleInfiniteList from './ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      <Page
        onScrollEnd={onLoadNextPage}
        className={className}
      >
        <VStack
          gap="16"
        >
          <ArticlesPageFilters />
          <ArticleInfiniteList />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
