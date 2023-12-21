import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => (
  <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
    ARTICLE DETAILS PAGE
  </div>
);

export default memo(ArticleDetailsPage);
