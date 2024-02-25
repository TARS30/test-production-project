import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from 'app/providers/ThemeProvider';
import { ReactNode, memo } from 'react';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    lazy,
    isOpen,
    onClose,
    children,
    className,
  } = props;

  const { theme } = useTheme();

  const {
    isMounted,
    closeHandler,
  } = useModal({
    isOpen,
    onClose,
  });

  const mods = {
    [styles.opened]: isOpen,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.body}>
      <div className={classNames(styles.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={closeHandler} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
