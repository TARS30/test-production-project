// module.exports = {
//   stories: [
//     '../../src/**/*.stories.@(js|jsx|ts|tsx)',
//   ],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//   ],
//   framework: '@storybook/react',
//   core: {
//     builder: 'webpack5',
//   },
// };

import path from 'path';
import { DefinePlugin } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config = {
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
    const paths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '../src'),
      buildLocales: path.resolve(__dirname, '..', 'build', 'locales'),
      locales: path.resolve(__dirname, '..', 'public', 'locales'),
    };

    config?.resolve?.modules?.push(paths.src);

    config?.resolve?.extensions?.push('.ts', '.tsx');

    /// //////////////////////////////////////////////////////////////////////
    //   svg helper
    const imageRule = config.module?.rules?.find((rule) => {
      const { test } = (rule);

      if (!test) {
        return false;
      }

      return test.test('.svg');
    });

    imageRule.exclude = /\.svg$/;

    config?.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    /// //////////////////////////////////////////////////////////////////////

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
