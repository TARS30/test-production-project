import { getUserAuthData } from 'entitiess/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadOnly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCloseEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData());
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (

    <HStack
      wide
      gap="8"
      align="center"
      justify="spaceBetween"
    >
      {canEdit
        ? <Text title={`${t('profile-0')} (${t('you')})`} />
        : <Text title={t('profile-0')} />}
      {canEdit && (
        <div>
          {readonly ? (
            <Button
              data-testid="EditableProfileCardHeader.Edit"
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
            >
              {t('edit')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button
                data-testid="EditableProfileCardHeader.Cancel"
                theme={ButtonTheme.OUTLINE_ACCENT}
                onClick={onCloseEdit}
              >
                {t('cancel')}
              </Button>
              <Button
                data-testid="EditableProfileCardHeader.Save"
                theme={ButtonTheme.OUTLINE}
                onClick={onSaveEdit}
              >
                {t('save')}
              </Button>
            </HStack>
          )}
        </div>
      )}

    </HStack>
  );
};
