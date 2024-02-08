import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { ErrorPage } from 'widgets/ErrorPage';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface ArticleInfiniteListProps {
    className?: string;
}

const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
  const { className } = props;

  const articles = useSelector(getArticles.selectAll);

  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <ArticleList
      className={className}
      view={view}
      articles={articles}
      isLoading={isLoading}
    />
  );
};

export default ArticleInfiniteList;
