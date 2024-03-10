import { Suspense, lazy } from 'react';
import { ProfileRatingProps } from './ProfileRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export const ProfileRatingAsync = lazy(async () => import('./ProfileRating'));

export const ProfileRatingLazy = (props: ProfileRatingProps) => {
  return (
    <Suspense fallback={<Skeleton height={30} width="100%" />}>
      <ProfileRatingAsync {...props} />
    </Suspense>
  );
};
