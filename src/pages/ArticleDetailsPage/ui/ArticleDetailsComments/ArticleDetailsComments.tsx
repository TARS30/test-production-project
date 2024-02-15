import { classNames } from 'shared/lib/classNames/classNames';

import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entitiess/Comment';
import { useTranslation } from 'react-i18next';
import { Suspense, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useParams } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader';
import { getArticleDetailsCommentsIsLoading } from
  '../../model/selectors/comments/comments';
import { getArticleComments } from
  '../../model/slices/articleDetailsCommentsSlice';
import { addCommentForArticle } from
  '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from
  '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);

  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback((text:string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  return (
    <div className={classNames('', {}, [className])}>
      <Text
        textSize={TextSize.L}
        text={t('comments')}
      />
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Suspense fallback={<Loader />}>
        <AddCommentForm
          onSendComment={onSendComment}
        />
      </Suspense>
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </div>
  );
};
