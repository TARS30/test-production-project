import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from
  'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers:ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername);

  const password = useSelector(getLoginPassword);

  const error = useSelector(getLoginError);

  const isLoading = useSelector(getLoginIsLoading);

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
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <form
        onSubmit={onLoginClick}
        className={classNames(styles.LoginForm, {}, [className])}
      >
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
