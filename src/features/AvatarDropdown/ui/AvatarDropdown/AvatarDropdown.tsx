import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { MyDropdown } from '@/shared/ui/Popups';
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
          href: getRouteAdmin(),
        }] : []),
        {
          content: t('profile'),
          href: getRouteProfile(authData!.id),
        },
        {
          content: t('logout'),
          onClick: onLogout,
        },
      ]}
      trigger={(
        <Avatar
          fallbackInverted
          alt="avatar"
          size={30}
          src={authData?.avatar}
        />
      )}
    />
  );
};
