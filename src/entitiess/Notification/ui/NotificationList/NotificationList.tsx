import { VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { BrowserView, MobileView } from 'react-device-detect';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import styles from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
  const { className } = props;

  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 2500,
  });

  if (isLoading) {
    return (
      <>
        <MobileView>
          <VStack
            gap="16"
          >
            <Skeleton border="8px" height={80} width="100%" />
            <Skeleton border="8px" height={80} width="100%" />
            <Skeleton border="8px" height={80} width="100%" />
          </VStack>
        </MobileView>
        <BrowserView>
          <VStack
            gap="16"
          >
            <Skeleton border="8px" height={80} width={400} />
            <Skeleton border="8px" height={80} width={400} />
            <Skeleton border="8px" height={80} width={400} />
          </VStack>
        </BrowserView>
      </>
    );
  }

  return (
    <VStack
      wide
      gap="16"
      className={classNames('', {}, [className, styles.NotificationList])}
    >
      {data?.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
        />
      ))}
    </VStack>
  );
};
