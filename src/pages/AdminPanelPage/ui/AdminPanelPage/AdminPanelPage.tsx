import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Page
      data-testid="AdminPanelPage"
      className={classNames('', {}, [className])}
    >
      Admin Panel Page
    </Page>
  );
});
export default AdminPanelPage;
