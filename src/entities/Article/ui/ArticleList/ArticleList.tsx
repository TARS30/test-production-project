import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view:ArticleView) => new Array(view === ArticleView.SQUARE ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton
      view={view}
      key={index}
    />
  ));

export const ArticleList = (props: ArticleListProps) => {
  const {
    articles,
    className,
    isLoading,
    view = ArticleView.WIDE,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
    />
  );

  return (
    <div className={classNames(styles.ArticleList, {}, [className])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
