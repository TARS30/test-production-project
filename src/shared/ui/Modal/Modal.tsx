import { classNames } from 'shared/lib/classNames/classNames';

import React, {
  ReactNode, useCallback, useEffect, useState,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { Button, ButtonTheme } from '../Button/Button';

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
    className, children, isOpen, onClose, lazy,
  } = props;

  const [isMounted, setIsMounted] = useState(false);

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

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

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.body}>
      <div className={classNames(styles.Modal, mods, [className, theme, 'app_modal'])}>
        <div onClick={closeHandler} className={styles.overlay}>
          <div onClick={onContentClick} className={styles.content}>
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
      </div>
    </Portal>
  );
};
