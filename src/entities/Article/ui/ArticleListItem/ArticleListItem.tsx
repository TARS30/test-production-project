import eyeViews from 'shared/assets/icons/eyeViews.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar, AvatarSizes } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView ;
    isLoading?: boolean;
    error?: string;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const {
    view,
    error,
    article,
    className,
    isLoading,
  } = props;

  const navigate = useNavigate();

  const onArticleOpen = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const textBlock = article.blocks
    .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

  const { t } = useTranslation();

  if (view === ArticleView.SQUARE) {
    return (
      <div
        onClick={onArticleOpen}
        className={classNames(styles.SQUARE, {}, [className, styles[view]])}
      >
        <Card
          onClick={onArticleOpen}
          className={styles.card}
        >
          <div className={styles.imageWrapper}>
            <img
              src={article.img}
              alt={article.title}
              className={styles.img}
            />
            <Text
              text={article.createdAt}
              className={styles.createdAt}
            />
          </div>
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
        </Card>
      </div>
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
        <button
          onClick={onArticleOpen}
          className={styles.title}
        >
          {article.title}
        </button>
        <Text
          text={article.type.join(', ')}
          className={styles.subTitle}
        />
        <div className={styles.imageWrapper}>
          <img
            src={article.img}
            alt={article.title}
            className={styles.img}
          />
        </div>
        {textBlock && (
        <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
        )}
        <div className={styles.footer}>
          <Button onClick={onArticleOpen}>
            {t('continue-reading')}
          </Button>

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
