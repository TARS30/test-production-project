import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

export default function AboutPage() {
  const { t } = useTranslation();

  document.title = 'About us';

  return (
    <Page>
      <div>{t('cat')}</div>
      <div>{t('cat')}</div>
      <div>{t('cat')}</div>
    </Page>
  );
}
