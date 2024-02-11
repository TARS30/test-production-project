import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack, VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import styles from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;

}

export const CommentItem = memo((props: CommentItemProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack wide className={classNames(styles.CommentItem, {}, [className, styles.isLoading])}>
        <div className={classNames(styles.userHeader, {}, [className])}>
          <Skeleton border="50%" width={30} height={30} />
          <Skeleton border="3px" height={30} width={200} />
        </div>
        <Skeleton border="3px" height={30} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      wide
      gap="16"
      className={classNames(styles.CommentItem, {}, [className])}
    >
      <HStack
        wide
        gap="16"
      >
        <AppLink to={RoutePath.profile + comment.user.id}>
          {comment.user.avatar
            ? <Avatar size={30} src={comment.user.avatar} alt={comment.user.username} />
            : null}
        </AppLink>
        <AppLink to={RoutePath.profile + comment.user.id}>
          <Text
            className={classNames(styles.username, {}, [className])}
            text={comment.user.username}
          />
        </AppLink>

      </HStack>
      <Text text={comment.text} />
    </VStack>
  );
});
