import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useTheme } from '@/app/providers/ThemeProvider';
import {
  getUserAuthData,
} from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
  const authData = useSelector(getUserAuthData);
  const { theme } = useTheme();

  const onCloseModal = useCallback(() => {
    setIsAuthModalVisible(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModalVisible(true);
  }, []);

  if (authData) {
    return (
      <div className={styles.navbarWrapper}>
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
      </div>
    );
  }

  return (
    <div className={styles.navbarWrapper}>
      <HStack
        wide
        justify="spaceBetween"
        role="banner"
        className={classNames(styles.navbar, {}, [className, theme])}
      >
        <Text textSize={TextSize.L} className={styles.logo} title={t('aboba')} />

        <HStack className={styles.links}>
          <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={onShowModal}
            className={styles.btn}
          >
            {t('login')}

          </Button>
          {isAuthModalVisible && (
          <LoginModal
            isOpen={isAuthModalVisible}
            onClose={onCloseModal}
          />
          )}

        </HStack>
      </HStack>
    </div>
  );
});
