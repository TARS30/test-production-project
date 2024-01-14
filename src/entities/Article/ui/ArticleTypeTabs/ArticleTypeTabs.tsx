import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleType } from 'entities/Article/model/types/article';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('all'),
    },
    {
      value: ArticleType.IT,
      content: 'IT',
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('economics'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('science'),
    },
  ], [t]);

  const onTabChange = useCallback((newType: TabItem) => {
    onChangeType(newType.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabChange}
      className={classNames('', {}, [className])}
    />
  );
};