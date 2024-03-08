import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { Button, ButtonTheme } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import styles from './Dropdown.module.scss';
import popupStyles from '../../styles/popups.module.scss';

export interface DropdownItems{
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItems[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

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
      className={classNames(styles.MyDropdown, {}, [className, popupStyles.popup])}
      as="div"
    >
      <Menu.Button className={popupStyles.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(styles.items, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: {active: boolean}) => (
            <Button
              theme={ButtonTheme.CLEAR}
              key={index}
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(styles.item, {
                [popupStyles.disabled]: item.disabled,
                [popupStyles.active]: active,
              })}
            >
              {item.content}
            </Button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={index}
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
              key={index}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>

    </Menu>
  );
}
