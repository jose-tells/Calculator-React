const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPLugin = require('eslint-webpack-plugin');

require('dotenv').config();

const isDev = (process.env.ENV === 'development');
const entry = ['./src/frontend/index.js'];

if (isDev) {
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true');
}

module.exports = {
  entry,
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: isDev ? 'assets/app.js' : 'assets/app-[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[contenthash].js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name);
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|styl)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[contenthash].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[contenthash].css',
    }),
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDev ? () => {} : new CompressionPlugin({
      test: /\.(js|css)$/,
      filename: '[path][base].gz',
    }),
    isDev ? () => {} : new WebpackManifestPlugin(),
    isDev ? () => {} : new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(`${__dirname}/src/server/public`),
    }),
    isDev ? new ESLintPLugin({
      extensions: ['js', 'jsx'],
      fix: true,
    }) : () => {},
  ],
};
