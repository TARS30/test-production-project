import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback((e) => {
    e.preventDefault();
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <form onSubmit={onLoginClick} className={classNames(styles.LoginForm, {}, [className])}>
      {!error && <Text title={t('login-page')} />}
      {error && (
      <Text
        theme={TextTheme.ERROR}
        title={t('login-failed')}
        text={t('wrong-username-or-password')}
      />
      )}
      <Input
        onChange={onChangeUsername}
        placeholder={t('username')}
        type="text"
        className={styles.input}
        value={username}
        disabled={isLoading}
      />
      <Input
        onChange={onChangePassword}
        placeholder={t('password')}
        type="text"
        className={styles.input}
        value={password}
        disabled={isLoading}
      />
      <Button
        disabled={isLoading}
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
        type="submit"
      >
        {t('login')}
      </Button>
    </form>
  );
});
