import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  args: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'comment',
      user: {
        id: '1',
        username: 'username1',
        avatar: '',
      },
    },
    {
      id: '2',
      text: 'comment2',
      user: {
        id: '2',
        username: 'username2',
        avatar: '',
      },
    },
  ],
};
Primary.decorators = [
  StoreDecorator({}),
];
export const isLoading = Template.bind({});
isLoading.args = {
  comments: [
    {
      id: '1',
      text: 'comment',
      user: {
        id: '1',
        username: 'username1',
        avatar: '',
      },
    },
    {
      id: '2',
      text: 'comment2',
      user: {
        id: '2',
        username: 'username2',
        avatar: '',
      },
    },
  ],
  isLoading: true,
};
