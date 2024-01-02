import eyeViews from 'shared/assets/icons/eyeViews.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
  ArticleView,
} from '../../model/types/article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView ;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const {
    view,
    className,
  } = props;

  if (view === ArticleView.WIDE) {
    return (
      <div
        className={classNames(styles.WIDE, {}, [className, styles[view]])}
      >
        <Card
          className={styles.card}
        >
          <div className={styles.header}>
            <Skeleton
              height={30}
              width={30}
              border="50%"
            />
            <Skeleton
              height={20}
              width={90}
              className={styles.username}
            />
            <Skeleton
              height={20}
              width={90}
              className={styles.createdAt}
            />
          </div>
          <Skeleton
            height={30}
            className={styles.title}
          />
          <div className={styles.infoWrapper}>
            <Skeleton
              height={20}
              width={100}
            />
            <Skeleton
              height={20}
              width={100}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Skeleton
              height={200}
            />
          </div>
          <div>
            <Skeleton
              className={styles.types}
              height={60}
            />
            <Skeleton
              className={styles.views}
              height={40}
            />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.SQUARE, {}, [className, styles[view]])}
    >
      <Card className={styles.card}>
        <div className={styles.marginBottom}>
          <Skeleton
            width={200}
            height={200}
          />
        </div>
        <Skeleton
          className={styles.marginBottom}
          height={20}
          width={120}
        />
        <Skeleton
          height={20}
          width={150}
        />
      </Card>
    </div>
  );
};
