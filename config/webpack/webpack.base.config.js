const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssCssnext = require('postcss-cssnext');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');

module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|build)/,
        query: {
          presets: ['env'],
          plugins: [['import', {libraryName: 'antd-mobile', style: 'css'}]]
        }
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64:3]'
          }
        }, {
          loader: 'sass-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9' // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009'
              }),

              postcssAspectRatioMini({}),

              postcssPxToViewport({
                viewportWidth: 750, // (Number) The width of the viewport.
                viewportHeight: 1334, // (Number) The height of the viewport.
                unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
                viewportUnit: 'vw', // (String) Expected units.
                selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
                minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
                mediaQuery: false // (Boolean) Allow px to be converted in media queries.
              }),

              postcssWriteSvg({
                utf8: false
              }),

              postcssCssnext({}),

              postcssViewportUnits({}),

              cssnano({
                preset: 'advanced',
                autoprefixer: false,
                'postcss-zindex': false
              })
            ]
          }
        }]
      }, {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ // 定义环境变量
      'process.env': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
      inject: 'body',
      minify: {
        caseSensitive: false,
        collapseBooleanAttributes: true,
        collapseWhitespace: true
      },
      hash: true,
      chunks: 'app'
    })
  ],

  externals: {
    lodash: '_',
    district: 'district',
    echarts: 'echarts'
  },

  resolve: {
    alias: {
      config: path.join(__dirname, '../../config', process.env.NODE_ENV),
      components: path.join(__dirname, '../../components'),
      actions: path.join(__dirname, '../../src/actions', 'index'),
      utils: path.join(__dirname, '../../tools', 'utils'),
      histories: path.join(__dirname, '../src', 'history')
    }
  }
};
