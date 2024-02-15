import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
  const {
    Svg,
    className,
  } = props;

  return (
    <Svg className={classNames(styles.Icon, {}, [className])} />
  );
};
