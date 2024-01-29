import { classNames } from 'shared/lib/classNames/classNames';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
import {
  getAddCommentFormError,
  getAddCommentFormIsLoading,
  getAddCommentFormText,
} from '../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';
import styles from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const isLoading = useSelector(getAddCommentFormIsLoading);

  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setComment(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  if (isLoading) {
    return (
      <div className={classNames(styles.AddCommentForm, {}, [className])}>
        <Loader className={styles.loader} />
      </div>
    );
  }

  if (error) {
    return (
      <HStack
        align="center"
        justify="center"
        className={classNames(styles.AddCommentForm, {}, [className])}
      >
        <Text title={t('error-occured')} text={error} theme={TextTheme.ERROR} />
      </HStack>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        gap="16"
        justify="spaceBetween"
        className={classNames(styles.AddCommentForm, {}, [className])}
      >
        <Input
          type="text"
          value={text}
          placeholder={t('type-comment')}
          onChange={onCommentTextChange}
        />
        <Button
          className={styles.button}
          onClick={onSendHandler}
        >
          {t('send')}

        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
