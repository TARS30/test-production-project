import { Mods, classNames } from 'shared/lib/classNames/classNames';

import React, { InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
 InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
    readonly?: boolean
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
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [styles.readonly]: readonly,
  };

  return (
    <div>
      <input
        className={classNames(styles.Input, mods, [className])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
      />
    </div>
  );
});
