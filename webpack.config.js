/**
 * Created by Mili on 2017/6/14.
 */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './app/index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')   // 必须是绝对路径
  },

  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
        //不分离css，style标签内联
        // use: [
        //   { loader: 'style-loader' },   //负责页面style标签的生成
        //   { loader: 'css-loader' },
        //   { loader: 'less-loader' }
        // ]
      }, {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader'}
        ]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'index.css'
    }),   //分离css

    new HtmlWebpackPlugin({
      template: 'index.html' // 模版文件
    })
  ],

  devServer: {
    contentBase: "./",   //本地服务器所加载的页面所在的目录
    port: "8090",
    historyApiFallback: true,   //不跳转
    inline: true,   //实时刷新
  }
};