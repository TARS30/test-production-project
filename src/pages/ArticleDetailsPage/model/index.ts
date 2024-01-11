import { ArticleDetailsCommentsScheme } from './types/ArticleDetailsCommentsScheme';
import { ArticleRecommendationsScheme } from './types/ArticleRecommendationsScheme';

export interface ArticleDetailsPageScheme {
    comments: ArticleDetailsCommentsScheme;
    recommendations: ArticleRecommendationsScheme;
}
