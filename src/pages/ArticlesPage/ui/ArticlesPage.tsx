import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
  <div className={classNames(styles.ArticlesPage, {}, [className])}>
    <Link className={styles.link} to="1">Javascript</Link>
  </div>
);

export default memo(ArticlesPage);
