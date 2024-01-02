import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  document.title = 'About us';

  return (
    <div>{t('cat')}</div>
  );
}
