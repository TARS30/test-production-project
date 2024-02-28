import {
  DetailedHTMLProps, HTMLAttributes, ReactNode, memo,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import styles from './Flex.module.scss';

export type FlexJustify =
    'start'
    | 'end'
    | 'center'
    | 'spaceBetween'
    | 'spaceAround';
export type FlexAlign =
    'start'
    | 'end'
    | 'center';
export type FlexDirection =
    'column'
    | 'row';
export type FlexGap = '4'
    | '8'
    | '16'
    | '32';

const justifyClassNames: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  spaceAround: styles.justifySpaceAround,
  spaceBetween: styles.justifySpaceBetween,
};

const alignClassNames: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const directionClassNames: Record<FlexDirection, string> = {
  column: styles.directionColumn,
  row: styles.directionRow,
};

const gapClassNames: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> ;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    wide?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = '8',
    wide,
    role,
  } = props;

  const classes = [
    className,
    justifyClassNames[justify],
    alignClassNames[align],
    directionClassNames[direction],
    gap && gapClassNames[gap],
  ];

  const mods:Mods = {
    [styles.wide]: wide,
  };

  return (
    <div role={role} className={classNames(styles.Flex, mods, classes)}>
      {children}
    </div>
  );
};
