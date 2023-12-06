import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('glavnaya-stranica')}
      <Input placeholder="123" value={value} onChange={onChange} />
      <Counter />
    </div>
  );
};

export default MainPage;
