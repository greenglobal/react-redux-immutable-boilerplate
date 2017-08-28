var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('./src/constants/config');

const ENV = process.env.NODE_ENV || 'development';
const sourcePath = path.join(__dirname, './');
const {
  PORT,
  API_URL
} = config;

var _module = {
  rules: [
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|ttf|woff|svg)/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash].[name].[ext]'
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            // optimizationLevel: 7,

            optipng: {
              optimizationLevel: 7
            },
            gifsicle: {
              interlaced: false,
            }
          }
        }
      ]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'babel-preset-stage-3']
      }
    }, {
      test: /\.(css)$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: "css-loader"
        }]
      })
    }
  ],
};

var resolve = {
  extensions: [
    '*', '.js', '.json'
  ],
  modules: [
    path.resolve(__dirname, './node_modules'), 'node_modules'
  ],
  alias: {
    'base': path.resolve(__dirname, './src/'),
    'components': path.resolve(__dirname, './src/components/'),
    'assets': path.resolve(__dirname, './src/assets/'),
    'constants': path.resolve(__dirname, './src/constants'),
    'api': path.resolve(__dirname, './src/api/'),
    'app': path.resolve(__dirname, './src/components/app'),
    'pages': path.resolve(__dirname, './src/components/pages'),
    'layouts': path.resolve(__dirname, './src/components/layouts'),
    'modules': path.resolve(__dirname, './src/components/modules'),
    'build': path.resolve(__dirname, './build')
  }
};

var plugins = ([
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    debug: ENV,
    options: {
      context: __dirname
    }
  }),
  new ExtractTextPlugin({
    filename: 'style.css',
    disable: false,
    allChunks: true
  })
]);

// ===============

module.exports = function (env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = ENV === 'production';

  const envars = {
    NODE_ENV: JSON.stringify(ENV),
    API_URL: JSON.stringify(API_URL),
    PORT: JSON.stringify(PORT)
  };

  const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }),
    new webpack.EnvironmentPlugin(envars),
    new webpack.DefinePlugin({
      'process.env': envars
    }),
    new webpack.NamedModulesPlugin()
  ];

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
      })
    );
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.LoaderOptionsPlugin({
        debug: true,
        options: {
          context: __dirname
        }
      }),
    );
  }

  const devtool = isProd ? 'source-map' : 'eval';

  return [
    {
      devtool: devtool,
      context: sourcePath,
      name: "browser",
      entry: {
        app: [
          'babel-polyfill',
          'assets/css/reset.css',
          'assets/css/fonts.css',
          'assets/css/styles.css',
          './src/index.js'
        ],
      },
      output: {
        path: path.join(__dirname, '../build'),
        filename: 'bundle.js',
        publicPath: ''
      },
      module: _module,
      plugins: plugins.concat(
        new HtmlWebpackPlugin({
          template: path.resolve('./src/', 'index.html'),
          minify: {
            collapseWhitespace: true
          }
        }),
        new CopyWebpackPlugin([
          {
            from: './lib-pdf/**/*'
          }
        ])
      ),
      performance: isProd && {
        //maxAssetSize: 100,
        //maxEntrypointSize: 300,
        hints: 'warning'
      },
      stats: {
        colors: {
          green: '\u001b[32m'
        }
      },
      node: {
        fs: 'empty',
        child_process: 'empty',
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: false
      },
      resolve: resolve,
      devServer: {
        host: '0.0.0.0',
        port: process.env.PORT || 3000,
        contentBase: './',
        historyApiFallback: true
      }
    }
  ];
}
