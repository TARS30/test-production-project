import { classNames } from 'shared/lib/classNames/classNames';

import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { Text } from 'shared/ui/Text/Text';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
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
          className={styles.card}
          article={articles[index]}
          view={view}
          target={target}
          key={i}
        />,
      );
    }

    return (
      <div
        key={key}
        style={style}
        className={styles.row}
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
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
          ref={registerChild}
          className={classNames(styles.ArticleList, {}, [className, styles[view]])}
        >
          <List
            height={height ?? 710}
            width={width ? width - 80 : 700}
            rowCount={rowCount}
            rowHeight={isWide ? 700 : 340}
            rowRenderer={rowRender}
            autoHeight
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
          />
          {isLoading && getSkeletons(view)}

        </div>

      )}
    </WindowScroller>
  //   {articles.length > 0
  //     ? articles.map(renderArticle)
  //     : null}
  );
};
