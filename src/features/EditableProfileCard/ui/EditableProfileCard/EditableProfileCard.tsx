import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import {
  ProfileCard,
} from '@/entities/Profile';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const error = useSelector(getProfileError);

  const formData = useSelector(getProfileForm);

  const readonly = useSelector(getProfileReadOnly);

  const isLoading = useSelector(getProfileIsLoading);

  const validateErrors = useSelector(getProfileValidateErrors);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
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
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <VStack
        gap="8"
        wide
      >
        <EditableProfileCardHeader
          data-testid="editableProfileCardHeader"
        />
        {validateErrors?.length && validateErrors.map((error) => (
          <Text
            data-testid="EditableProfileCard.Error"
            key={error}
            text={error}
            theme={TextTheme.ERROR}
            title={t('error-occured')}
          />
        ))}
        <ProfileCard
          data-testid="profileCard"
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
      </VStack>
    </DynamicModuleLoader>
  );
});
