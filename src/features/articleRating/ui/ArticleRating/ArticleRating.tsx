import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const {
    className,
    articleId,
  } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation] = useRateArticle();

  const rateArticleHandler = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        articleId,
        rate: starsCount,
        userId: userData?.id ?? '',
        feedback,
      });
    } catch (e) {
      console.log(e);
    }
  }, [articleId, rateArticleMutation, userData?.id]);

  const onCancel = useCallback((starsCount: number) => {
    rateArticleHandler(starsCount);
  }, [rateArticleHandler]);

  const onSend = useCallback((starsCount: number, feedback?: string) => {
    rateArticleHandler(starsCount, feedback);
  }, [rateArticleHandler]);

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
      title={t('rate-the-article')}
      feedbackTitle={t('leave-the-feedback-about-article')}
    />
  );
});

export default ArticleRating;
