import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = buildBabelLoader(options);

  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    // exclude: /node_modules/,
    exclude: /node_modules|\.d\.ts$/,
    use: 'ts-loader',
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noEmit: false, // this option will solve the issue
          },
        },
      },
    ],
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ];
}
