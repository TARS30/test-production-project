import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { ChangeEvent, memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string
}

interface SelectProps<T extends string> {
  value?: T
  label?: string
  className?: string;
  options?: SelectOption<T>[];
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>({
  value,
  label,
  options,
  readonly,
  onChange,
  className,

}: SelectProps<T>) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  const mods: Mods = {

  };

  return (
    <div className={classNames(styles.Select, mods, [className])}>
      {label && (
      <span className={styles.label}>
        {label}
      </span>
      )}
      <select
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
};
