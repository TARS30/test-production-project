import babelPropsRemovePlugin from '../../babel/babelPropsremovePlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTSX?: boolean;
}

export const buildBabelLoader = ({ isDev, isTSX }: BuildBabelLoaderProps) => ({
  test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          'i18next-extract',
          {
            locales: ['ru', 'en'],
            keyAsDefaultValue: true,
          },
        ],
        [
          '@babel/plugin-transform-typescript',
          {
            isTSX,
          },
        ],
        '@babel/plugin-transform-runtime',
        isTSX && [
          babelPropsRemovePlugin,
          {
            props: [
              'data-testid',
            ],
          },
        ],
        isDev && require.resolve('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
});
