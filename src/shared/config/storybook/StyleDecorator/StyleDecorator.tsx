// import { StoryFn } from '@storybook/addons';
import { StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import App from '@/app/App';

// export const StyleDecorator = (story: () => StoryFn) => story();

export const StyleDecorator = (StoryComponent: StoryFn) => <StoryComponent />;
