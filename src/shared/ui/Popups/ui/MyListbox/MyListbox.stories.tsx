import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyListbox } from './MyListbox';

export default {
  title: 'shared/SelectBox',
  component: MyListbox,
  args: {},
} as ComponentMeta<typeof MyListbox>;

const Template: ComponentStory<typeof MyListbox> = (args) => (
  <MyListbox {...args} />
);

export const Story = Template.bind({});
Story.args = {
  value: 'asdasd',
  items: [
    {
      content: '12123',
      value: '12312',
    },
    {
      content: 'AS12123',
      value: '1231DSA2',
    },
    {
      content: '12asd123',
      value: '12312AS',
    },
  ],
};
export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  value: 'asdasd',
  items: [
    {
      content: '12123',
      value: '12312',
    },
    {
      content: 'AS12123',
      value: '1231DSA2',
    },
    {
      content: '12asd123',
      value: '12312AS',
    },
  ],
};
export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  value: 'asdasd',
  items: [
    {
      content: '12123',
      value: '12312',
    },
    {
      content: 'AS12123',
      value: '1231DSA2',
    },
    {
      content: '12asd123',
      value: '12312AS',
    },
  ],
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  value: 'asdasd',
  items: [
    {
      content: '12123',
      value: '12312',
    },
    {
      content: 'AS12123',
      value: '1231DSA2',
    },
    {
      content: '12asd123',
      value: '12312AS',
    },
  ],
};
export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  value: 'asdasd',
  items: [
    {
      content: '12123',
      value: '12312',
    },
    {
      content: 'AS12123',
      value: '1231DSA2',
    },
    {
      content: '12asd123',
      value: '12312AS',
    },
  ],
};
