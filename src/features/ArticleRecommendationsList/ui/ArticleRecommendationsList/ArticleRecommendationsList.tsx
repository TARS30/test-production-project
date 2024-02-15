import { ArticleList, ArticleView } from 'entitiess/Article';
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

  const { data: articles, isLoading, error } = useArticleRecommendationsList(5);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack
      gap="8"
      wide
      className={styles.recommendationsWrapper}
    >
      <Text
        textSize={TextSize.L}
        text={t('recommended')}
      />
      <ArticleList
        target="_blank"
        articles={articles}
        virtualized={false}
        view={ArticleView.SQUARE}
        className={styles.recommendations}
      />
    </VStack>
  );
});
