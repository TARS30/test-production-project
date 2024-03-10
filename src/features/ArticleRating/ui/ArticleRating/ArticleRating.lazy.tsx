import { Suspense, lazy } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export const ArticleRatingAsync = lazy(async () => import('./ArticleRating'));

export const ArticleRatingLazy = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton height={30} width="100%" />}>
      <ArticleRatingAsync {...props} />
    </Suspense>
  );
};
