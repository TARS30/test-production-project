import { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
};

export default meta;

type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
  args: {
    notification: {
      description: 'description of notification',
      id: '1',
      title: 'title of the notification',
    },
  },
};
export const Clickable: Story = {
  args: {
    notification: {
      description: 'description of notification with href',
      id: '1',
      title: 'title of the notification with href',
    },
  },
};
export const Dark: Story = {
  args: {
    notification: {
      description: 'description of notification',
      id: '1',
      title: 'title of the notification',
    },
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
