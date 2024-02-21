import { classNames } from 'shared/lib/classNames/classNames';

import { MyDropdown } from 'shared/ui/Popups';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entitiess/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);

  const dispatch = useAppDispatch();

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const adminIsVisible = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <MyDropdown
      className={classNames(styles.AvatarDropdown, {}, [className])}
      direction="bottom left"
      items={[
        ...(adminIsVisible ? [{
          content: t('admin'),
          href: RoutePath.admin_panel_page,
        }] : []),
        {
          content: t('profile'),
          href: RoutePath.profile + authData!.id,
        },
        {
          content: t('logout'),
          onClick: onLogout,
        },
      ]}
      trigger={(
        <Avatar
          alt="avatar"
          size={30}
          src={authData?.avatar}
        />
      )}
    />
  );
};
