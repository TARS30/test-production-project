import { memo, useState } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '../../assets/icons/StarIcon.svg?react';
import styles from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    size = 20,
    onSelect,
    className,
    selectedStars = 0,
  } = props;

  const [starQuantity, setStarQuantity] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setStarQuantity(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setStarQuantity(0);
    }
  };

  const onClick = (starQuantity: number) => () => {
    if (!isSelected) {
      onSelect?.(starQuantity);
      setStarQuantity(starQuantity);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(styles.StarRating, {}, [className])}>
      {stars.map((starNumber) => {
        return (
          <Icon
            className={classNames(
              styles.starIcon,
              { [styles.selected]: isSelected },
              [starQuantity >= starNumber ? styles.hovered : styles.normal],
            )}
            Svg={StarIcon}
            key={starNumber}
            width={size}
            height={size}
            onMouseEnter={onHover(starNumber)}
            onMouseLeave={onLeave}
            onClick={onClick(starNumber)}
          />
        );
      })}
    </div>
  );
});
