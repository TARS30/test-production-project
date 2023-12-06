import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import { LoginModal } from 'features/authByUserName/ui/LoginModal/LoginModal';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const { theme } = useTheme();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const { t } = useTranslation();

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
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />

      </div>
    </div>
  );
};
