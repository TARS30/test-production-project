import { classNames } from '@/shared/lib/classNames/classNames';

import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Notification } from '../../model/types/notification';
import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    notification: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
  const {
    className,
    notification,
  } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(styles.NotificationItem, {}, [className])}
    >
      <Text
        title={notification.title}
        text={notification.description}
      />
    </Card>

  );

  if (notification.href) {
    return (
      <AppLink
        className={styles.link}
        to={notification.href}
      >
        {content}
      </AppLink>
    );
  }

  return content;
};
