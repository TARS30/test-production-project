import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Select } from '@/shared/ui/Select/Select';
import { MyListbox } from '@/shared/ui/Popups/ui/MyListbox/MyListbox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
  {
    value: Country.Armenia,
    content: Country.Armenia,
  },
  {
    value: Country.Belarus,
    content: Country.Belarus,
  },
  {
    value: Country.Russia,
    content: Country.Russia,
  },
  {
    value: Country.Ukraine,
    content: Country.Ukraine,
  },
];

export const CountrySelect = memo(({
  value,
  readonly,
  onChange,
  className,
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (

    <MyListbox
      value={value}
      items={options}
      defaultValue={t('choose-country')}
      readonly={readonly}
      onChange={onChangeHandler}
      direction="top left"
      label={t('choose-country')}
    />

  );
});
