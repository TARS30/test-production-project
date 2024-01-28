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
import { Text } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
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
        wide
        align="center"
        className={classNames(styles.navbar, {}, [className, theme])}
      >

        <HStack gap="16">
          <Text
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
          <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={onLogout}
            className={styles.btn}
          >
            {t('logout')}

          </Button>
        </HStack>
      </HStack>
    );
  }

  return (
    <HStack className={classNames(styles.navbar, {}, [className, theme])}>
      <Text className={styles.logo} title={t('aboba')} />

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
