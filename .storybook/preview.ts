import { Theme } from './../src/shared/const/theme';
import { StyleDecorator } from './../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import type { Preview } from "@storybook/react";
import { RouterDecorator } from './../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from './../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from './../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen'
  },
   decorators: [
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
    // StyleDecorator,
  ],
};

export default preview;
