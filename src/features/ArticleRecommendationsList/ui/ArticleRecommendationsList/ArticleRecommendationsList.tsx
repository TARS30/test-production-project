import { ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import styles from './ArticleRecommendations.module.scss';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const { data: articles, isLoading, error } = useArticleRecommendationsList(4);

  if (isLoading || error) {
    return null;
  }

  return (
    <VStack
      gap="8"
    >
      <Text
        textSize={TextSize.L}
        text={t('recommended')}
      />
      <ArticleList
        className={styles.recommendations}
        target="_blank"
        articles={articles}
        view={ArticleView.SQUARE}
      />
    </VStack>
  );
});
