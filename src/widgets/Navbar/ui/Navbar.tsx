import { useTheme } from 'app/providers/ThemeProvider';
import {
  getUserAuthData,
} from 'entitiess/User';
import { LoginModal } from 'features/AuthByUsername';
import { AvatarDropdown } from 'features/AvatarDropdown';
import { NotificationButton } from 'features/NotificationButton';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const { theme } = useTheme();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <HStack
        wide
        role="banner"
        align="center"
        className={classNames(styles.navbar, {}, [className, theme])}
      >

        <HStack
          align="center"
          gap="16"
        >
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
        <HStack
          align="center"
          className={styles.links}
        >
          <HStack
            gap="16"
            className={styles.actions}
            align="center"
          >
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
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
