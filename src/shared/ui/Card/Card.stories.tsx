import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';
import { Text, TextAlign } from '../Text/Text';
import { Button } from '../Button/Button';

export default {
  title: 'shared/Card',
  component: Card,
  args: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Text align={TextAlign.CENTER} title="Title" text="Text" />
      <Button>Button</Button>
    </>
  ),
};
