import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
  {
    value: Currency.EUR,
    content: Currency.EUR,
  },
  {
    value: Currency.USD,
    content: Currency.USD,
  },
  {
    value: Currency.RUB,
    content: Currency.RUB,
  },
];

export const CurrencySelect = memo(({
  value,
  readonly,
  onChange,
  className,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      label={t('choose-currency')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
