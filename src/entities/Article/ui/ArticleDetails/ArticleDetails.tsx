import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/CalendarIcon.svg';
import EyeViewsIcon from 'shared/assets/icons/eyeViews-20-20.svg';
import { DynamicModuleLoader, ReducersList }
  from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
  Text, TextAlign, TextSize,
} from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from 'shared/ui/Stack';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading }
  from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from
  '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            block={block}
            key={block.id}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            block={block}
            key={block.id}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            block={block}
            key={block.id}
          />
        );
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <VStack
        wide
        gap="16"
      >
        <HStack
          wide
          justify="spaceAround"
        >
          <Skeleton
            className={styles.avatar}
            border="50%"
            height={200}
            width={200}
          />
        </HStack>
        <Skeleton
          className={styles.title}
          width={300}
          border="5px"
          height={20}
        />
        <Skeleton
          className={styles.skeleton}
          border="5px"
          width={500}
          height={30}
        />
        <Skeleton
          className={styles.skeleton}
          border="5px"
          width="100%"
          height={300}
        />
        <Skeleton
          className={styles.skeleton}
          border="5px"
          width="100%"
          height={500}
        />
      </VStack>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('error-occured')}
        text={t('article-wasnt-found')}
      />
    );
  } else {
    content = (
      <VStack gap="16">
        <HStack
          wide
          justify="spaceAround"
        >
          <Avatar
            src={article?.img}
            className={styles.avatar}
            alt={`${article?.title || 'image'} `}
          />
        </HStack>
        <Text
          textSize={TextSize.L}
          title={article?.title}
          className={styles.title}
          text={article?.subtitle}
        />
        <HStack
          gap="8"
        >
          <Icon
            Svg={EyeViewsIcon}
          />
          <Text
            text={article?.views.toString()}
          />
        </HStack>
        <HStack
          gap="8"
        >
          <Icon
            Svg={CalendarIcon}
          />
          <Text
            text={article?.createdAt.toString()}
          />
        </HStack>
        {article?.blocks.map(renderBlock)}
      </VStack>
    );
  }

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack wide>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
