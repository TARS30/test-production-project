// import { addDecorator } from '@storybook/react';
// import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
// import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from '../../src/app/providers/ThemeProvider';
// import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
// import {
//   SuspenseDecorator,
// } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },

// };

// addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator);
// addDecorator(SuspenseDecorator);
import { BuildPaths } from './../config/build/types/config';
import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { DefinePlugin } from 'webpack';
import { buildCssLoader } from '../config/build/loaders/buildCssLoader';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-onboarding',
  ],

  webpackFinal: async (config) => {
    const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname,  '../src'),
      buildLocales: path.resolve(__dirname, '..', 'build', 'locales'),
      locales: path.resolve(__dirname,  '..', 'public', 'locales'),
    };
    
    config?.resolve?.modules?.push(paths.src);
    
    config?.resolve?.extensions?.push('.ts', '.tsx', );

   /////////////////////////////////////////////////////////////////////////
   //   svg helper
    const imageRule = config.module?.rules?.find(rule => {
      const test = (rule as { test: RegExp }).test
      
      if (!test) {
        return false
      }
      
      return test.test('.svg')
    }) as { [key: string]: any }

    imageRule.exclude = /\.svg$/

    config?.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
/////////////////////////////////////////////////////////////////////////

    config?.module?.rules?.push(buildCssLoader(true));

    config?.plugins?.push(new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
  },
};
export default config;
