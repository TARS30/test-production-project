import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { HStack } from '../Stack/HStack/HStack';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = (props: TabsProps) => {
  const {
    className,
    value,
    tabs,
    onTabClick,
  } = props;

  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <HStack
      gap="8"
      className={classNames(styles.Tabs, {}, [className])}
    >
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value
            ? CardTheme.NORMAL
            : CardTheme.OUTLINED}
          className={styles.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </HStack>
  );
};
