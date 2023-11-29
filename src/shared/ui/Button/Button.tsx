import React, { type ButtonHTMLAttributes, type FC } from 'react';
// @ts-ignore
import { classNames } from 'shared/lib/classNames/classNames';
// @ts-ignore
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, theme, children, ...otherProps
  } = props;
  return (
    <button
      className={classNames(styles.Button, { [styles[theme]]: true }, [
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
