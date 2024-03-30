// // import { StoryFn } from '@storybook/addons';
// import '@/app/styles/index.scss';
// import { StoryFn } from '@storybook/react';

// // export const StyleDecorator = (story: () => StoryFn) => story();

// export const StyleDecorator = (StoryComponent: StoryFn) => <StoryComponent />;

import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();
