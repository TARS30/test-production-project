import { Counter } from 'entitiess/Counter';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

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
