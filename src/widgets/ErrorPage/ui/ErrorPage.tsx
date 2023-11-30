import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className={classNames(styles.ErrorPage, {}, [className])}>
      <h1>{t('something-went-wrong')}</h1>
      <Button onClick={reloadPage}>{t('refresh-page')}</Button>
    </div>
  );
};
