import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title of component "Text"',
  text: 'Some text of "Text" component',
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Title of component "Text"',
  text: 'Some text of "Text" component',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title of component "Text"',
  text: 'Some text of "Text" component',
  theme: 'error',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Title of component "Text"',
  text: 'Some text of "Text" component',
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title of component "Text"',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title of component "Text"',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Some text of "Text" component',
};
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Some text of "Text" component',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
