import { classNames } from 'shared/lib/classNames/classNames';

import {
  MutableRefObject, ReactNode, useRef, UIEvent, memo,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateScheme } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import styles from './Page.module.scss';
import { ScrollSaverActions, getScrollSaverByPath } from './ScrollSaver';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?:() => void
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
  const { children, className, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const scrollPosition = useSelector(
    (state: StateScheme) => getScrollSaverByPath(state, pathname),
  );

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(ScrollSaverActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 500);

  return (
    <main
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(styles.Page, {}, [className])}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd ? <div ref={triggerRef} /> : null}
    </main>
  );
});
