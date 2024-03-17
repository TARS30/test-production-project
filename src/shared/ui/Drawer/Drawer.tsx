import {
  ReactNode, memo, useCallback, useEffect,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './Drawer.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface DrawerProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    children: ReactNode;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
  const {
    Spring,
    Gesture,
    isLoaded,
  } = useAnimationLibs();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const {
    lazy,
    isOpen,
    onClose,
    children,
    className,
  } = props;

  const { theme } = useTheme();

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer]);

  const closeHandler = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          closeHandler();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: false });
      }
    },
    {
      from:
      () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  const mods = {
    [styles.opened]: isOpen,
  };

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal element={document.body}>
      <div className={classNames(styles.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={closeHandler} />
        <Spring.a.div
            // style={{ display, bottom: `calc(-100vh + ${height - 50}px)`, y }}
          style={{ display, bottom: '-30%', y }}
          {...bind()}
          className={classNames('', {}, [styles.sheet])}
        >
          <div className={styles.content}>{children}</div>
        </Spring.a.div>
      </div>
    </Portal>
  );
});

export const DrawerLazy = memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
});
export const Drawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerLazy {...props} />
    </AnimationProvider>
  );
};
