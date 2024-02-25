import {
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface UseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const useModal = (props: UseModalProps) => {
  const {
    isOpen,
    onClose,
  } = props;

  const [isMounted, setIsMounted] = useState(false);

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

  return {
    isMounted,
    closeHandler,
  };
};
