import {
  Meta, StoryObj,
} from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light : Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
};

export const Dark : Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
};
