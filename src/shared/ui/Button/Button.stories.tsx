import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineSizeM = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
};

export const OutlineSizeL = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark = {

  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundInverted = {

  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeM = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeL = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeXL = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Disabled = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};
