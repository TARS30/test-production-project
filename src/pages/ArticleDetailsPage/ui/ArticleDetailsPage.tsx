import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from
  'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import styles from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments }
  from '../model/slices/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/comments/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);

  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const navigate = useNavigate();

  const onBack = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback((text:string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
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
