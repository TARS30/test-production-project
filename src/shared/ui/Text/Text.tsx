import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
  CORRECT = 'correct',
}

export enum TextAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
  S = 'size_s',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    textSize?: TextSize;

    'data-testid'?: string;

}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    text,
    title,
    className,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    textSize = TextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[textSize];

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles[textSize]]: true,
  };

  return (
    <div className={classNames(styles.Text, mods, [className])}>
      {title && (
      <HeaderTag
        data-testid={`${dataTestId}.Header`}
        className={styles.title}
      >
        {title}
      </HeaderTag>
      )}
      {text && (
      <p
        data-testid={`${dataTestId}.Text`}
        className={styles.text}
      >
        {text}
      </p>
      )}
    </div>
  );
});
