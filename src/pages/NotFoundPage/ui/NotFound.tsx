import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}
export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation();
  return (
    <div
      data-testid="NotFoundPage"
      className={classNames(styles.NotFound, {}, [className])}
    >
      {t('page-not-found')}
    </div>
  );
};
