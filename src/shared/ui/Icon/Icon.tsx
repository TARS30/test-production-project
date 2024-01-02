import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import styles from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const {
    Svg,
    className,
  } = props;

  return (

    <Svg className={classNames(styles.Icon, {}, [className])} />
  );
});
