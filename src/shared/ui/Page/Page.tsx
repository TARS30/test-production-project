import { classNames } from 'shared/lib/classNames/classNames';

import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import styles from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?:() => void
}

export const Page = (props: PageProps) => {
  const { children, className, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <div
      ref={wrapperRef}
      className={classNames(styles.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </div>
  );
};
