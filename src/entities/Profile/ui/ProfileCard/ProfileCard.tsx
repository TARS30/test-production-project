import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
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
      <HStack
        wide
        justify="spaceAround"
        className={styles.loaderWrapper}
      >
        <Loader className={styles.loader} />

      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        wide
        justify="center"
      >
        <Text theme={TextTheme.ERROR} title={t('occurred-error')} text={error} />
        <Text theme={TextTheme.PRIMARY} text={t('try-to-reload-the-page')} />
      </HStack>
    );
  }

  return (

    <VStack
      gap="16"
      wide
      className={styles.data}
    >
      {data?.avatar
           && (
             <HStack
               wide
               justify="spaceAround"
             >
               <Avatar className={styles.avatar} src={data.avatar} alt="avatar" />
             </HStack>
           )}
      <Input
        data-testid="ProfileCard.FirstName"
        readonly={readonly}
        value={data?.first}
        placeholder={t('name')}
        className={styles.input}
        onChange={onChangeFirstName}
      />
      <Input
        data-testid="ProfileCard.LastName"
        readonly={readonly}
        value={data?.lastname}
        className={styles.input}
        placeholder={t('last-name')}
        onChange={onChangeLastName}
      />
      <Input
        data-testid="ProfileCard.Age"
        type="number"
        readonly={readonly}
        placeholder={t('age')}
        onChange={onChangeAge}
        value={data?.age || 1}
        className={styles.input}
      />

      <Input
        data-testid="ProfileCard.City"
        value={data?.city}
        readonly={readonly}
        placeholder={t('city')}
        onChange={onChangeCity}
        className={styles.input}
      />
      <Input
        data-testid="ProfileCard.Username"
        readonly={readonly}
        value={data?.username}
        className={styles.input}
        placeholder={t('user-name')}
        onChange={onChangeUserName}
      />
      <Input
        data-testid="ProfileCard.Avatar"
        readonly={readonly}
        value={data?.avatar}
        placeholder={t('avatar')}
        className={styles.input}
        onChange={onChangeAvatar}
      />
      <CurrencySelect
        data-testid="ProfileCard.CurrencySelect"
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        data-testid="ProfileCard.CountrySelect"
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
