import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';

export default {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  args: {},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
  <ArticleSortSelector {...args} />
);

export const Story = Template.bind({});
Story.args = {};
