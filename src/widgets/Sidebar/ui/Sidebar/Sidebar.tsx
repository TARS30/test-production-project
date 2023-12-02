import { useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={styles.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.XL}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <div className={styles.item}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
          >
            {collapsed
              ? <HomeIcon className={styles.icon} />
              : (
                <div className={styles.item}>
                  <HomeIcon className={styles.icon} />
                  <span className={styles.link}>
                    {t('glavnaya-stranica')}
                  </span>
                </div>
              )}
          </AppLink>
        </div>

        <div className={styles.item}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
          >
            {collapsed
              ? <ListIcon className={styles.icon} />
              : (
                <div className={styles.item}>
                  <ListIcon className={styles.icon} />
                  <span className={styles.link}>{t('o-nas')}</span>
                </div>
              )}
          </AppLink>
        </div>

      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};
