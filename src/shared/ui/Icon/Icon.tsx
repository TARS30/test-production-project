import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = (props: IconProps) => {
  const {
    Svg,
    className,
    inverted,
  } = props;

  return (
    <Svg
      className={classNames(inverted ? styles.inverted : styles.Icon, {}, [className])}
    />
  );
};
