import { classNames } from 'shared/lib/classNames/classNames';

import React, { ReactNode, useCallback, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { Button, ButtonTheme } from '../Button/Button';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props : ModalProps) => {
  const { theme } = useTheme();

  const {
    className, children, isOpen, onClose,
  } = props;

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

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

  return (
    <Portal element={document.getElementById('root')}>
      <div className={classNames(styles.Modal, mods, [className, theme])}>
        <div onClick={closeHandler} className={styles.overlay}>
          <div onClick={onContentClick} className={styles.content}>
            <Button
              className={styles.button}
              theme={ButtonTheme.CLEAR}
              onClick={closeHandler}
            >
              &#10006;

            </Button>
            {children}
            Lorem ipsum dolor sit amet,
          </div>
        </div>
      </div>
    </Portal>
  );
};
