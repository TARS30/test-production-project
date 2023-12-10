import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: 'username', password: 'password' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: 'username', password: 'password' },
  })];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
  loginForm: { username: 'username', password: 'password', error: 'error' },
})];

export const ErrorDark = Template.bind({});
ErrorDark.args = {};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: 'username', password: 'password', error: 'error' },
  })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  loginForm: { username: 'username', password: 'password', isLoading: true },
})];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: 'username', password: 'password', isLoading: true },
  })];
