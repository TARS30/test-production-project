import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
Primary.decorators = [StoreDecorator({
  profile: {
    form: {
      age: 11,
      city: 'rbest',
      first: 'sanya',
      username: 'tars',
      lastname: 'chernov',
      country: Country.Belarus,
      currency: Currency.USD,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
  profile: {
    form: {
      age: 11,
      city: 'rbest',
      first: 'sanya',
      username: 'tars',
      lastname: 'chernov',
      country: Country.Belarus,
      currency: Currency.USD,
    },
  },
}), ThemeDecorator(Theme.DARK)];
