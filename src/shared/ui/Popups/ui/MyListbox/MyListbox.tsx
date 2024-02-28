import { Listbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '../../../../types/ui';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import styles from './MyListbox.module.scss';
import popupStyles from '../../styles/popups.module.scss';

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
        className={classNames(styles.ListBox, {}, [className, popupStyles.popup])}
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
                  [popupStyles.disabled]: item.disabled,
                  [popupStyles.selected]: selected,
                  [popupStyles.active]: active,
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
