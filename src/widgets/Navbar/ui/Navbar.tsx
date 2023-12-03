import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useTheme();

  const modalOpenHandler = () => {
    setIsOpen(true);
  };
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Button
          theme={ButtonTheme.BACKGROUND_INVERTED}
          onClick={modalOpenHandler}
        >
          {t('login')}

        </Button>
        <Modal
          className={theme}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />

      </div>
    </div>
  );
};
