import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState, memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
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
      <div className={classNames(styles.navbar, {}, [className, theme])}>
        <div className={styles.links}>
          <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={onLogout}
            className={styles.btn}
          >
            {t('logout')}

          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className, theme])}>
      <div className={styles.links}>
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

      </div>
    </div>
  );
});
