import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import squareIcon from 'shared/assets/icons/squareIcon.svg';
import wideIcon from 'shared/assets/icons/wideIcon.svg';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleViewSelector.module.scss';

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
