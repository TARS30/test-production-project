import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { PAGE_ID } from '@/widgets/Page/Page';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
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
    target,
    virtualized = true,
  } = props;

  const { t } = useTranslation();

  const isWide = view === ArticleView.WIDE;

  const itemsPerRow = isWide ? 1 : 3;

  const rowCount = isWide ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({
    index, isScrolling, key, style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          key={i}
          view={view}
          target={target}
          article={articles[i]}
          className={styles.card}
        />,
      );
    }

    return (
      <div
        key={key}
        style={style}
        className={classNames(styles.row, {}, [className])}
      >
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        <Text title={t('no-articles-found')} />
      </div>
    );
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        width,
        height,
        scrollTop,
        isScrolling,
        registerChild,
        onChildScroll,
      }) => (
        <div
        // @ts-ignore
          ref={registerChild}
          className={classNames(styles.ArticleList, {}, [className, styles[view]])}
        >

          {virtualized
            ? (
              <List
                autoHeight
                rowCount={rowCount}
                scrollTop={scrollTop}
                height={height ?? 710}
                rowRenderer={rowRender}
                onScroll={onChildScroll}
                isScrolling={isScrolling}
                rowHeight={isWide ? 700 : 340}
                width={width ? width - 70 : 700}
              />

            )
            : (
              articles.map((article) => (
                <ArticleListItem
                  view={view}
                  target={target}
                  key={article.id}
                  article={article}
                  className={styles.card}
                />
              ))
            )}

          {isLoading && getSkeletons(view)}

        </div>

      )}
    </WindowScroller>
  );
};
