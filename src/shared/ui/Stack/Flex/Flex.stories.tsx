import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  args: {},
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args} />
);

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fourth</div>
      <div>fifth</div>
    </>
  ),
};
export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fourth</div>
      <div>fifth</div>
    </>
  ),
};
// export const justifyStart = Template.bind({});
// justifyStart.args = {
//   justify: 'start',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const justifyCenter = Template.bind({});
// justifyCenter.args = {
//   justify: 'center',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const justifyEnd = Template.bind({});
// justifyEnd.args = {
//   justify: 'end',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const justifySpaceBetween = Template.bind({});
// justifySpaceBetween.args = {
//   justify: 'spaceBetween',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const justifySpaceAround = Template.bind({});
// justifySpaceAround.args = {
//   justify: 'spaceAround',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const alignStart = Template.bind({});
// alignStart.args = {
//   align: 'start',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const alignCenter = Template.bind({});
// alignCenter.args = {
//   align: 'center',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const alignEnd = Template.bind({});
// alignEnd.args = {
//   align: 'end',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const gap4 = Template.bind({});
// gap4.args = {
//   gap: '4',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const gap8 = Template.bind({});
// gap8.args = {
//   gap: '8',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const gap16 = Template.bind({});
// gap16.args = {
//   gap: '16',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const gap32 = Template.bind({});
// gap32.args = {
//   gap: '32',
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
// export const maxWidth = Template.bind({});
// maxWidth.args = {
//   max: true,
//   children: (
//     <>
//       <div>first</div>
//       <div>second</div>
//       <div>third</div>
//       <div>fourth</div>
//       <div>fifth</div>
//     </>
//   ),
// };
