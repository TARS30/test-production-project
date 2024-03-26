import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import eyeViews from '@/shared/assets/icons/eyeViews.svg?react';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar, AvatarSizes } from '@/shared/ui/Avatar/Avatar';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import {
  ArticleBlockType,
  ArticleView,
} from '../../model/consts/consts';
import {
  Article, ArticleTextBlock,
} from '../../model/types/article';

import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleListItem.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView ;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const {
    view,
    article,
    className,
    target,
  } = props;

  const textBlock = article.blocks
    .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
  const { t } = useTranslation();

  if (view === ArticleView.SQUARE) {
    return (
      <AppLink
        target={target}
        to={getRouteArticleDetails(article.id)}
        className={classNames(styles.SQUARE, {}, [className, styles[view]])}
      >
        <Card
          className={styles.card}
        >
          <div className={styles.imageWrapper}>
            <AppImage
              fallback={(
                <Skeleton
                  height={200}
                  width={200}
                />
              )}
              src={article.img}
              alt={article.title}
              className={styles.img}
            />
            <Text
              text={article.createdAt}
              className={styles.createdAt}
            />
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.infoWrapper}>
              <Text
                className={styles.types}
                textSize={TextSize.S}
                text={article.type.join(', ')}
              />
              <Text
                text={article.views.toLocaleString()}
                className={styles.views}
                textSize={TextSize.S}
              />
              <Icon
                Svg={eyeViews}
                className={styles.icon}
              />
            </div>
            <Text
              text={article.title}
              className={styles.title}
            />
          </div>
        </Card>
      </AppLink>
    );
  }

  return (
    <div
      className={classNames(styles.WIDE, {}, [className, styles[view]])}
    >
      <Card className={styles.card}>
        <div className={styles.header}>
          <Avatar
            alt={article.user.id}
            src={article.user.avatar}
            size={AvatarSizes.EXTRA_SMALL}
          />
          <Text
            text={article.user.username}
            className={styles.username}
          />
          <Text
            className={styles.createdAt}
            text={article.createdAt}
          />
        </div>
        <AppLink
          target={target}
          to={getRouteArticleDetails(article.id)}
        >
          <button
            className={styles.title}
          >
            {article.title}
          </button>
        </AppLink>
        <Text
          text={article.type.join(', ')}
          className={styles.subTitle}
        />
        <div className={styles.imageWrapper}>
          <AppImage
            fallback={(
              <Skeleton
                width="100%"
                height={200}
              />
)}
            src={article.img}
            alt={article.title}
            className={styles.img}
          />
        </div>
        {textBlock && (
        <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
        )}
        <div className={styles.footer}>
          <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
          >
            <Button>
              {t('continue-reading')}
            </Button>
          </AppLink>
          <div className={styles.infoWrapper}>
            <Text
              text={article.views.toLocaleString()}
              className={styles.views}
              textSize={TextSize.S}
            />
            <Icon
              Svg={eyeViews}
              className={styles.icon}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
