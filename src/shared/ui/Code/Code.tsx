import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import CopyIcon from '@/shared/assets/icons/CopyIcon.svg';
import { Button, ButtonTheme } from '../Button/Button';
import styles from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const { t } = useTranslation();
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    // eslint-disable-next-line no-alert
    alert(t('copied'));
  }, [t, text]);

  return (
    <pre className={styles.Code}>
      <Button onClick={onCopy} className={styles.copyButton} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={styles.codeIcon} />
      </Button>
      <code className={classNames('', {}, [className])}>
        {text}
      </code>
    </pre>
  );
});
