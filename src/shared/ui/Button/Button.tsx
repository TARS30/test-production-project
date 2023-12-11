import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: string
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    children,
    square,
    size = ButtonSize.M, ...otherProps
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(styles.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
