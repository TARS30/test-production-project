import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    age: 11,
    city: 'rbest',
    first: 'sanya',
    username: 'tars',
    lastname: 'chernov',
    country: Country.Belarus,
    currency: Currency.USD,
  },
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error',
};
Primary.decorators = [StoreDecorator({})];
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  data: {
    age: 11,
    city: 'rbest',
    first: 'sanya',
    username: 'tars',
    lastname: 'chernov',
    country: Country.Belarus,
    currency: Currency.USD,
  },
  readonly: true,
};
Primary.decorators = [StoreDecorator({})];

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
IsLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {
  data: {
    age: 11,
    city: 'rbest',
    first: 'sanya',
    username: 'tars',
    lastname: 'chernov',
    country: Country.Belarus,
    currency: Currency.USD,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
