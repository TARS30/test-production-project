import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentItem } from '../CommentItem/CommentItem';
import { Comment } from '../../model/types/comment';

import styles from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, isLoading, comments }: CommentListProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentItem
            key={comment.id}
            isLoading={isLoading}
            comment={comment}
          />
        ))
        : <Text text={t('no-comments-yet')} />}
    </div>
  );
});
