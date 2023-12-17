import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { ChangeEvent, memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
  value?: string
  label?: string
  className?: string;
  options?: SelectOption[]
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo(({
  value,
  label,
  options,
  readonly,
  onChange,
  className,

}: SelectProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
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
});
