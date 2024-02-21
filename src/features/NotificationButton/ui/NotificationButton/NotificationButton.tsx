import { classNames } from 'shared/lib/classNames/classNames';

import { Popover } from 'shared/ui/Popups';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entitiess/Notification';
import NotificationIcon from 'shared/assets/icons/NotificationIcon.svg';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      direction="bottom left"
      className={classNames(styles.NotificationButton, {}, [className])}
      trigger={(
        <Icon
          className={styles.NotificationButton}
          inverted
          Svg={NotificationIcon}
        />
      )}
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  );
};
