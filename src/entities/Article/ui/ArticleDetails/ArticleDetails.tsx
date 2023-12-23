import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from
  'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading }
  from '../../model/selectors/articleDetails';
import { fetchArticleById } from
  '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
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
  const data = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  // const isLoading = useSelector(getArticleDetailsIsLoading);
  const isLoading = true;

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton
          className={styles.avatar}
          border="50%"
          height={200}
          width={200}
        />
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
      </div>
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
      <div>ArticleDetails</div>
    );
  }

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
