import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('glavnaya-stranica')}
    </div>
  );
};

export default MainPage;
