import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import styles from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItems{
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
    id?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItems[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
  'top left': styles.optionsTopLeft,
  'top right': styles.optionsTopRight,

};

export function MyDropdown(props: DropdownProps) {
  const {
    className,
    items,
    trigger,
    direction = 'bottom left',
  } = props;

  const menuClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <Menu
      className={classNames(styles.MyDropdown, {}, [className])}
      as="div"
    >
      <Menu.Button className={styles.button}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(styles.items, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: {active: boolean}) => (
            <button
              key={item.id}
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(styles.item, { [styles.active]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={item.id}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              key={item.id}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>

      <Menu.Items className={styles.items} />
    </Menu>
  );
}
