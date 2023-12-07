import { classNames } from 'shared/lib/classNames/classNames';

import React, { InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
 InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    value,
    onChange,
    className,
    type = 'text',
    placeholder,
    disabled,
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div>
      <input
        className={classNames(styles.Input, {}, [className])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
});
