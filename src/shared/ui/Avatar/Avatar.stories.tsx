import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar, AvatarSizes } from './Avatar';
import wojak from './wojak.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: wojak,
  size: AvatarSizes.PRIMARY,
};
export const BIG = Template.bind({});
BIG.args = {
  src: wojak,
  size: AvatarSizes.BIG,
};
export const Small = Template.bind({});
Small.args = {
  src: wojak,
  size: AvatarSizes.SMALL,
};
export const NoImage = Template.bind({});
NoImage.args = {
  src: '',
  alt: 'avatar',
};
