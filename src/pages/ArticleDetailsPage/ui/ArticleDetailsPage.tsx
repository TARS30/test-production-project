import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (

      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <Text
          align={TextAlign.CENTER}
          title={t('occurred-error')}
          text={t('article-wasnt-found')}
        />
      </div>
    );
  }

  return (

    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
