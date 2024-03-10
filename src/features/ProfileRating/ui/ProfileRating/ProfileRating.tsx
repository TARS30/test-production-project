import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
  const {
    className,
    profileId,
  } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? '',
  });

  const [rateProfileMutation] = useRateProfile();

  const rateProfileHandler = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateProfileMutation({
        profileId,
        rate: starsCount,
        userId: userData?.id ?? '',
        feedback,
      });
    } catch (e) {
      console.log(e);
    }
  }, [profileId, rateProfileMutation, userData?.id]);

  const onCancel = useCallback((starsCount: number) => {
    rateProfileHandler(starsCount);
  }, [rateProfileHandler]);

  const onSend = useCallback((starsCount: number, feedback?: string) => {
    rateProfileHandler(starsCount, feedback);
  }, [rateProfileHandler]);

  if (isLoading) {
    return <Skeleton width="100%" height="100px" />;
  }
  const rating = data?.[0];

  return (
    <RatingCard
      onSend={onSend}
      onCancel={onCancel}
      rate={rating?.rate}
      className={className}
      hasFeedback
      title={t('rate-the-profile')}
      feedbackTitle={t('leave-feedback-about-profile')}
    />
  );
});

export default ProfileRating;
