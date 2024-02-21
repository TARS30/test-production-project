/* eslint-disable i18next/no-literal-string */
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from 'app/providers/ThemeProvider';
import {
  ReactNode, useCallback, useEffect, useState,
} from 'react';
import { Button, ButtonTheme } from '../Button/Button';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?:boolean;
}

export const Modal = (props : ModalProps) => {
  const { theme } = useTheme();

  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isMounted, setIsMounted] = useState(false);

  const mods: Mods = {
    [styles.opened]: isOpen,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    function escapeButtonCloseHandler() {
      window.addEventListener('keydown', onKeyDown);
    }
    escapeButtonCloseHandler();
  }, [onKeyDown]);

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.body}>
      <div className={classNames(styles.Modal, mods, [className, theme, 'app_modal'])}>
        <Overlay onClick={closeHandler} />
        <div className={styles.content}>
          <Button
            className={styles.button}
            theme={ButtonTheme.CLEAR}
            onClick={closeHandler}
          >
            <span>&#10006;</span>
          </Button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
