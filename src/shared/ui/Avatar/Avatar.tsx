import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import profile from '../../assets/icons/profile.svg';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton/Skeleton';
import styles from './Avatar.module.scss';
import { Icon } from '../Icon/Icon';

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
  fallbackInverted?: boolean;
}

export const Avatar = ({
  src,
  alt,
  className,
  size = 100,
  fallbackInverted,
}: AvatarProps) => {
  const addStyle = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const errorFallback = (
    <Icon
      width={size}
      height={size}
      Svg={profile}
      inverted={fallbackInverted}
    />
  );

  const fallback = (
    <Skeleton
      className={styles.Avatar}
      border="50%"
      height={AvatarSizes.EXTRA_SMALL}
      width={AvatarSizes.EXTRA_SMALL}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(styles.Avatar, {}, [className])}
      alt={alt}
      src={src}
      style={addStyle}
    />
  );
};
