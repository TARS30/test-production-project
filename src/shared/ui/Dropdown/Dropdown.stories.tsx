import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyDropdown } from './Dropdown';
import { Button } from '../Button/Button';

export default {
  title: 'shared/Dropdown',
  component: MyDropdown,
  args: {},
} as ComponentMeta<typeof MyDropdown>;

const Template: ComponentStory<typeof MyDropdown> = (args) => (
  <MyDropdown {...args} />
);

export const Story = Template.bind({});
Story.args = {

  trigger: <Button>open</Button>,
  items: [
    {
      content: '1231231231',
    },
    {
      content: 'asdasdasdasd',
    },
    {
      content: '1231231231',
    },
  ],
};
export const topLeft = Template.bind({});
topLeft.args = {
  trigger: <Button>open</Button>,
  direction: 'top left',
  items: [
    {
      content: '1231231231',
    },
    {
      content: 'asdasdasdasd',
    },
    {
      content: '1231231231',
    },
  ],
};
export const topRight = Template.bind({});
topRight.args = {
  trigger: <Button>open</Button>,
  direction: 'top right',
  items: [
    {
      content: '1231231231',
    },
    {
      content: 'asdasdasdasd',
    },
    {
      content: '1231231231',
    },
  ],
};
export const bottomLeft = Template.bind({});
bottomLeft.args = {
  trigger: <Button>open</Button>,
  direction: 'bottom left',
  items: [
    {
      content: '1231231231',
    },
    {
      content: 'asdasdasdasd',
    },
    {
      content: '1231231231',
    },
  ],
};
export const bottomRight = Template.bind({});
bottomRight.args = {
  trigger: <Button>open</Button>,
  direction: 'bottom right',
  items: [
    {
      content: '1231231231',
    },
    {
      content: 'asdasdasdasd',
    },
    {
      content: '1231231231',
    },
  ],
};
