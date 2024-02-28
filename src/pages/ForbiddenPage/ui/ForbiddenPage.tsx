import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page/Page';
import styles from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames(styles.ForbiddenPage, {}, [className])}>
      <Text text={t('you-don-t-have-access-to-this-page')} />
    </Page>
  );
});

export default ForbiddenPage;
