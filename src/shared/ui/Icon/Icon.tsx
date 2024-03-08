import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement>{
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
    onClick?: () => void;
}

export const Icon = (props: IconProps) => {
  const {
    Svg,
    onClick,
    inverted,
    className,
    ...otherProps
  } = props;

  return (
    <Svg
      onClick={onClick}
      className={classNames(inverted ? styles.inverted : styles.Icon, {}, [className])}
      {...otherProps}
    />
  );
};
