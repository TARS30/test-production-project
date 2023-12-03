import { classNames } from 'shared/lib/classNames/classNames';

import React, { ReactNode, useCallback, useEffect } from 'react';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props : ModalProps) => {
  const {
    className, children, isOpen, onClose,
  } = props;

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.dark]: className === 'dark',
    [styles.light]: className === 'light',
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
      <div className={classNames(styles.Modal, mods, [className])}>
        <div onClick={closeHandler} className={styles.overlay}>
          <div onClick={onContentClick} className={styles.content}>
            <button onClick={closeHandler}>close</button>
            {children}
            Lorem ipsum dolor sit amet,
          </div>
        </div>
      </div>
    </Portal>
  );
};
