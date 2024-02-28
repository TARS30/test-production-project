import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page/Page';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('glavnaya-stranica')}
      <Counter />
    </Page>
  );
};

export default MainPage;
