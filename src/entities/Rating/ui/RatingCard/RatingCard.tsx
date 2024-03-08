import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import styles from './RatingCard.module.scss';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsQuantity:number) => void
  onSend?: (starsQuantity: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    title,
    onSend,
    onCancel,
    className,
    hasFeedback,
    feedbackTitle,
  } = props;

  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const onSelectedStars = useCallback((selectedStarsCount: number) => {
    setStarCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onSend?.(selectedStarsCount);
    }
  }, [hasFeedback, onSend]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onSend?.(starsCount, feedback);
  }, [feedback, onSend, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    setFeedback('');
  }, []);

  const modalContent = (
    <VStack wide gap="16">
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        wide
        placeholder={t('enter-your-feedback')}
      />
      <HStack wide justify="end" gap="16">
        <Button
          onClick={cancelHandler}
          theme={ButtonTheme.OUTLINE_ACCENT}
        >
          {t('cancel')}
        </Button>
        <Button
          onClick={acceptHandler}
          theme={ButtonTheme.OUTLINE}
        >
          {t('send')}
        </Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={classNames(styles.Rating, {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating size={30} onSelect={onSelectedStars} />
      </VStack>
      <BrowserView>
        <Modal
          lazy
          isOpen={isModalOpen}
          onClose={cancelHandler}
        >
          {modalContent}
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer
          lazy
          isOpen={isModalOpen}
          onClose={cancelHandler}
        >
          {modalContent}
        </Drawer>
      </MobileView>
    </Card>
  );
});
