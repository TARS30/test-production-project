import { Mods, classNames } from 'shared/lib/classNames/classNames';

import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    textSize?: TextSize;
}

export const Text = (props: TextProps) => {
  const {
    text,
    title,
    className,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    textSize = TextSize.M,
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles[textSize]]: true,
  };

  return (
    <div className={classNames(styles.Text, mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
