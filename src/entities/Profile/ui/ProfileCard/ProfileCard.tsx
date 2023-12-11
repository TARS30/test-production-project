import { classNames } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { getProfileData } from
  'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from
  'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from
  'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('profile-0')} />
        <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE}>{t('edit')}</Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t('name')}
          className={styles.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('last-name')}
          className={styles.input}
        />
      </div>
    </div>
  );
};
