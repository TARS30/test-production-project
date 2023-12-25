import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from
  'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments }
  from '../model/slices/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/comments/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

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

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (

      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <Text
          align={TextAlign.CENTER}
          title={t('occurred-error')}
          text={t('article-wasnt-found')}
        />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text
          className={styles.commentsTitle}
          textSize={TextSize.L}
          text={t('comments')}
        />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
