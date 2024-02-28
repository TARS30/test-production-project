import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation();

  if (!id) {
    return <Text text={t('error-occured')} />;
  }

  return (
    <Page className={className}>
      <VStack
        wide
        gap="16"
        justify="spaceBetween"
      >
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
