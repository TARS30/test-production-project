import { Listbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from '../../types/ui';
import styles from './MyListbox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange?: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
  'top left': styles.optionsTopLeft,
  'top right': styles.optionsTopRight,

};

export function MyListbox(props: ListBoxProps) {
  const {
    value,
    items,
    label,
    onChange,
    readonly,
    className,
    direction = 'bottom right',
    defaultValue,
  } = props;

  const optionClasses = [
    mapDirectionClass[direction],
  ];

  return (

    <HStack gap="4">
      {label && <span>{label}</span>}

      <Listbox
        disabled={readonly}
        as="div"
        className={classNames(styles.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <Listbox.Button
          className={styles.trigger}
        >
          {value ?? defaultValue}
        </Listbox.Button>
        <Listbox.Options
          className={classNames(styles.options, {}, optionClasses)}
        >
          {items?.map((item) => (
            <Listbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li className={classNames(styles.option, {
                  [styles.disabled]: item.disabled,
                  [styles.selected]: selected,
                  [styles.active]: active,
                })}
                >
                  {item.value}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </HStack>
  );
}
