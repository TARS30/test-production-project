import React, { InputHTMLAttributes, memo, useRef } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<
 InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
    readonly?: boolean;
    'data-testid'?: string;
    wide?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    value,
    onChange,
    className,
    type = 'text',
    placeholder,
    disabled,
    readonly,
    'data-testid': dataTestId,
    wide,
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [styles.readonly]: readonly,
    [styles.wide]: wide,
  };

  return (
    <input
      ref={ref}
      data-testid={dataTestId}
      className={classNames(styles.Input, mods, [className])}
      type={type}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readonly}
    />
  );
});
