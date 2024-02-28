import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick: () => void;

}

export const Overlay = memo((props: OverlayProps) => {
  const {
    onClick,
    className,
  } = props;

  return (
    <div
      onClick={onClick}
      className={classNames(styles.Overlay, {}, [className])}
    />
  );
});
