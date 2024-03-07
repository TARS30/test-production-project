import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Popover } from '@/shared/ui/Popups';
import { Icon } from '@/shared/ui/Icon/Icon';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/NotificationIcon.svg?react';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;

  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsDrawerOpened(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsDrawerOpened(false);
  }, []);

  const trigger = (
    <Icon
      inverted
      onClick={onOpenDrawer}
      Svg={NotificationIcon}
      className={styles.NotificationButton}
    />
  );

  return (
    <>
      <BrowserView>
        <Popover
          direction="bottom left"
          className={classNames(styles.NotificationButton, {}, [className])}
          trigger={trigger}
        >
          <NotificationList className={styles.notifications} />
        </Popover>
      </BrowserView>

      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isDrawerOpened} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </>
  );
};
