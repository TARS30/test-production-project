import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentItem } from './CommentItem';

export default {
  title: 'entities/CommentItem',
  component: CommentItem,
  args: {},
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => (
  <CommentItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    id: '1',
    text: 'comment text',
    user: {
      id: '1',
      username: 'username',
      avatar: '',
    },
  },
};
export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
