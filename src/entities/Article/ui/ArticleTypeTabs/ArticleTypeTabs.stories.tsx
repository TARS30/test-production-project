import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
  title: 'shared/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  args: {},
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
  <ArticleTypeTabs {...args} />
);

export const Story = Template.bind({});
Story.args = {};
