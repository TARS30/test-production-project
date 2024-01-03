import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  ProfileCard,
  profileActions,
  profileReducer,
  getProfileForm,
  getProfileError,
  fetchProfileData,
  getProfileReadOnly,
  getProfileIsLoading,
  getProfileValidateErrors,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from
  'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const error = useSelector(getProfileError);

  const formData = useSelector(getProfileForm);

  const readonly = useSelector(getProfileReadOnly);

  const isLoading = useSelector(getProfileIsLoading);

  const validateErrors = useSelector(getProfileValidateErrors);

  const { id } = useParams<{id: string}>();

  useInitialEffect(() => {
    // if (__PROJECT__ !== 'storybook') {
    if (id) {
      dispatch(fetchProfileData(id));
    }
    // }
  });

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);
  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);
  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);
  const onChangeUserName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);
  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);
  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);
  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map((error) => (
          <Text
            key={error}
            text={error}
            theme={TextTheme.ERROR}
            title={t('error-occured')}
          />
        ))}
        <ProfileCard
          error={error}
          data={formData}
          readonly={readonly}
          isLoading={isLoading}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeCountry={onChangeCountry}
          onChangeLastName={onChangeLastName}
          onChangeUserName={onChangeUserName}
          onChangeCurrency={onChangeCurrency}
          onChangeFirstName={onChangeFirstName}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
