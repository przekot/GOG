const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    app: path.resolve(__dirname,'app'),
    build: path.resolve(__dirname,'build')
};

module.exports = {
    entry: {
        app: PATHS.app + "/index.js"
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    plugins:
      [
        new HtmlWebpackPlugin({
          template: 'app/index.html'
        })
      ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    mode: "production",
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              js: 'babel-loader', options: {presets: ['env']}
            }
          }
        },
        {
          test: /\.css$/,
          loaders: ['style-loader','css-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/images/'
              }
            }
          ]
        }
      ]
    }
};
