import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('glavnaya-stranica')}
    </Page>
  );
};

export default MainPage;
