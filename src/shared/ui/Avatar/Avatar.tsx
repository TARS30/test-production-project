import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { CSSProperties, useMemo } from 'react';
import styles from './Avatar.module.scss';

export enum AvatarSizes {
  BIG = 300,
  SMALL = 50,
  PRIMARY= 100,
  EXTRA_SMALL = 30,
}

interface AvatarProps {
  alt: string
  src?: string
  size?: AvatarSizes | number
  className?: string;
}

export const Avatar = ({
  src,
  alt,
  className,
  size = 100,
}: AvatarProps) => {
  const mods: Mods = {};

  const addStyle = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      className={classNames(styles.Avatar, mods, [className])}
      alt={alt}
      src={src}
      style={addStyle}
    />
  );
};
