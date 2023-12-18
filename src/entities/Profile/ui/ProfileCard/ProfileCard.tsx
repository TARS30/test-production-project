import { classNames } from 'shared/lib/classNames/classNames';

import { Currency, CurrencySelect } from 'entities/Currency';
import { Profile } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Country, CountrySelect } from 'entities/Country';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  data?: Profile;
  error?: string;
  className?: string;
  readonly?: boolean;
  isLoading?: boolean;
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeUserName?: (value?: string) => void
  onChangeLastName?: (value?: string) => void
  onChangeFirstName?: (value?: string) => void
  onChangeCountry?: (country: Country) => void
  onChangeCurrency?: (currency: Currency) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    data,
    error,
    readonly,
    className,
    isLoading,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCountry,
    onChangeUserName,
    onChangeLastName,
    onChangeCurrency,
    onChangeFirstName,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, { [styles.loading]: true }, [className])}>
        <Loader />
      </div>

    );
  }

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, { }, [className, styles.error])}>
        <Text theme={TextTheme.ERROR} title={t('occurred-error')} text={error} />
        <Text theme={TextTheme.PRIMARY} text={t('try-to-reload-the-page')} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>

      <div className={styles.data}>
        {data?.avatar
         && (
         <div className={styles.avatarWrapper}>
           <Avatar src={data.avatar} alt="avatar" />
         </div>
         )}
        <Input
          readonly={readonly}
          value={data?.first}
          placeholder={t('name')}
          className={styles.input}
          onChange={onChangeFirstName}
        />
        <Input
          readonly={readonly}
          value={data?.lastname}
          className={styles.input}
          placeholder={t('last-name')}
          onChange={onChangeLastName}
        />
        <Input
          type="number"
          readonly={readonly}
          placeholder={t('age')}
          onChange={onChangeAge}
          value={data?.age || 1}
          className={styles.input}
        />

        <Input
          value={data?.city}
          readonly={readonly}
          placeholder={t('city')}
          onChange={onChangeCity}
          className={styles.input}
        />
        <Input
          readonly={readonly}
          value={data?.username}
          className={styles.input}
          placeholder={t('user-name')}
          onChange={onChangeUserName}
        />
        <Input
          readonly={readonly}
          value={data?.avatar}
          placeholder={t('avatar')}
          className={styles.input}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
