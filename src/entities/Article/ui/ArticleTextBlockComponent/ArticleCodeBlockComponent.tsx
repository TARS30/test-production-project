import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = memo(({ className }: ArticleCodeBlockComponentProps) => (
  <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
    ArticleCodeBlockComponent
  </div>
));
