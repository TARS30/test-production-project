import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Country',
  options: [
    { value: '1', content: 'first' },
    { value: '2', content: 'second' },
    { value: '3', content: 'third' },
  ],
};
export const Dark = Template.bind({});
Dark.args = {

  label: 'Country',
  options: [
    { value: '1', content: 'first' },
    { value: '2', content: 'second' },
    { value: '3', content: 'third' },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
