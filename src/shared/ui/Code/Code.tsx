import { classNames } from 'shared/lib/classNames/classNames';

import { ReactNode, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/CopyIcon.svg';
import { Button, ButtonTheme } from '../Button/Button';
import styles from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = ({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    alert('copied');
  }, [text]);

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
};
