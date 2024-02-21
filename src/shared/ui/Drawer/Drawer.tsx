import { classNames } from 'shared/lib/classNames/classNames';

import { ReactNode, memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    isOpen,
    onClose,
    children,
    className,
  } = props;

  const { theme } = useTheme();

  const mods = {
    [styles.opened]: isOpen,
  };

  return (
    <Portal element={document.body}>
      <div className={classNames(styles.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
