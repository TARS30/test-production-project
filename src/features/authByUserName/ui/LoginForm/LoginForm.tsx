import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <form className={classNames(styles.LoginForm, {}, [className])}>
      <Input type="text" className={styles.input} />
      <Input type="text" className={styles.input} />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
      >
        {t('login')}
      </Button>
    </form>
  );
};
