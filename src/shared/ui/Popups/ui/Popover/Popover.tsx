import { Popover as LibPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { DropdownDirection } from '@/shared/types/ui';
import styles from './Popover.module.scss';
import popupStyles from '../../styles/popups.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const {
    className,
    direction = 'bottom right',
    trigger,
    children,
  } = props;

  const menuClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <LibPopover
      className={classNames(styles.Popover, {}, [className, popupStyles.popup])}
    >
      <LibPopover.Button
        className={popupStyles.trigger}
      >
        {trigger}
      </LibPopover.Button>

      <LibPopover.Panel className={classNames(styles.panel, {}, menuClasses)}>
        {children}
      </LibPopover.Panel>
    </LibPopover>
  );
}
