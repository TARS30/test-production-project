import { classNames } from 'shared/lib/classNames/classNames';

import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();

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

    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile-0')} />
      {readonly ? (
        <Button
          className={styles.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t('edit')}
        </Button>
      ) : (
        <div className={styles.headerButtons}>
          <Button
            className={styles.editBtn}
            theme={ButtonTheme.OUTLINE_ACCENT}
            onClick={onCloseEdit}
          >
            {t('cancel')}
          </Button>
          <Button
            className={styles.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSaveEdit}
          >
            {t('save')}
          </Button>
        </div>
      ) }

    </div>
  );
};
