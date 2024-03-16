import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutePath } from '@/shared/const/router';
import { Button } from '@/shared/ui/Button/Button';
import { getCanEditArticle } from '../../model/selectors/article/article';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();

  const article = useSelector(getArticleDetailsData);

  const canEdit = useSelector(getCanEditArticle);

  const navigate = useNavigate();

  const onBack = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <header className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}>
      <Button
        onClick={onBack}
      >
        {t('back-to-the-list')}
      </Button>
      {canEdit && (
        <Button
          onClick={onEditArticle}
          className={styles.editBtn}
        >
            {t('edit')}
        </Button>
      )}
    </header>
  );
};
