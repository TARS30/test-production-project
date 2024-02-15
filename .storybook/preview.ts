import type { Preview } from "@storybook/react";
import { Theme } from './../src/app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from './../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from './../src/shared/config/storybook/StyleDecorator/StyleDecorator';
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
  },
   decorators: [
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
    StyleDecorator,
  ],
};

export default preview;