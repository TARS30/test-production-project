import {
  Meta,
  StoryObj,
} from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta: Meta<typeof ArticleTypeTabs> = {
  title: 'shared/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleTypeTabs>;

export const Primary: Story = {
  args: {
  },
};
