import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import styles from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;

}

export const CommentItem = memo(({ className, comment, isLoading }: CommentItemProps) => {
  if (isLoading) {
    return (
      <div className={classNames(styles.CommentItem, {}, [className])}>
        <div className={classNames(styles.userHeader, {}, [className])}>
          <Skeleton border="50%" width={30} height={30} />
          <Skeleton border="3px" height={30} width={200} />
        </div>
        <Skeleton border="3px" height={30} />
      </div>
    );
  }
  return (
    <div className={classNames(styles.CommentItem, {}, [className])}>
      <div className={styles.userHeader}>
        {comment.user.avatar
          ? <Avatar size={30} src={comment.user.avatar} alt={comment.user.username} />
          : null}
        <Text text={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
});
