import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page
      data-testid="MainPage"
    >
      {t('glavnaya-stranica')}
      <Counter />
      <RatingCard hasFeedback title="title" feedbackTitle="feedbacktitle" />
    </Page>
  );
};

export default MainPage;
