import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';

export default function AboutPage() {
  const { t } = useTranslation();

  document.title = 'About us';

  return (
    <div>{t('cat')}</div>
  );
}
