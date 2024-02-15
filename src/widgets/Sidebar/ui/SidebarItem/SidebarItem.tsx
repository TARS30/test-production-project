import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { SidebarItemType } from '../../model/types/sidebar';
import styles from './SidebarItem.module.scss';
// import { getUserAuthData } from 'entities/User'; при изменении импорта на относительный ошибок стало на одну меньше
import { getUserAuthData } from '../../../../entitiess/User';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean
}

export const SidebarItem = memo(({ collapsed, item }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(styles.item, { [styles.collapsed]: collapsed })}
    >
      {collapsed
        ? <item.Icon className={styles.icon} />
        : (
          <div className={styles.item}>
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{t(item.text)}</span>
          </div>
        )}
    </AppLink>
  );
});
