import { useTheme } from 'app/providers/ThemeProvider';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
import { MyDropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <HStack
        role="banner"
        wide
        align="center"
        className={classNames(styles.navbar, {}, [className, theme])}
      >

        <HStack gap="16">
          <Text
            textSize={TextSize.L}
            className={styles.logo}
            title={t('aboba')}
          />
          <AppLink
            className={styles.createLink}
            to={RoutePath.article_create}
          >
            {t('create-article')}
          </AppLink>
        </HStack>
        <HStack className={styles.links}>
          <MyDropdown
            className={styles.dropdown}
            items={[
              {
                id: '1',
                content: t('logout'),
                onClick: onLogout,
              },
            ]}
            trigger={(
              <Avatar
                alt="avatar"
                size={30}
                src={authData.avatar}
              />
            )}
            direction="bottom left"
          />
        </HStack>
      </HStack>
    );
  }

  return (
    <HStack role="banner" className={classNames(styles.navbar, {}, [className, theme])}>
      <Text textSize={TextSize.L} className={styles.logo} title={t('aboba')} />

      <HStack className={styles.links}>
        <Button
          theme={ButtonTheme.BACKGROUND_INVERTED}
          onClick={onShowModal}
          className={styles.btn}
        >
          {t('login')}

        </Button>
        {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
        )}

      </HStack>
    </HStack>
  );
});
