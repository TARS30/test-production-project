import { classNames } from 'shared/lib/classNames/classNames';

import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import styles from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const {
    sort,
    order,
    className,
    onChangeSort,
    onChangeOrder,
  } = props;

  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('ascending'),
    },
    {
      value: 'desc',
      content: t('descending'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED_AT,
      content: t('date-sozdaniya'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('nazvaniyu'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('chislu-prosmotrov'),
    },
  ], [t]);

  return (
    <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        value={sort}
        onChange={onChangeSort}
        options={sortFieldOptions}
        label={t('sort-by')}
      />
      <Select<SortOrder>
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
      />
    </div>
  );
};
