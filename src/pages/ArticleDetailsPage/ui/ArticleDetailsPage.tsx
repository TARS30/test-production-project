import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button } from 'shared/ui/Button/Button';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/comments/comments';
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations/recommendations';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsPageReducer } from '../model/slices';
import { getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import { getArticleRecommendations } from '../model/slices/articleDetailsPageRecommendationsSlice';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  ArticleDetailsPage: ArticleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);

  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const navigate = useNavigate();

  const onBack = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback((text:string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (

      <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <Text
          align={TextAlign.CENTER}
          title={t('occurred-error')}
          text={t('article-wasnt-found')}
        />
      </Page>
    );
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <Button
          onClick={onBack}
        >
          {t('back-to-the-list')}

        </Button>
        <ArticleDetails id={id} />
        <Text
          className={styles.commentsTitle}
          textSize={TextSize.L}
          text={t('recommended')}
        />
        <ArticleList
          target="_blank"
          className={styles.recommendations}
          articles={recommendations}
          view={ArticleView.SQUARE}
          isLoading={recommendationsIsLoading}
        />
        <Text
          className={styles.commentsTitle}
          textSize={TextSize.L}
          text={t('comments')}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
