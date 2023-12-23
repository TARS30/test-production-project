import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = memo(({ className }: ArticleImageBlockComponentProps) => (
  <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
    ArticleImageBlockComponent
  </div>
));
