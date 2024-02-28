import {
  Meta, StoryObj,
} from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Normal: Story = {

  args: {},
  decorators: [
    StoreDecorator({}),
  ],
};

export const Dark : Story = {

  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
  ],
};
