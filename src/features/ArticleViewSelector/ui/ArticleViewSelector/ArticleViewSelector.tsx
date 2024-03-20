import { classNames } from '@/shared/lib/classNames/classNames';

import squareIcon from '@/shared/assets/icons/squareIcon.svg?react';
import wideIcon from '@/shared/assets/icons/wideIcon.svg?react';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import styles from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onChangeView?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SQUARE,
    icon: squareIcon,
  },
  {
    view: ArticleView.WIDE,
    icon: wideIcon,
  },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
  const { className, view, onChangeView } = props;

  const onChangeViewHandler = (newView: ArticleView) => () => {
    onChangeView?.(newView);
  };

  return (
    <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          className={styles.button}
          theme={ButtonTheme.CLEAR}
          onClick={onChangeViewHandler(viewType.view)}
          key={viewType.view}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [styles.selected]: viewType.view === view })}
          />
        </Button>
      ))}
    </div>
  );
};
