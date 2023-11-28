import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t('Главная страница')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('О нас')}
        </AppLink>
      </div>
    </div>
  );
}
